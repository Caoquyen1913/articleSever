import { ArticlesAPI } from './articlesApi.const';
import { callAPI } from '../../utils/apiHandle';
const getArticles = async (options) => {
  const { router, method } = ArticlesAPI.GET_ARTICLES;
  const data = await callAPI({
    url: router,
    method,
    options,
  });
  return data;
};

const createArticle = async (data, options = {}) => {
  const { router, method } = ArticlesAPI.CREATE_ARTICLES;
  const { result, status } = await callAPI({
    url: router,
    method,
    data,
    // options : {
    //   Headers: {
    //     "api-key": "DVqQ7YcKdeiBSgXcBeW8owB5"
    //   }
    // },
  });
  console.log(result);
  return { result, status };
};

export default {
  getArticles,
  createArticle,
};
