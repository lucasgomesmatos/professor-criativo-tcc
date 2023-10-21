import * as zod from "zod";

export const requestPasswordValidationFormSchema = zod
  .object({
    password: zod
      .string()
      .nonempty("A senha é obrigatória")
      .min(8, "A senha precisa ter no mínimo 8 caracteres."),
    password_confirmation: zod
      .string()
      .nonempty("A confirmação da senha é obrigatória")
      .min(8, "A senha precisa ter no mínimo 8 caracteres."),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "As senhas não se correspondem.",
    path: ["password_confirmation"],
  });

export type FormPasswordData = zod.infer<
  typeof requestPasswordValidationFormSchema
>;
