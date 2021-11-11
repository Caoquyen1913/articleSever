import express from 'express';
import mongooseConfig from './config/mongoose.config';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import './cronJobs';
import responseHandle from './utils/responseHandle';
import bodyParser from 'body-parser';
import apiRouter from './api/router';
import docRouter from './docs/docApi.router';
import { HttpStatusCode } from './const/httpCode';
import { limiter } from './config/rateLimit.config';
import demo from './demoAxios';
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(limiter);
app.use(morgan('combined'));
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({
    message: 'wellcome',
  });
});

app.use('/api/v1', apiRouter);
app.use('/docs', docRouter);
app.use((err, req, res, next) => {
  return responseHandle.send(
    res,
    err.status || HttpStatusCode.INTERNAL_SERVER,
    {
      errors: [
        {
          error: err.message,
        },
      ],
    }
  );
});

app.all('*', async (req, res) => {
  try {
    const data = await demo.getArticle();
    // console.log(data)
  return responseHandle.send(res,HttpStatusCode.OK,{
    message: "ok",
    data: data.data
  })
  
  } catch (error) {
    return responseHandle.send(res, HttpStatusCode.NOT_FOUND, {
      errors: [
        {
          // error: 'the router can not be found',
          error: error.message
        },
      ],
    });
  }
  
});

app.listen(PORT, async () => {
  // await mongooseConfig.mongoConnect();
  console.log('run port 5000');
});
