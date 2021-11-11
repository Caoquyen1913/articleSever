import express from 'express';
import articleController from './article.controller';
import validationHandle from '../../utils/validationHandle';
import articleDto from './article.dto';
const router = express.Router();

router.get(
  '/',
  validationHandle.validator(articleDto.getArticle, 'query'),
  articleController.getArticleAxios
);

router.post(
  '/',
  // validationHandle.validate(articleDto.createSchema, 'body'),
  validationHandle.validator(articleDto.createArticle, 'body'),
  articleController.createArticleAxios
);

router.put(
  "/like/:id",
  articleController.likeArticle
)
export default router;
