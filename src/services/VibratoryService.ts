import { EquipmentTypeType } from "../shared/types";
import * as mockDbService from '../models/DBService';

export const getModels = (equipmentType: EquipmentTypeType): string[] => {
  // Your business logic here...

  return mockDbService.queryModels(equipmentType);
}
