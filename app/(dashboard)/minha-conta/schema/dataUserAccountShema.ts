import * as zod from "zod";

export const readOnlyDataUserAccountFormSchema = zod.object({
  name: zod.string(),
  cpf: zod.string().optional(),
  phone: zod.string().optional(),
});

export type readOnlyDataUserAccountForm = zod.infer<
  typeof readOnlyDataUserAccountFormSchema
>;
