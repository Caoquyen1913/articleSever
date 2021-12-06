"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const loadArticleData = () => {
  const data = _fs.default.readFileSync(_path.default.resolve(__dirname, '../../../temp/articleData.json'));

  const articles = JSON.parse(data);
  return articles;
};

var _default = {
  loadArticleData
};
exports.default = _default;
//# sourceMappingURL=article.service.js.map