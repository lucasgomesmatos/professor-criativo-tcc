import * as zod from "zod";

export const requestCommentCreateValidationFormSchema = zod.object({
  comment: zod
    .string()
    .nonempty("O comentário é obrigatório")
    .min(3, "O comentário precisar ter pelo menos 3 caracteres"),
});

export type FormCommentCreateData = zod.infer<
  typeof requestCommentCreateValidationFormSchema
>;
