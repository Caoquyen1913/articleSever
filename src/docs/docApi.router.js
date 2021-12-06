import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';
import swaggerDocument from './docApi.json';

const router = express.Router();

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API',
      description: '',
      contact: {
        name: 'dev',
      },
    },
    severs: ['http://localhost:5000/api/v1'],
  },
  apis: ['../app.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerDocs));
export default router;
