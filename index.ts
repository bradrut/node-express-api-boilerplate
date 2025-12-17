require('dotenv').config();

import express from 'express';
import router from './src/routes';
import { errorHandler } from './src/middleware/errors';
import "express-async-errors";  // apply async error patch so that we don't have to worry about using the next() function when throwing errors

const app = express();

app.use(express.json());
app.use('/api', router);
app.use(errorHandler);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
})
