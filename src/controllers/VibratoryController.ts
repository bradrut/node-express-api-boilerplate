import { NextFunction, Request, Response } from 'express';
import * as vibratoryService from '../services/VibratoryService';
import { EquipmentTypeType, GetModelsRequest, GetModelsResponse } from '../shared/types';
import { ZGetModelsRequest } from '../validation/validationSchemas';

export const getModels = (req: Request<GetModelsRequest>, res: Response<GetModelsResponse>, next: NextFunction) => {
  try {
    ZGetModelsRequest.parse(req.body);  // Validate request input

    res.send({
      models: vibratoryService.getModels(req.params.equipmentType)
    });
  } catch (e: any) {
    next(e);
  }
};
