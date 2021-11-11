// import Joi from 'joi';
// const createSchema = Joi.object().keys({
//   title: Joi.string().trim(),
//   published: Joi.boolean(),
//   body_markdown: Joi.string(),
//   tags: Joi.array().items(Joi.string()),
//   series: Joi.string(),
//   main_image: Joi.string(),
//   canonical_url: Joi.string(),
//   description: Joi.string(),
// });

// const getArticleSchema = Joi.object().keys({
//   key: Joi.string().optional(),
//   tags: Joi.alternatives().try(
//     Joi.array().items(Joi.string()).optional(),
//     Joi.string()
//   ),
//   page: Joi.number().min(0).optional(),
//   limit: Joi.number().min(0).optional(),
//   dateStart: Joi.string().isoDate().optional(),
//   dateEnd: Joi.string().isoDate().optional(),
// });

// export default {
//   createSchema,
//   getArticleSchema,
// };

const getArticle ={
  page: "integer|min:1",
  per_page: "integer|min:1",
  tag: "string",
  dateStart: "string",
  dateEnd: "string"
}

const createArticle = {
  article: {
    title: "string|required",
    published: "boolean",
    body_markdown: "string",
    tags: "array",
    series: "string"
  }
}

export default {
  getArticle,
  createArticle
}