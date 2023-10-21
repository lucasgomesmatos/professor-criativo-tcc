"use client";

import { Attachments } from "@/types/response/community";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarouselBaseProps {
  attachments: Attachments[];
}

export const CarouselBase = ({ attachments }: CarouselBaseProps) => {
  return (
    <>
      <Carousel
        autoPlay
        dynamicHeight
        showThumbs={false}
        showStatus={false}
        showIndicators={attachments.length > 1 && true}
      >
        {attachments &&
          attachments.map((attachment) => {
            return (
              <div key={attachment.path}>
                {attachment.type === "image" ? (
                  <div>
                    <Image
                      width={1920}
                      height={720}
                      className="block aspect-video w-full  rounded bg-cover object-cover"
                      alt=""
                      src={attachment.path}
                    />
                  </div>
                ) : (
                  <div>
                    <video
                      controls
                      className="block aspect-video w-full cursor-pointer  rounded bg-cover "
                    >
                      <source
                        src={attachment.path}
                        type={`video/${attachment.path
                          ?.split(".")
                          .pop()
                          ?.toLowerCase()}`}
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            );
          })}
      </Carousel>
    </>
  );
};
