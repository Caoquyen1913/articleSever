import dotenv from 'dotenv';
import fs from 'fs';
import path from "path";
import cronJob from '../cronJob';
// import articleModel from '../../api/article/article.model';
import articlesApiService from '../../service/articlesApi/articlesApi.service';

dotenv.config();

// cronJob(process.env.CRONJOB_ARTICLE_TERM, async () => {
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

cronJob.cronJob(process.env.CRONJOB_ARTICLE_TERM, async () => {
  try {
    console.log('start cron');
    const params = {
      page: 1,
      per_page: 20,
      state: "rising",
      top: 20,
    };
    const topArticle = await articlesApiService.getArticles({ params });
    const data = JSON.stringify(topArticle);
    fs.writeFileSync(path.resolve(__dirname, '../../../temp/articleData.json'), data);
    console.log('end cron');
  } catch (error) {
    console.log(error);
  }
});
