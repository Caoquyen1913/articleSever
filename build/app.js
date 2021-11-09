"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("./config/mongoose.config"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _redis = _interopRequireDefault(require("redis"));

require("./cronJobs");

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _router = _interopRequireDefault(require("./api/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const app = (0, _express.default)();

const redisClient = _redis.default.createClient(6379);

app.use((0, _cors.default)());
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.json({
    message: 'wellcome'
  });
});
app.use('/api/v1', _router.default);
app.all('*', (req, res, next) => {
  const err = new Error('the router can not be found');
  err.statusCode = 404;
  return next(err);
});
app.listen(PORT, async () => {
  await _mongoose.default.mongoConnect();
  await redisClient.on("connect", () => {
    console.log("connect redis");
  });
  console.log('run port 5000');
});
//# sourceMappingURL=app.js.map