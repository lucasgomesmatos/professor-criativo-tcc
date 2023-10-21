import { Button } from "@/components/base/button";
import { DialogBase } from "@/components/base/dialogBase";
import { useSendDeletePostRequest } from "@/services/community/operations";
import { useCommunityStore } from "../../../store";

export const PostDialogDelete = () => {
  const { openDialogPostDelete, setOpenDialogPostDelete, postDeleteId } =
    useCommunityStore();

  const { mutate, isLoading } = useSendDeletePostRequest();

  return (
    <DialogBase
      setOpenDialogBase={() => setOpenDialogPostDelete(false, null)}
      title={"Excluir seu post"}
      isOpen={openDialogPostDelete}
    >
      <div className="mt-4 flex flex-col gap-5">
        <div className="max-h-fit space-y-6">
          <p>Tem certeza de que deseja excluir este post ?</p>
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
              onClick={() => setOpenDialogPostDelete(false, null)}
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
