"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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