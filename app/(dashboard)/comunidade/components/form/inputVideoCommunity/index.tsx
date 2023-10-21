"use cliente";
import { ChangeEvent, ComponentProps } from "react";
import { useCommunityStore } from "../../../store";

type InputCommunityProps = ComponentProps<"input">;

export const InputCommunity = ({ ...rest }: InputCommunityProps) => {
  const { setVideoUploadPost } = useCommunityStore();

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;
    const file = event.target.files?.[0];

    setVideoUploadPost(file);
  };

  return (
    <input
      {...rest}
      accept="video/*"
      type="file"
      className="sr-only"
      id="video"
      onChange={handleImageChange}
    />
  );
};
