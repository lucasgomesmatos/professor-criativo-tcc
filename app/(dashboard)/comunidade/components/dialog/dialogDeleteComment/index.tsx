import { Button } from "@/components/base/button";
import { DialogBase } from "@/components/base/dialogBase";
import { useSendDeleteCommentPostRequest } from "@/services/community/comments";
import { useCommunityPostCommentsStore } from "../../../store/comments";

export const CommentDialogDelete = () => {
  const { openDialogCommentDelete, setOpenDialogCommentDelete } =
    useCommunityPostCommentsStore();

  const { mutate, isLoading } = useSendDeleteCommentPostRequest();

  return (
    <DialogBase
      setOpenDialogBase={() => setOpenDialogCommentDelete(false, null)}
      title={"Excluir seu comentário"}
      isOpen={openDialogCommentDelete}
    >
      <div className="mt-4 flex flex-col gap-5">
        <div className="max-h-fit space-y-6">
          <p>Tem certeza de que deseja excluir este comentário ?</p>
          <div className="ml-auto mr-20 flex w-28 gap-6">
            <Button
              className="flex h-12 w-24 items-center justify-center"
              disabled={isLoading}
              loading={isLoading}
              onClick={() => mutate()}
            >
              Excluir
            </Button>
            <Button
              disabled={isLoading}
              onClick={() => setOpenDialogCommentDelete(false, null)}
              className="flex h-12 w-24 items-center justify-center bg-red-600 hover:bg-red-500"
            >
              Fechar
            </Button>
          </div>
        </div>
      </div>
    </DialogBase>
  );
};
