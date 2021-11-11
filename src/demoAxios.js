import axios from './config/axios.config';
import "axios-debug-log/enable"
const instance = axios.create({
  baseURL: 'http://dev.to/api/articles',
  timeout: 5000,
});
const getArticle = async () => {
    const data = await axios.get("/articles",
    {
      params: {
        page: 1,
        per_page: 5,
        username: "ben",
        tags: "news, devops"
      }
    });
    return data
    // console.log(data);
};

export default {
  getArticle,
};
