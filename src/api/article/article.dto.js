import Joi from 'joi';

const createSchema = Joi.object().keys({
  title: Joi.string().trim(),
  published: Joi.boolean(),
  body_markdown: Joi.string(),
  tag: Joi.array().items(Joi.string()),
  series: Joi.string(),
  main_image: Joi.string(),
  canonical_image: Joi.string(),
  description: Joi.string(),
});

const getArticleSchema = Joi.opject().keys({
  key: Joi.string().optional(),
  tags: Joi.array().items(Joi.string()),
  page: Joi.number().min(0),
  limit: Joi.number().min(0),
});

export default {
  createSchema,
  getArticleSchema,
};
