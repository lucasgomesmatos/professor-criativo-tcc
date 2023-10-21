import { Button } from "@/components/base/button";
import { DialogBase } from "@/components/base/dialogBase";
import { TextareaBase } from "@/components/base/forms/textareaBase";
import { useSendResponseCommentRequest } from "@/services/courses/operations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  FormCommentCreateData,
  requestCommentCreateValidationFormSchema,
} from "../../schema/commentCreateSchema";
import { useCommentStore } from "../../store/comment";
export const CommentDialogResponse = () => {
  const {
    commentResponseId,
    openDialogCommentResponse,
    setOpenDialogCommentResponse,
  } = useCommentStore();

  const userRequestForm = useForm<FormCommentCreateData>({
    mode: "onSubmit",
    resolver: zodResolver(requestCommentCreateValidationFormSchema),
  });

  const {
    handleSubmit,
    register,
    clearErrors,
    watch,
    reset,
    formState: { errors },
  } = userRequestForm;

  const { mutate, isLoading } = useSendResponseCommentRequest(() =>
    setOpenDialogCommentResponse(null)
  );

  useEffect(
    () => () => {
      clearErrors();
      reset();
    },
    [openDialogCommentResponse, clearErrors, reset]
  );

  const handleUpdateEmailRequest = (data: FormCommentCreateData) => {
    if (commentResponseId)
      mutate({ commentResponseId: commentResponseId, comment: data.comment });
  };

  return (
    <DialogBase
      setOpenDialogBase={() => setOpenDialogCommentResponse(null)}
      title={"Responder Comentário"}
      isOpen={openDialogCommentResponse}
    >
      <div className="mt-4 flex flex-col gap-5">
        <form
          className="max-h-fit space-y-6"
          onSubmit={handleSubmit(handleUpdateEmailRequest)}
        >
          <TextareaBase
            maxLength={300}
            {...register("comment")}
            error={errors.comment?.message}
            className="h-28"
            placeholder="Digite sua resposta sobre o comentário..."
          />

          <div className="ml-auto mr-20 flex w-28 gap-6">
            <Button
              className="flex h-12 w-24 items-center justify-center"
              disabled={isLoading}
              loading={isLoading}
            >
              Salvar
            </Button>
            <Button
              disabled={isLoading}
              onClick={() => setOpenDialogCommentResponse(null)}
              className="flex h-12 w-24 items-center justify-center bg-red-600 hover:bg-red-500"
            >
              Fechar
            </Button>
          </div>
        </form>
      </div>
    </DialogBase>
  );
};
