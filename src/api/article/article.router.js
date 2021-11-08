import express from 'express';
import articleController from './article.controller';
import validationHandle from '../../utils/validationHandle';
import articleDto from './article.dto';
const router = express.Router();

router.get(
  '/',
  validationHandle.validate(articleDto, 'query'),
  articleController.getArticle
);

export default router;
