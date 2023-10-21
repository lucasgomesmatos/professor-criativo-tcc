import * as zod from "zod";

export const requestPhoneValidationFormSchema = zod.object({
  phone: zod
    .string()
    .nonempty("O Telefone é obrigatório")
    .min(15, "O Telefone precisar ter pelo menos 11 números"),
});

export type FormPhoneData = zod.infer<typeof requestPhoneValidationFormSchema>;
