import * as zod from "zod";

export const readOnlyDataUserAccessFormSchema = zod.object({
  email: zod.string(),
  password: zod.string().optional(),
});

export type readOnlyDataUserAccessForm = zod.infer<
  typeof readOnlyDataUserAccessFormSchema
>;
