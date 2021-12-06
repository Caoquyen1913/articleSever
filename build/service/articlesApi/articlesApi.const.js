"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.METHOD = exports.ArticlesAPI = void 0;
const METHOD = {
  POST: "post",
  PUT: "put",
  DELETE: "delete",
  GET: "get"
};
exports.METHOD = METHOD;
const ArticlesAPI = {
  CREATE_ARTICLES: {
    router: "/articles",
    method: METHOD.POST
  },
  GET_ARTICLES: {
    router: "/articles",
    method: METHOD.GET
  },
  GET_ARTICLE_OF_ME: {
    router: "/articles/me",
    method: METHOD.GET
  }
};
exports.ArticlesAPI = ArticlesAPI;
//# sourceMappingURL=articlesApi.const.js.map