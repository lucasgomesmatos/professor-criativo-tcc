import { Attachments } from "@/types/response/community";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";

interface SliderCommunityProps {
  attachments: Attachments[];
}

export const SliderCommunity = ({ attachments }: SliderCommunityProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="group relative m-auto  aspect-video w-full  max-w-5xl px-4 py-4 transition-all ">
      {attachments.map((attachment, index) => {
        if (attachment.type === "image" && currentIndex === index)
          return (
            <div
              style={{
                backgroundImage: `url(${attachments[currentIndex].path}) `,
              }}
              className="block w-full rounded bg-cover bg-center  duration-75"
            />
          );
        if (attachment.type === "video" && currentIndex === index)
          return (
            <video
              controls
              className=" rounded bg-cover bg-center  duration-75"
            >
              <source
                src={attachments[currentIndex].path}
                type={`video/${attachments[currentIndex].path
                  .split(".")
                  .pop()
                  ?.toLowerCase()}`}
              />
              Your browser does not support the video tag.
            </video>
          );
      })}

      <div className="absolute left-5 top-[50%] hidden h-10 w-10  -translate-x-0 translate-y-[50%] cursor-pointer items-center justify-center rounded-full bg-black/50 text-2xl transition-all group-hover:flex">
        <ChevronLeftIcon className="h-8 w-8 text-zinc-50" />
      </div>
      <div className="absolute right-5 top-[50%] hidden  h-10 w-10 -translate-x-0 translate-y-[50%] cursor-pointer items-center justify-center rounded-full bg-black/50 text-2xl transition-all group-hover:flex">
        <ChevronRightIcon className="h-8 w-8 text-zinc-50" />
      </div>
    </div>
  );
};
