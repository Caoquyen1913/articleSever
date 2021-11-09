import Joi from 'joi';

const signIn = Joi.object().keys({
  name: Joi.string().trim().required(),
  username: Joi.string().trim().required(),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9]{6,30}$/)
    .required(),
});

const getListUser = Joi.object().keys({
  wildcard: Joi.string()
    .regex(/^[a-zA-Z]{1}$/)
    .optional(),
  name: Joi.string().optional(),
  username: Joi.string().optional(),
});

export default {
  signIn,
  getListUser,
};
