import * as zod from "zod";

export const requestCommentValidationFormSchema = zod.object({
  comment: zod
    .string()
    .nonempty("O comentário é obrigatório")
    .min(3, "O comentário precisa ter no mínimo 3 caracteres"),
});

export type FormCommentPostData = zod.infer<
  typeof requestCommentValidationFormSchema
>;

export const requestUpdateCommentValidationFormSchema = zod.object({
  comment: zod
    .string()
    .nonempty("O comentário é obrigatório")
    .min(3, "O comentário precisa ter no mínimo 3 caracteres"),
});

export type FormUpdateCommentPostData = zod.infer<
  typeof requestCommentValidationFormSchema
>;
