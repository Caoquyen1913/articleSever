import fs from 'fs';
import path from "path";

const loadArticleData = () => {
  const data = fs.readFileSync(path.resolve(__dirname, '../../../temp/articleData.json'));
  const articles = JSON.parse(data);
  return articles;
};

export default {
  loadArticleData,
};
