"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mongoConnect = async () => {
  try {
    const connect = await _mongoose.default.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    if (connect) {
      console.log("connect mongo");
    } else {
      console.log("connect mongo fail");
    }
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

var _default = {
  mongoConnect
};
exports.default = _default;
//# sourceMappingURL=mongoose.config.js.map