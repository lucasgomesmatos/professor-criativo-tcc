"use cliente";
import { Camera, Video } from "lucide-react";
import { ComponentProps } from "react";
import { useCommunityStore } from "../../../store";

type LabelCommunityProps = ComponentProps<"label">;

export const LabelCommunity = ({ ...rest }: LabelCommunityProps) => {
  const { setOpenDialogUploadImageCommunity } = useCommunityStore();

  return (
    <div className="flex items-center gap-6">
      <label
        onClick={setOpenDialogUploadImageCommunity}
        className="flex cursor-pointer items-center gap-2 text-sm text-gray-200 transition-colors hover:text-purple-300"
      >
        <Camera className="h-4 w-4" />
        Anexar Imagem
      </label>
      <label
        {...rest}
        htmlFor="video"
        className="flex cursor-pointer items-center gap-2 text-sm text-gray-200 transition-colors hover:text-purple-300"
      >
        <Video className="h-4 w-4" />
        Anexar Video
      </label>
    </div>
  );
};
