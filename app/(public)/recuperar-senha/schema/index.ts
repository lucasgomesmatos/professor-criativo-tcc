import * as zod from "zod";

export const requestEmailResetValidationFormSchema = zod.object({
  email: zod
    .string()
    .nonempty("O E-mail é obrigatório")
    .email("Formato inválido para e-mail"),
});

export type FormEmailResetPasswordData = zod.infer<
  typeof requestEmailResetValidationFormSchema
>;
