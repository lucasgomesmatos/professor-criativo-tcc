import * as zod from "zod";

export const requestNameValidationFormSchema = zod.object({
  name: zod.string().nonempty("O Nome é obrigatório"),
});

export type FormNameData = zod.infer<typeof requestNameValidationFormSchema>;
