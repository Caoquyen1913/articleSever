"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = require("joi");

var _articlesApi = require("./articlesApi.const");

var _apiHandle = _interopRequireDefault(require("../../utils/apiHandle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getArticles = async options => {
  const {
    router,
    method
  } = _articlesApi.ArticlesAPI.GET_ARTICLES;
  const data = await _apiHandle.default.callAPI({
    url: router,
    method,
    options
  });
  return data;
};

const createArticle = async (data, options = {}) => {
  const {
    router,
    method
  } = _articlesApi.ArticlesAPI.CREATE_ARTICLES;
  const {
    result,
    status
  } = await _apiHandle.default.callAPI({
    url: router,
    method,
    data,
    options // options : {
    //   Headers: {
    //     "api-key": "DVqQ7YcKdeiBSgXcBeW8owB5"
    //   }
    // },

  });
  console.log(result);
  return {
    result,
    status
  };
};

const getArticleOfMe = async (options = {}) => {
  const {
    router,
    method
  } = _articlesApi.ArticlesAPI.GET_ARTICLE_OF_ME;
  const {
    result,
    status
  } = await _apiHandle.default.callAPI({
    url: router,
    method,
    options
  });
  return {
    result,
    status
  };
};

var _default = {
  getArticles,
  createArticle,
  getArticleOfMe
};
exports.default = _default;
//# sourceMappingURL=articlesApi.service.js.map