"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = _interopRequireDefault(require("./user.model"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _responseHandle = _interopRequireDefault(require("../../utils/responseHandle"));

var _httpCode = require("../../const/httpCode");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const saltRounds = 10;

const signIn = async (req, res) => {
  try {
    const {
      name,
      username,
      password
    } = req.body;
    const hashPassword = await _bcrypt.default.hash(password, saltRounds);
    const user = await _user.default.create({
      name,
      username,
      password: hashPassword,
      isActive: true
    });
    user.password = undefined;
    user.isActive = undefined;
    return _responseHandle.default.send(res, _httpCode.HttpStatusCode.OK, {
      message: 'sign in success',
      data: user
    });
  } catch (error) {
    return _responseHandle.default.send(res, _httpCode.HttpStatusCode.INTERNAL_SERVER, {
      errors: [{
        error: error.message
      }]
    });
  }
};

const getUser = async (req, res) => {
  try {
    const {
      name,
      username,
      wildcard
    } = req.query;
    let query = {};
    if (wildcard) query = _objectSpread(_objectSpread({}, query), {}, {
      $or: [{
        name: {
          $regex: new RegExp('(' + wildcard.toString().toLowerCase() + ')\\w+', 'i')
        }
      }, {
        name: {
          $regex: new RegExp('(' + wildcard.toString().toUpperCase() + ')\\w+', 'i')
        }
      }]
    });

    if (name) {
      query = _objectSpread(_objectSpread({}, query), {}, {
        name: {
          $regex: new RegExp('(' + name + ')\\w+', 'i')
        }
      });
    }

    if (username) query = _objectSpread(_objectSpread({}, query), {}, {
      username: {
        $regex: new RegExp('(' + username + ')\\w+', 'i')
      }
    });
    const listUser = await _user.default.find(query).sort({
      name: 1
    }).select('-password -isActive');
    return _responseHandle.default.send(res, _httpCode.HttpStatusCode.OK, {
      message: 'get user success',
      data: listUser
    });
  } catch (error) {
    return _responseHandle.default.send(res, _httpCode.HttpStatusCode.INTERNAL_SERVER, {
      errors: [{
        error: error.message
      }]
    });
  }
};

var _default = {
  signIn,
  getUser
};
exports.default = _default;
//# sourceMappingURL=user.controller.js.map