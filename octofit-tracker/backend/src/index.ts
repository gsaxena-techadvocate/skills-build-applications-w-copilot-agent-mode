import express from 'express';
import './config/database.js';
import { apiBaseUrl } from './config/api.js';
import apiRouter from './routes/api.js';

const app = express();
const port = 8000;

app.use(express.json());
app.use('/api', apiRouter);

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', baseUrl: apiBaseUrl });
});

app.listen(port, () => {
  console.log(`OctoFit API listening at ${apiBaseUrl}`);
});