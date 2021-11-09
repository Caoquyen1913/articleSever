import articleRouter from './article/article.router';
import userRouter from './user/user.router';
import express from 'express';

const router = express.Router();
router.use('/article', articleRouter);
router.use('/user', userRouter);
export default router;
