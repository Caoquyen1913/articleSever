export const METHOD = {
  POST: "post",
  PUT: "put",
  DELETE: "delete",
  GET: "get"
}

export const ArticlesAPI = {
  CREATE_ARTICLES: {
    router: "/articles",
    method: METHOD.POST 
  },
  GET_ARTICLES: {
    router: "/articles",
    method: METHOD.GET
  }
}