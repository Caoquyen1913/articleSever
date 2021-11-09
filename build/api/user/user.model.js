"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const userSchema = (0, _mongoose.Schema)({
  name: {
    type: String,
    required: true,
    max: 50
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)("user", userSchema);

exports.default = _default;
//# sourceMappingURL=user.model.js.map