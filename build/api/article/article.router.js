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

router.get('/me', _article.default.getArticleOfMeAxios);
router.get('/', _validationHandle.default.validator(_article2.default.getArticle, 'query'), _article.default.getArticleAxios);
router.post('/', // validationHandle.validate(articleDto.createSchema, 'body'),
_validationHandle.default.validator(_article2.default.createArticle, 'body'), _article.default.createArticleAxios);
router.post("/mongo", _article.default.create);
router.put("/like/:id", _article.default.likeArticle);
var _default = router;
exports.default = _default;
//# sourceMappingURL=article.router.js.map