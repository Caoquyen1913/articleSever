import { HttpStatusCode } from '../../const/httpCode';
import responseHandle from '../../utils/responseHandle';
import userModel from './user.model';

const signIn = async (req, res, next) => {
  try {
    const { username } = req.body;
    const user = await userModel.findOne({
      username,
      isActive: true,
    });
    if (user) {
      return responseHandle.send(res, HttpStatusCode.CONFLIC, {
        errors: [
          {
            error: 'username already existed',
          },
        ],
      });
    }
    return next();
  } catch (error) {
    return responseHandle.send(res, HttpStatusCode.CONFLIC, {
      errors: [
        {
          error: error.message,
        },
      ],
    });
  }
};

export default {
  signIn,
};