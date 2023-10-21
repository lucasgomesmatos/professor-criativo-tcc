"use client";

import { Button } from "@/components/base/button";
import { TextareaBase } from "@/components/base/forms/textareaBase";
import { useSendUpdatePostRequest } from "@/services/community/operations";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, Save } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  FormContentData,
  requestContentValidationFormSchema,
} from "../../schema/contentSchema";
import { useCommunityStore } from "../../store";
import { DialogUploadImage } from "../dialog/dialogUploadImage";
import { FilePreview } from "../filePreview";

import { Attachments } from "@/types/response/community";
import { DialogPostLoading } from "../dialog/dialogPostLoading";
import { FilePreviewUpdate } from "../filePreview/filePreviewUpdate";
import { InputCommunity } from "../form/inputVideoCommunity";
import { LabelCommunity } from "../form/labelCommunity";

export const CommunityUpdatePostView = () => {
  const {
    postUpdate,
    imagePostCommunity,
    videoPostCommunity,
    imageUpdatePost,
    videoUpdatePost,
  } = useCommunityStore();

  const userRequestForm = useForm<FormContentData>({
    resolver: zodResolver(requestContentValidationFormSchema),
  });

  const {
    handleSubmit,
    register,
    clearErrors,
    watch,
    setValue,
    formState: { errors },
  } = userRequestForm;

  const content = watch("content");

  const { mutate, isLoading } = useSendUpdatePostRequest();

  useEffect(() => {
    if (postUpdate) setValue("content", postUpdate?.content);
    clearErrors();
  }, [clearErrors, setValue, postUpdate]);

  const handleCreatePostRequest = (data: FormContentData) => {
    const formData = new FormData();
    formData.append("_method", "PATCH");
    formData.append("content", data.content);

    appendAttachment(formData, "images", imagePostCommunity, imageUpdatePost);
    appendAttachment(formData, "videos", videoPostCommunity, videoUpdatePost);

    mutate(formData);
  };

  const appendAttachment = (
    formData: FormData,
    type: string,
    newFile: File | null,
    oldFile: Attachments | null
  ) => {
    if (!newFile && oldFile) {
      formData.append(`attachments[${type}][]`, oldFile.path);
    }

    if (newFile) {
      formData.append(`attachments[${type}][]`, newFile);
    }

    if (!newFile && !oldFile) {
      formData.append(`attachments[${type}]`, [] as any);
    }
  };

  return (
    <div className="flex  w-full flex-col gap-10 ">
      <Link
        href="/comunidade"
        className="group flex cursor-pointer items-center gap-2  text-sm text-gray-200 transition-colors hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />{" "}
        <span className="max-[360px]:hidden">Voltar para a comunidade</span>
      </Link>

      <form
        className="flex h-full flex-col gap-4 "
        onSubmit={handleSubmit(handleCreatePostRequest)}
      >
        <div className="flex flex-col gap-4 ">
          <LabelCommunity htmlFor="media" />
          <div className="flex gap-4">
            {!imagePostCommunity && imageUpdatePost && (
              <FilePreviewUpdate type="image" file={imageUpdatePost} />
            )}
            {!videoPostCommunity && videoUpdatePost && (
              <FilePreviewUpdate type="video" file={videoUpdatePost} />
            )}
            {imagePostCommunity && (
              <FilePreview type="image" file={imagePostCommunity} />
            )}
            {videoPostCommunity && (
              <FilePreview type="video" file={videoPostCommunity} />
            )}
          </div>
          <InputCommunity id="media" />

          <TextareaBase
            spellCheck={false}
            placeholder="Fique a vontade para adicionar relatos sobre essa experiência que você quer compartilhar conosco."
            className="min-h-[200px] w-full flex-1 resize-none rounded border-0 bg-gray-800 p-3 text-base leading-relaxed text-gray-50 placeholder:text-gray-300 focus:ring-purple-400"
            {...register("content")}
            error={errors.content?.message}
          />
        </div>
        <div className="flex justify-end">
          <Button
            disabled={isLoading || !Boolean(content?.length > 3)}
            loading={isLoading}
            className="flex h-12 w-full  items-center justify-center gap-2 text-sm md:w-40"
          >
            <Save className="h-4 w-4" />{" "}
            <span className="max-[360px]:hidden">Salvar</span>
          </Button>
        </div>
      </form>
      <DialogUploadImage />
      <DialogPostLoading loading={isLoading} />
    </div>
  );
};
