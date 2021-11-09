"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cronJob = require("../cronJob");

var _article = _interopRequireDefault(require("../../api/article/article.model"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

(0, _cronJob.cronJob)(process.env.CRONJOB_ARTICLE_TERM, async () => {
  try {
    console.log('start cron');
    const topArticle = await _article.default.find().sort({
      like: -1
    }).limit(20);
    const data = JSON.stringify(topArticle);

    _fs.default.writeFileSync(__dirname + '/../../../temp/articleData.json', data);

    console.log('end cron');
  } catch (error) {
    console.log(error);
  }
});
//# sourceMappingURL=article.cronjob.js.map