import * as zod from "zod";

export const requestContentValidationFormSchema = zod.object({
  content: zod
    .string()
    .nonempty("A sua experiência é obrigatória")
    .min(30, "A sua experiência precisar ter pelo menos 30 caracteres")
    .max(8000, "O máximo de caracteres para a sua experiência é de 8.000"),
});

export type FormContentData = zod.infer<
  typeof requestContentValidationFormSchema
>;
