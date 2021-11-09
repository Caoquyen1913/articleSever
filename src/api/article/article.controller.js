import articleModel from './article.model';
import pagingHandle from '../../utils/pagingHandle';
import responseHandle from '../../utils/responseHandle';
import articleService from './article.service';
import { HttpStatusCode } from '../../const/httpCode';
const getArticle = async (req, res) => {
  try {
    if (Object.keys(req.query).length === 0) {
      console.log('here');
      const articles = articleService.loadArticleData();
      return responseHandle.send(res, HttpStatusCode.OK, {
        data: articles,
        message: 'get top 20 success',
      });
    }
    let { tags, dateStart, dateEnd, page, limit, key } = req.query;
    dateStart = new Date(dateStart);
    dateEnd = new Date(dateEnd);
    let query = {};
    if (dateStart && dateEnd)
      query = { ...query, updatedAt: { $gte: dateStart, $lt: dateEnd } };
    if (tags)
      query = {
        ...query,
        tags: {
          $in: tags,
        },
      };
    if (key)
      query = {
        ...query,
        $text: {
          $search: key,
        },
      };
    const [articles, totalPages] = await pagingHandle.paging({
      model: articleModel,
      query,
      selection: {},
      page,
      limit,
      options: {},
    });

    return responseHandle.sendPaging(
      res,
      HttpStatusCode.OK,
      {
        message: 'get article success',
        data: articles,
      },
      totalPages,
      page
    );
  } catch (error) {
    return responseHandle.send(res, HttpStatusCode.INTERNAL_SERVER, {
      errors: [
        {
          error: error.message,
        },
      ],
    });
  }
};

const create = async (req, res) => {
  try {
    const article = await articleModel.create({
      ...req.body,
      like: 0,
    });
    return responseHandle.send(res, HttpStatusCode.OK, {
      message: 'create article success',
      data: article,
    });
  } catch (error) {
    return responseHandle.send(res, HttpStatusCode.INTERNAL_SERVER, {
      errors: [
        {
          error: error.message,
        },
      ],
    });
  }
};

const likeArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedArticle = await articleModel.findOneAndUpdate(
      {
        _id: id,
        published: true,
      },
      {
        $inc: {
          like: 1,
        },
      }
    );
    return responseHandle.send(res, HttpStatusCode.OK, {
      message: 'like article success',
      data: updatedArticle,
    });
  } catch (error) {
    return responseHandle.send(res, HttpStatusCode.INTERNAL_SERVER, {
      errors: [
        {
          error: error.message,
        },
      ],
    });
  }
};

export default {
  getArticle,
  create,
  likeArticle,
};
