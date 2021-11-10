"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createSchema = _joi.default.object().keys({
  title: _joi.default.string().trim(),
  published: _joi.default.boolean(),
  body_markdown: _joi.default.string(),
  tags: _joi.default.array().items(_joi.default.string()),
  series: _joi.default.string(),
  main_image: _joi.default.string(),
  canonical_url: _joi.default.string(),
  description: _joi.default.string()
});

const getArticleSchema = _joi.default.object().keys({
  key: _joi.default.string().optional(),
  tags: _joi.default.array().items(_joi.default.string()).optional(),
  page: _joi.default.number().min(0).optional(),
  limit: _joi.default.number().min(0).optional(),
  dateStart: _joi.default.string().isoDate().optional(),
  dateEnd: _joi.default.string().isoDate().optional()
});

var _default = {
  createSchema,
  getArticleSchema
};
exports.default = _default;
//# sourceMappingURL=article.dto.js.map