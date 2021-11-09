import Joi from 'joi';

const createSchema = Joi.object().keys({
  title: Joi.string().trim(),
  published: Joi.boolean(),
  body_markdown: Joi.string(),
  tags: Joi.array().items(Joi.string()),
  series: Joi.string(),
  main_image: Joi.string(),
  canonical_url: Joi.string(),
  description: Joi.string(),
});

const getArticleSchema = Joi.object().keys({
  key: Joi.string().optional(),
  tags: Joi.array().items(Joi.string()).optional(),
  page: Joi.number().min(0),
  limit: Joi.number().min(0),
  dateStart: Joi.string().isoDate(),
  dateEnd: Joi.string().isoDate(),
});

export default {
  createSchema,
  getArticleSchema,
};
