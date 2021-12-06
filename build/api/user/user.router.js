"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("./user.controller"));

var _user2 = _interopRequireDefault(require("./user.dto"));

var _validationHandle = _interopRequireDefault(require("../../utils/validationHandle"));

var _user3 = _interopRequireDefault(require("./user.middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.post('/signin', _validationHandle.default.validate(_user2.default.signIn, 'body'), _user3.default.signIn, _user.default.signIn);
router.get('/', _validationHandle.default.validate(_user2.default.getListUser, 'query'), _user.default.getUser);
var _default = router;
exports.default = _default;
//# sourceMappingURL=user.router.js.map