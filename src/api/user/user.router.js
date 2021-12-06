import express from 'express';
import userController from './user.controller';
import userDto from './user.dto';
import validationHandle from '../../utils/validationHandle';
import userMiddleware from './user.middleware';

const router = express.Router();
router.post(
  '/signin',
  validationHandle.validate(userDto.signIn, 'body'),
  userMiddleware.signIn,
  userController.signIn,
);
router.get(
  '/',
  validationHandle.validate(userDto.getListUser, 'query'),
  userController.getUser,
);
export default router;
