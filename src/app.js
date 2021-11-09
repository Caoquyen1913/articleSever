import express from 'express';
import mongooseConfig from './config/mongoose.config';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import apiRouter from './api/router';
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({
    message: 'wellcome',
  });
});

app.use('/api/v1', apiRouter);

app.all('*', (req, res, next) => {
  const err = new Error('the router can not be found');
  err.statusCode = 404;
  return next(err);
});

app.listen(PORT, async () => {
  await mongooseConfig.mongoConnect();
  console.log('run port 5000');
});
