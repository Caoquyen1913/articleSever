"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_axios.default.defaults.baseURL = 'https://dev.to/api';
_axios.default.defaults.headers.common['api-key'] = 'DVqQ7YcKdeiBSgXcBeW8owB5';
_axios.default.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
var _default = _axios.default;
exports.default = _default;
//# sourceMappingURL=axios.config.js.map