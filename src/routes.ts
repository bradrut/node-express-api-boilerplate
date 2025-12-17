import express from 'express';
import * as vibratoryController from './controllers/VibratoryController'
import { errorHandler } from './middleware/errors';

const router = express.Router();
router.use(errorHandler);

router.get('/vibratory/models/:equipmentType', vibratoryController.getModels);

export default router;
