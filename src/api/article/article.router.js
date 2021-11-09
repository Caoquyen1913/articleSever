import express from 'express';
import articleController from './article.controller';
import validationHandle from '../../utils/validationHandle';
import articleDto from './article.dto';
const router = express.Router();

router.get(
  '/',
  validationHandle.validate(articleDto.getArticleSchema, 'query'),
  articleController.getArticle
);

router.post(
  '/',
  validationHandle.validate(articleDto.createSchema, 'body'),
  articleController.create
);

router.put(
  "/like/:id",
  articleController.likeArticle
)
export default router;
