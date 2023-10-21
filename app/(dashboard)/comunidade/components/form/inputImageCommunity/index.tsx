"use client";

import "cropperjs/dist/cropper.css";
import { useEffect, useRef, useState } from "react";
import { Cropper, ReactCropperElement } from "react-cropper";
import { useCommunityStore } from "../../../store";

export const InputImageCommunity = () => {
  const [croppedImage, setCroppedImage] = useState<File | null>(null);
  const cropperRef = useRef<ReactCropperElement | null>(null);
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const { setNewImageUploadPost } = useCommunityStore();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        setCroppedImage(null);
        if (cropperRef.current) setImage(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (croppedImage) setNewImageUploadPost(croppedImage);
  }, [croppedImage, setNewImageUploadPost]);

  const handleCrop = () => {
    if (cropperRef.current) {
      const cropper = cropperRef.current.cropper;
      const croppedCanvas = cropper.getCroppedCanvas();

      if (croppedCanvas) {
        croppedCanvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], "cropped-image.png", {
              type: "image/png",
              lastModified: Date.now(),
            });
            setCroppedImage(file);
          }
        }, "image/png");
      }
    }
  };

  return (
    <div>
      <input
        type="file"
        id="photo"
        className="sr-only invisible h-0 w-0"
        accept="image/*"
        onChange={handleImageChange}
      />
      <div className={!image ? "hidden" : "flex"}>
        <Cropper
          src={image?.toString()}
          ref={cropperRef}
          style={{ height: 300, width: "100%" }}
          aspectRatio={16 / 9}
          crop={handleCrop}
        />
      </div>
    </div>
  );
};
