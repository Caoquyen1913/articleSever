"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _cronJob = _interopRequireDefault(require("../cronJob"));

var _articlesApi = _interopRequireDefault(require("../../service/articlesApi/articlesApi.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import articleModel from '../../api/article/article.model';
_dotenv.default.config(); // cronJob(process.env.CRONJOB_ARTICLE_TERM, async () => {
//   try {
//     console.log('start cron');
//     const topArticle = await articleModel
//       .find()
//       .sort({
//         like: -1,
//       })
//       .limit(20);
//     const data = JSON.stringify(topArticle);
//     fs.writeFileSync(__dirname+'/../../../temp/articleData.json',data);
//     console.log('end cron');
//   } catch (error) {
//     console.log(error);
//   }
// });


_cronJob.default.cronJob(process.env.CRONJOB_ARTICLE_TERM, async () => {
  try {
    console.log('start cron');
    const params = {
      page: 1,
      per_page: 20,
      state: "rising",
      top: 20
    };
    const topArticle = await _articlesApi.default.getArticles({
      params
    });
    const data = JSON.stringify(topArticle);

    _fs.default.writeFileSync(_path.default.resolve(__dirname, '../../../temp/articleData.json'), data);

    console.log('end cron');
  } catch (error) {
    console.log(error);
  }
});
//# sourceMappingURL=article.cronjob.js.map