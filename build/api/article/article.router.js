"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _article = _interopRequireDefault(require("./article.controller"));

var _validationHandle = _interopRequireDefault(require("../../utils/validationHandle"));

var _article2 = _interopRequireDefault(require("./article.dto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/', _validationHandle.default.validate(_article2.default.getArticleSchema, 'query'), _article.default.getArticle);
router.post('/', _validationHandle.default.validate(_article2.default.createSchema, 'body'), _article.default.create);
router.put("/like/:id", _article.default.likeArticle);
var _default = router;
exports.default = _default;
//# sourceMappingURL=article.router.js.map