"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

require("./cronJobs");

var _responseHandle = _interopRequireDefault(require("./utils/responseHandle"));

var _router = _interopRequireDefault(require("./api/router"));

var _docApi = _interopRequireDefault(require("./docs/docApi.router"));

var _httpCode = require("./const/httpCode");

var _rateLimit = require("./config/rateLimit.config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import favicon from 'serve-favicon';
// import mongooseConfig from './config/mongoose.config';
_dotenv.default.config(); // let compiler = webpack(configuration);
// new webpack.ProgressPlugin().apply(compiler);
// compiler.run(function (err, stats) {
// const compiler = webpack(configuration);
// const app = new WebpackDevServer(compiler, {
//   stats: {
//     colors: true,
//   },
// });


const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_rateLimit.limiter);
app.use((0, _morgan.default)('combined'));
app.use(_express.default.static(_path.default.join(__dirname, "..", "public"))); // app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
// app.use(express.static(path.join(__dirname, "..", "public", 'favicon.ico')));

const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  return res.sendFile(_path.default.join(__dirname, "..", "public", "index.html"));
});
app.use('/api/v1', _router.default);
app.use('/docs', _docApi.default); // app.all('*', async(req, res) => {
//     // try {
//     //   return responseHandle.send(res, HttpStatusCode.OK, {
//     //     message: 'ok',
//     //     data: data.data,
//     //   });
//     // } catch (error) {
//     return responseHandle.send(res, HttpStatusCode.NOT_FOUND, {
//         errors: [{
//             error: 'the router can not be found',
//             // error: error.message,
//         }, ],
//     });
//     // }
// });

const host = "0.0.0.0";
app.listen(PORT, host, async () => {
  // await mongooseConfig.mongoConnect();
  console.log('run port:', PORT);
}); // });
//# sourceMappingURL=index.js.map