import BadRequestError from "../errors/BadRequestError";
import { EquipmentType, EquipmentTypeType } from "../shared/types";

export const queryModels = (equipmentType: EquipmentTypeType): string[] => {
  // Mock returning data from a DB... in reality, implement your own DB integration here.
  switch (equipmentType) {
    case EquipmentType["Electro-Magnetic"]:
      return [
        "HS/HD/HDC/C/A",
        "B",
        "VMC"
      ];
    case EquipmentType.Mechanical:
      return [
        "HMC",
        "HVC",
        "HVF",
        "HVS",
        "TM",
        "TMS",
        "TMR",
        "TMRS",
        "Ultra Force",
        "Brute Force",
        "SM"
      ];
    default:
      throw new BadRequestError({
        message: `Invalid equipment type specified. Please ensure that the equipment type path parameter is exactly one of: [ ${Object.values(EquipmentType).toString().replace(',', ', ')} ]`
      });
  }
};
