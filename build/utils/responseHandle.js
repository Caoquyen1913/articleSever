"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const send = (res, httpCode, response = {}) => {
  return httpCode === 200 ? res.status(httpCode).json({
    data: response.data ? response.data : null,
    message: response.message,
    timestamps: Date.now()
  }) : res.status(httpCode).json({
    errors: response.errors,
    message: response.message,
    timestamps: Date.now()
  });
};

const sendPaging = (res, httpCode, response = {}, totalPage, page) => {
  return res.status(httpCode).json({
    data: response.data ? response.data : null,
    message: response.message,
    totalPage,
    page
  });
};

var _default = {
  send,
  sendPaging
};
exports.default = _default;
//# sourceMappingURL=responseHandle.js.map