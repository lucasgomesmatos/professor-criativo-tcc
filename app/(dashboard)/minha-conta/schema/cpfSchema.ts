import * as zod from "zod";

export const requestCPFValidationFormSchema = zod.object({
  cpf: zod
    .string()
    .nonempty("O CPF é obrigatório")
    .min(14, "O CPF precisar ter pelo menos 11 números"),
  reason: zod.string().nonempty("Motivo é obrigatório"),
});

export type FormCPFData = zod.infer<typeof requestCPFValidationFormSchema>;
