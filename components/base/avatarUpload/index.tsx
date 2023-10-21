"use client";

import { useAccountUserStore } from "@/app/(dashboard)/minha-conta/store";
import "cropperjs/dist/cropper.css";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";

export const AvatarUpload = () => {
  const { setNewProfileImageUser } = useAccountUserStore();

  const cropperRef = useRef<ReactCropperElement>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const onCrop = () => {
    if (cropperRef.current) {
      const cropper = cropperRef.current.cropper;
      const croppedCanvas = cropper.getCroppedCanvas({
        width: 160,
        height: 160,
      });

      setCroppedImage(croppedCanvas.toDataURL());
    }
  };

  const handleFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setImage(URL.createObjectURL(file));
  };

  useEffect(() => {
    if (croppedImage) setNewProfileImageUser(croppedImage);
  }, [croppedImage, setNewProfileImageUser]);

  return (
    <>
      <input
        onChange={handleFileSelected}
        name="coverUrl"
        type="file"
        id="media"
        accept="image/*"
        className="invisible h-0 w-0"
      />
      <div className={!image ? "hidden" : "flex"}>
        <Cropper
          src={image?.toString()}
          className="mb-9 h-40 w-full"
          guides={false}
          crop={onCrop}
          ref={cropperRef}
        />
      </div>
    </>
  );
};
