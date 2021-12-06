"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _express = _interopRequireDefault(require("express"));

var _docApi = _interopRequireDefault(require("./docApi.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API',
      description: '',
      contact: {
        name: 'dev'
      }
    },
    severs: ['http://localhost:5000/api/v1']
  },
  apis: ['../app.js']
};
const swaggerDocs = (0, _swaggerJsdoc.default)(swaggerOptions);
router.use('/', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_docApi.default, swaggerDocs));
var _default = router;
exports.default = _default;
//# sourceMappingURL=docApi.router.js.map