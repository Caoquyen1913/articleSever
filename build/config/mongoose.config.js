"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const mongoConnect = async () => {
  try {
    const url = "mongodb://root:abc123@localhost:27017/article";
    const connect = await _mongoose.default.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      dbName: "article" // useFindAndModify: false,
      // useCreateIndex: true,
      // user: process.env.USER,
      // pass: process.env.PASS,

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