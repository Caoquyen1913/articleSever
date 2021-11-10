"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("./config/mongoose.config"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

require("./cronJobs");

var _responseHandle = _interopRequireDefault(require("./utils/responseHandle"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _router = _interopRequireDefault(require("./api/router"));

var _httpCode = require("./const/httpCode");

var _rateLimit = require("./config/rateLimit.config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_rateLimit.limiter);
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.json({
    message: 'wellcome'
  });
});
app.use('/api/v1', _router.default);
app.all('*', (req, res) => {
  return _responseHandle.default.send(res, _httpCode.HttpStatusCode.NOT_FOUND, {
    errors: [{
      error: 'the router can not be found'
    }]
  });
});
app.listen(PORT, async () => {
  await _mongoose.default.mongoConnect();
  console.log('run port 5000');
});
//# sourceMappingURL=app.js.map