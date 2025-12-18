import * as z from "zod"; 
 
export const ZGetModelsRequest = z.object({ 
  equipmentType: z.string(),
});
