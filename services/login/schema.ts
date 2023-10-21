import * as zod from "zod";

export const requestUserFormValidationSchema = zod.object({
  email: zod
    .string()
    .nonempty("O E-mail é obrigatório")
    .email("Formato de e-mail inválido"),
  password: zod
    .string()
    .nonempty("A Senha é obrigatória")
    .min(8, "A sua senha precisa ter no mínimo 8 caracteres"),
});

export type UserRequestData = zod.infer<typeof requestUserFormValidationSchema>;
