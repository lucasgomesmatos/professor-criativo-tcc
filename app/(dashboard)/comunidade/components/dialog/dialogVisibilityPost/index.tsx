import { Button } from "@/components/base/button";
import { DialogBase } from "@/components/base/dialogBase";
import { useSendUpdateVisibilityPostRequest } from "@/services/community/operations";
import { useCommunityStore } from "../../../store";

export const PostDialogVisibility = () => {
  const { openDialogPostVisibility, setOpenDialogPostVisibility } =
    useCommunityStore();

  const { mutate, isLoading } = useSendUpdateVisibilityPostRequest();

  return (
    <DialogBase
      setOpenDialogBase={() => setOpenDialogPostVisibility(false, null)}
      title={"Aprovar este post"}
      isOpen={openDialogPostVisibility}
    >
      <div className="mt-4 flex flex-col gap-5">
        <div className="max-h-fit space-y-6">
          <p>Tem certeza de que deseja aprovar este post ?</p>
          <div className="ml-auto mr-20 flex w-28 gap-4">
            <Button
              className="flex h-12 w-24 items-center justify-center"
              disabled={isLoading}
              loading={isLoading}
              onClick={() => mutate()}
            >
              Aprovar
            </Button>
            <Button
              disabled={isLoading}
              onClick={() => setOpenDialogPostVisibility(false, null)}
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
