import articleModel from './article.model';
import pagingHandle from '../../utils/pagingHandle';
const getArticle = async (req, res, next) => {
  try {
    const { tags, dateStart, dateEnd, page, limit } = req.query;
    dateStart = new Date(dateStart);
    dateEnd = new Date(dateEnd);
    const query = { updatedAt: { $gte: fromDate, $lt: toDate } };
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
  } catch (error) {
    return next(error);
  }
};

const create = async (req, res, next) => {
    try {
        const article = await articleModel.create({
            ...req.body,
        })
    } catch (error) {
        return next(error)
    }
}

export default {
    getArticle
}