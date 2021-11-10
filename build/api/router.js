"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _article = _interopRequireDefault(require("./article/article.router"));

var _user = _interopRequireDefault(require("./user/user.router"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.use('/article', _article.default);
router.use('/user', _user.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=router.js.map