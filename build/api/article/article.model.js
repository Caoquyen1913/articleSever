"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const articleSchema = new _mongoose.Schema({
  title: {
    type: String,
    text: true
  },
  published: {
    type: Boolean
  },
  body_markdown: {
    type: String
  },
  tags: {
    type: [String]
  },
  series: {
    type: String
  },
  main_image: {
    type: String
  },
  canonical_url: {
    type: String
  },
  description: {
    type: String
  },
  like: {
    type: Number,
    min: 0
  } // organization_id: {
  //     type: Number
  // }

}, {
  timestamps: true
});
articleSchema.index({
  title: 'text'
});

var _default = (0, _mongoose.model)("article", articleSchema);

exports.default = _default;
//# sourceMappingURL=article.model.js.map