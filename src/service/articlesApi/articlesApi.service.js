import { options } from 'joi';
import { ArticlesAPI } from './articlesApi.const';
import apiHandle from '../../utils/apiHandle';

const getArticles = async(options) => {
    const { router, method } = ArticlesAPI.GET_ARTICLES;
    const data = await apiHandle.callAPI({
        url: router,
        method,
        options,
    });
    return data;
};

const createArticle = async(data, options = {}) => {
    const { router, method } = ArticlesAPI.CREATE_ARTICLES;
    const { result, status } = await apiHandle.callAPI({
        url: router,
        method,
        data,
        options,
        // options : {
        //   Headers: {
        //     "api-key": "DVqQ7YcKdeiBSgXcBeW8owB5"
        //   }
        // },
    });
    console.log(result);
    return { result, status };
};

const getArticleOfMe = async(options = {}) => {
    const { router, method } = ArticlesAPI.GET_ARTICLE_OF_ME;
    const { result, status } = await apiHandle.callAPI({
        url: router,
        method,
        options
    })
    return {
        result,
        status
    }
};

export default {
    getArticles,
    createArticle,
    getArticleOfMe
};