/**
 * GET /api/vibratory/models
 */

export enum EquipmentType {
  'Electro-Magnetic' = 'Electro-Magnetic',
  'Mechanical' = 'Mechanical',
}
export type EquipmentTypeType = keyof typeof EquipmentType;

export type GetModelsRequest = {
  equipmentType: EquipmentTypeType
}

export type GetModelsResponse = {
  models: string[]
};
