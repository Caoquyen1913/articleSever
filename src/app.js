import express from 'express';
import mongooseConfig from './config/mongoose.config';
import dotenv from 'dotenv';
import cors from 'cors';
import './cronJobs';
import responseHandle from './utils/responseHandle';
import bodyParser from 'body-parser';
import apiRouter from './api/router';
import { HttpStatusCode } from './const/httpCode';
import {limiter} from "./config/rateLimit.config"
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(limiter)
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({
    message: 'wellcome',
  });
});

app.use('/api/v1', apiRouter);

app.all('*', (req, res) => {
  return responseHandle.send(res, HttpStatusCode.NOT_FOUND, {
    errors: [
      {
        error: 'the router can not be found',
      },
    ],
  });
});

app.listen(PORT, async () => {
  await mongooseConfig.mongoConnect();
  console.log('run port 5000');
});
