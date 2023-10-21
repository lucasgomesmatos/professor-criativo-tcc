import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useCommunityStore } from "../../store";

interface FilePreviewProps {
  type: "image" | "video";
  file: File;
}

export const FilePreview = ({ type, file }: FilePreviewProps) => {
  const { setDeleteImageUploadPost, setDeleteVideoUploadPost } =
    useCommunityStore();

  return (
    <div className="mt-4 flex  flex-wrap gap-3 overflow-hidden">
      <div className="group flex  items-center  rounded border border-purple-400 p-4">
        <div>
          {type === "image" ? (
            <Image
              className="aspect-video w-40  object-cover"
              src={URL.createObjectURL(file)}
              width={30}
              height={30}
              alt=""
            />
          ) : (
            <video controls className="aspect-video w-40 object-cover">
              <source
                src={URL.createObjectURL(file)}
                type={`video/${file.name.split(".").pop()?.toLowerCase()}`}
              />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <button
          onClick={() =>
            type === "image"
              ? setDeleteImageUploadPost()
              : setDeleteVideoUploadPost()
          }
          type="button"
          className="group ml-auto rounded-md p-2 "
        >
          <Trash2 className="h-5 w-5 text-zinc-500 hover:text-red-500" />
        </button>
      </div>
    </div>
  );
};
