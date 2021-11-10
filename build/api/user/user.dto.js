"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const signIn = _joi.default.object().keys({
  name: _joi.default.string().trim().required(),
  username: _joi.default.string().trim().required(),
  password: _joi.default.string().regex(/^[a-zA-Z0-9]{6,30}$/).required()
});

const getListUser = _joi.default.object().keys({
  wildcard: _joi.default.string().regex(/^[a-zA-Z]{1}$/).optional(),
  name: _joi.default.string().optional(),
  username: _joi.default.string().optional()
});

var _default = {
  signIn,
  getListUser
};
exports.default = _default;
//# sourceMappingURL=user.dto.js.map