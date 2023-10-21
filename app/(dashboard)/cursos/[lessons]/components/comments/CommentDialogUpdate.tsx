import { Button } from "@/components/base/button";
import { DialogBase } from "@/components/base/dialogBase";
import { TextareaBase } from "@/components/base/forms/textareaBase";
import { useSendUpdateCommentRequest } from "@/services/courses/operations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  FormCommentCreateData,
  requestCommentCreateValidationFormSchema,
} from "../../schema/commentCreateSchema";
import { useCommentStore } from "../../store/comment";
export const CommentDialogUpdate = () => {
  const { openDialogCommentUpdate, setOpenDialogCommentUpdate, commentUpdate } =
    useCommentStore();

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
    setValue,
    formState: { errors },
  } = userRequestForm;

  const { mutate, isLoading } = useSendUpdateCommentRequest(() =>
    setOpenDialogCommentUpdate(false, null, null)
  );

  useEffect(() => {
    if (commentUpdate?.comment) {
      setValue("comment", commentUpdate.comment);
    }

    return () => {
      clearErrors();
      reset();
    };
  }, [openDialogCommentUpdate, clearErrors, reset, setValue, commentUpdate]);

  const handleUpdateEmailRequest = (data: FormCommentCreateData) => {
    commentUpdate?.commentId &&
      mutate({
        commentId: commentUpdate.commentId,
        comment: data.comment,
      });
  };

  return (
    <DialogBase
      setOpenDialogBase={() => setOpenDialogCommentUpdate(false, null, null)}
      title={"Editar seu comentário"}
      isOpen={openDialogCommentUpdate}
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
            placeholder="Digite seu comentário sobre a aula..."
          />

          <div className="ml-auto mr-20 flex w-28 gap-6">
            <Button
              className="flex h-12 w-24 items-center justify-center"
              disabled={isLoading}
              loading={isLoading}
            >
              Atualizar
            </Button>
            <Button
              disabled={isLoading}
              onClick={() => setOpenDialogCommentUpdate(false, null, null)}
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
