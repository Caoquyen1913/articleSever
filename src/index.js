import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
// import favicon from 'serve-favicon';
import mongooseConfig from './config/mongoose.config';
import './cronJobs';
import responseHandle from './utils/responseHandle';
import apiRouter from './api/router';
import docRouter from './docs/docApi.router';
import { HttpStatusCode } from './const/httpCode';
import { limiter } from './config/rateLimit.config';



dotenv.config();
// let compiler = webpack(configuration);
// new webpack.ProgressPlugin().apply(compiler);
// compiler.run(function (err, stats) {
// const compiler = webpack(configuration);
// const app = new WebpackDevServer(compiler, {
//   stats: {
//     colors: true,
//   },
// });
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(limiter);
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "..", "public")));
// app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
// app.use(express.static(path.join(__dirname, "..", "public", 'favicon.ico')));
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, "..", "public", "index.html"))
});

app.use('/api/v1', apiRouter);
app.use('/docs', docRouter);

// app.all('*', async(req, res) => {
//     // try {
//     //   return responseHandle.send(res, HttpStatusCode.OK, {
//     //     message: 'ok',
//     //     data: data.data,
//     //   });
//     // } catch (error) {
//     return responseHandle.send(res, HttpStatusCode.NOT_FOUND, {
//         errors: [{
//             error: 'the router can not be found',
//             // error: error.message,
//         }, ],
//     });
//     // }
// });
const host = "0.0.0.0"
app.listen(PORT, host, async() => {
    await mongooseConfig.mongoConnect();
    console.log('run port:', PORT);
});
// });