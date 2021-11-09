"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _article = _interopRequireDefault(require("./article.model"));

var _pagingHandle = _interopRequireDefault(require("../../utils/pagingHandle"));

var _responseHandle = _interopRequireDefault(require("../../utils/responseHandle"));

var _article2 = _interopRequireDefault(require("./article.service"));

var _httpCode = require("../../const/httpCode");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getArticle = async (req, res) => {
  try {
    if (!req.query) {
      const articles = _article2.default.loadArticleData();
    } else {
      let {
        tags,
        dateStart,
        dateEnd,
        page,
        limit,
        key
      } = req.query;
      dateStart = new Date(dateStart);
      dateEnd = new Date(dateEnd);
      let query = {
        updatedAt: {
          $gte: dateStart,
          $lt: dateEnd
        }
      };
      if (tags) query = _objectSpread(_objectSpread({}, query), {}, {
        tags: {
          $in: tags
        }
      });
      if (key) query = _objectSpread(_objectSpread({}, query), {}, {
        $text: {
          $search: key
        }
      });
      const [articles, totalPages] = await _pagingHandle.default.paging({
        model: _article.default,
        query,
        selection: {},
        page,
        limit,
        options: {}
      });
    }

    return _responseHandle.default.sendPaging(res, _httpCode.HttpStatusCode.OK, {
      message: 'get article success',
      data: articles
    }, totalPages, page);
  } catch (error) {
    return _responseHandle.default.send(res, _httpCode.HttpStatusCode.INTERNAL_SERVER, {
      errors: [{
        error: error.message
      }]
    });
  }
};

const create = async (req, res) => {
  try {
    const article = await _article.default.create(_objectSpread(_objectSpread({}, req.body), {}, {
      like: 0
    }));
    return _responseHandle.default.send(res, _httpCode.HttpStatusCode.OK, {
      message: 'create article success',
      data: article
    });
  } catch (error) {
    return _responseHandle.default.send(res, _httpCode.HttpStatusCode.INTERNAL_SERVER, {
      errors: [{
        error: error.message
      }]
    });
  }
};

const likeArticle = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const updatedArticle = await _article.default.findOneAndUpdate({
      _id: id,
      published: true
    }, {
      $inc: {
        like: 1
      }
    });
    return _responseHandle.default.send(res, _httpCode.HttpStatusCode.OK, {
      message: 'like article success',
      data: updatedArticle
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
  getArticle,
  create,
  likeArticle
};
exports.default = _default;
//# sourceMappingURL=article.controller.js.map