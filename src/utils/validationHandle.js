import Validator from 'validatorjs';
import { HttpStatusCode } from '../const/httpCode';
import responseHandle from './responseHandle';

const validate = (schema, reqType) => {
  return function valid(req, res, next) {
    try {
      let result = {};
      switch (reqType) {
        case 'body':
          result = schema.validate(req.body);
          req.body = result.value;
          break;
        case 'params':
          result = schema.validate(req.params);
          break;
        default:
          result = schema.validate(req.query);
          req.query = result.value;
          break;
      }
      if (result.error) {
        // const err = new Error(result.error);
        // err.statusCode = 400;
        // return next(err);
        return res.json({
          error: result.error,
        });
      }

      return next();
    } catch (error) {
      return responseHandle.send(res, HttpStatusCode.INTERNAL_SERVER, {
        errors: [
          {
            error: error.message,
          },
        ],
      });
    }
  };
};
const validator = (schema, reqType) => {
  return function valid(req, res, next) {
    try {
      let result = {};
      switch (reqType) {
        case 'body':
          result = new Validator(req.body, schema);
          req.body = result.input;
          break;
        case 'params':
          result = new Validator(req.params, schema);
          break;
        default:
          result = new Validator(req.query, schema);
          req.query = result.input;
          break;
      }
      if (result.fails()) {
        // const err = new Error(result.error);
        // err.statusCode = 400;
        // return next(err);
        return responseHandle.send(res, HttpStatusCode.BAD_REQUEST, {
          errors: [
            {
              error: result.errors,
            },
          ],
        });
      }
      return next();
    } catch (error) {
      return responseHandle.send(res, HttpStatusCode.INTERNAL_SERVER, {
        errors: [
          {
            error: error.message,
          },
        ],
      });
    }
  };
};
export default {
  validate, validator,
};