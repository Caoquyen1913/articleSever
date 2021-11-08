import articleRouter from './article/article.router';
import express from 'express';

const router = express.Router();
router.use('/article', articleRouter);

export default router;
