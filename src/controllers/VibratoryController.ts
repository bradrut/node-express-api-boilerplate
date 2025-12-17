import { NextFunction, Request, Response } from 'express';
import * as vibratoryService from '../services/VibratoryService';
import { EquipmentTypeType, GetModelsRequest, GetModelsResponse } from '../shared/types';

export const getModels = (req: Request<{ equipmentType: EquipmentTypeType }>, res: Response<GetModelsResponse>, next: NextFunction) => {
  try {
    res.send({
      models: vibratoryService.getModels(req.params.equipmentType)
    });
  } catch (e: any) {
    next(e);
  }
};
