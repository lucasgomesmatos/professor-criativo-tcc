import * as zod from "zod";

export const requestEmailValidationFormSchema = zod.object({
  email: zod
    .string()
    .nonempty("O E-mail é obrigatório")
    .email("Formato inválido para e-mail"),
  reason: zod.string().nonempty("Motivo é obrigatório"),
});

export type FormEmailData = zod.infer<typeof requestEmailValidationFormSchema>;
