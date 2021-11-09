import fs from 'fs';

const loadArticleData = () => {
  const data = fs.readFileSync(__dirname + '/../../../temp/articleData.json');
  const articles = JSON.parse(data);
  return articles;
};

export default {
  loadArticleData
}
