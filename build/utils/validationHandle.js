"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validatorjs = _interopRequireDefault(require("validatorjs"));

var _httpCode = require("../const/httpCode");

var _responseHandle = _interopRequireDefault(require("./responseHandle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
          error: result.error
        });
      }

      return next();
    } catch (error) {
      return _responseHandle.default.send(res, _httpCode.HttpStatusCode.INTERNAL_SERVER, {
        errors: [{
          error: error.message
        }]
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
          result = new _validatorjs.default(req.body, schema);
          req.body = result.input;
          break;

        case 'params':
          result = new _validatorjs.default(req.params, schema);
          break;

        default:
          result = new _validatorjs.default(req.query, schema);
          req.query = result.input;
          break;
      }

      if (result.fails()) {
        // const err = new Error(result.error);
        // err.statusCode = 400;
        // return next(err);
        return _responseHandle.default.send(res, _httpCode.HttpStatusCode.BAD_REQUEST, {
          errors: [{
            error: result.errors
          }]
        });
      }

      return next();
    } catch (error) {
      return _responseHandle.default.send(res, _httpCode.HttpStatusCode.INTERNAL_SERVER, {
        errors: [{
          error: error.message
        }]
      });
    }
  };
};

var _default = {
  validate,
  validator
};
exports.default = _default;
//# sourceMappingURL=validationHandle.js.map