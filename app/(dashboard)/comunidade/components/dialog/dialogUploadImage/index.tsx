import { Button } from "@/components/base/button";
import { DialogBase } from "@/components/base/dialogBase";
import { ImagePlus } from "lucide-react";
import { useCommunityStore } from "../../../store";
import { InputImageCommunity } from "../../form/inputImageCommunity";

export const DialogUploadImage = () => {
  const {
    setOpenDialogUploadImageCommunity,
    openDialogUploadImageCommunity,

    newImagePostCommunity,
    setImageUploadPost,
    setNewImageUploadPost,
  } = useCommunityStore();

  return (
    <div>
      <DialogBase
        setOpenDialogBase={setOpenDialogUploadImageCommunity}
        title={"Selecione uma Imagem"}
        isOpen={openDialogUploadImageCommunity}
      >
        <div className="m-4 flex flex-col items-center gap-4">
          <div className="relative flex  h-80 w-full items-center justify-center ">
            <ImagePlus className="h-24 w-24" />
            <div className=" absolute  z-20 flex aspect-video w-full items-center justify-center">
              <InputImageCommunity />
            </div>
          </div>

          <div className="flex w-full justify-center gap-4">
            <label
              className="flex h-10 w-40 cursor-pointer items-center justify-center rounded border border-solid
             border-purple-300
             bg-purple-500 bg-transparent p-4 text-xs font-bold  
              tracking-wide text-gray-50 transition-colors hover:bg-purple-400"
              htmlFor="photo"
            >
              Anexar Imagem
            </label>
            <Button
              onClick={() => {
                setOpenDialogUploadImageCommunity();

                if (newImagePostCommunity) {
                  setImageUploadPost(newImagePostCommunity);
                  setNewImageUploadPost(null);
                }
              }}
              disabled={!newImagePostCommunity}
              className="flex h-10 w-40 items-center justify-center text-xs tracking-wide"
            >
              Recortar Imagem
            </Button>
          </div>
        </div>
      </DialogBase>
    </div>
  );
};
