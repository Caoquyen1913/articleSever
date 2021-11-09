import dotenv from 'dotenv';
import { cronJob } from '../cronJob';
import articleModel from '../../api/article/article.model';
import fs from 'fs';
dotenv.config();

cronJob(process.env.CRONJOB_ARTICLE_TERM, async () => {
  try {
    console.log('start cron');
    const topArticle = await articleModel
      .find()
      .sort({
        like: -1,
      })
      .limit(20);
    const data = JSON.stringify(topArticle);
    fs.writeFileSync(__dirname+'/../../../temp/articleData.json',data);
    console.log('end cron');
  } catch (error) {
    console.log(error);
  }
});
