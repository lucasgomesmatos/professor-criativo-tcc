import {
  FormUpdateCommentPostData,
  requestUpdateCommentValidationFormSchema,
} from "@/app/(dashboard)/comunidade/schema/commentShema";
import { useCommunityPostCommentsStore } from "@/app/(dashboard)/comunidade/store/comments";
import { TextareaBase } from "@/components/base/forms/textareaBase";
import { cn } from "@/lib/utils";
import { useSendUpdateCommentPostRequest } from "@/services/community/comments";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Send } from "lucide-react";

import { HTMLAttributes, useCallback, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

interface UpdateCommentFormProps extends HTMLAttributes<HTMLDivElement> {
  idComment: number;
}

export const UpdateCommentForm = ({
  idComment,
  ...rest
}: UpdateCommentFormProps) => {
  const { openCommentUpdate, commentUpdate, setUpdateComment } =
    useCommunityPostCommentsStore();

  const userRequestForm = useForm<FormUpdateCommentPostData>({
    resolver: zodResolver(requestUpdateCommentValidationFormSchema),
  });

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = userRequestForm;
  const { mutate, isLoading } = useSendUpdateCommentPostRequest(() => reset());

  const handleCreatePostRequest = (data: FormUpdateCommentPostData) => {
    mutate(data.comment);
  };

  useEffect(() => {
    if (openCommentUpdate && commentUpdate) {
      setValue("comment", commentUpdate?.comment);
    }
  }, [setValue, openCommentUpdate, commentUpdate]);

  const formRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(e.target as Node)) {
        setUpdateComment(false, null);
      }
    },
    [setUpdateComment]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className={cn("mt-4", rest.className)} {...rest}>
      <Collapsible.Root
        className="group transition-all"
        open={openCommentUpdate && idComment === commentUpdate?.id}
      >
        <Collapsible.Content className="mt-2 flex flex-col gap-4 ">
          <div ref={formRef}>
            <form
              className="relative h-full w-full"
              onSubmit={handleSubmit(handleCreatePostRequest)}
            >
              <TextareaBase
                disabled={isLoading}
                spellCheck={false}
                placeholder="Comente..."
                className="min-h-[70px] w-full flex-1 resize-none rounded border-0 bg-gray-700 p-3 pr-9 text-base leading-relaxed text-gray-50 placeholder:text-gray-300 focus:ring-purple-400"
                {...register("comment")}
                error={errors.comment?.message}
              />
              <button
                data-error={Boolean(errors.comment?.message?.length)}
                className="group absolute bottom-7 right-5 disabled:cursor-not-allowed data-[error=true]:bottom-[50px]"
                disabled={isLoading || Boolean(errors.comment?.message?.length)}
              >
                <Send
                  data-error={Boolean(errors.comment?.message?.length)}
                  className="h-5 w-5 rotate-45 text-purple-300 disabled:text-gray-300 data-[error=true]:text-red-500"
                />
              </button>
            </form>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  );
};
