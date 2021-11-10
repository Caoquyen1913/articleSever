"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _httpCode = require("../../const/httpCode");

var _responseHandle = _interopRequireDefault(require("../../utils/responseHandle"));

var _user = _interopRequireDefault(require("./user.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const signIn = async (req, res, next) => {
  try {
    const {
      username
    } = req.body;
    const user = await _user.default.findOne({
      username,
      isActive: true
    });
    if (user) return _responseHandle.default.send(res, _httpCode.HttpStatusCode.CONFLIC, {
      errors: [{
        error: 'username already existed'
      }]
    });
    return next();
  } catch (error) {
    return _responseHandle.default.send(res, _httpCode.HttpStatusCode.CONFLIC, {
      errors: [{
        error: error.message
      }]
    });
  }
};

var _default = {
  signIn
};
exports.default = _default;
//# sourceMappingURL=user.middleware.js.map