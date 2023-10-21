import {
  FormCommentPostData,
  requestCommentValidationFormSchema,
} from "@/app/(dashboard)/comunidade/schema/commentShema";
import { useCommunityPostCommentsStore } from "@/app/(dashboard)/comunidade/store/comments";
import { TextareaBase } from "@/components/base/forms/textareaBase";
import { cn } from "@/lib/utils";
import { useSendCreateResponseCommentPostRequest } from "@/services/community/comments";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Send } from "lucide-react";

import { HTMLAttributes } from "react";
import { useForm } from "react-hook-form";

interface ResponseCommentFormProps extends HTMLAttributes<HTMLDivElement> {
  idComment: number;
}

export const ResponseCommentForm = ({
  idComment,
  ...rest
}: ResponseCommentFormProps) => {
  const { commentId, openResponseFormComment } =
    useCommunityPostCommentsStore();

  const userRequestForm = useForm<FormCommentPostData>({
    resolver: zodResolver(requestCommentValidationFormSchema),
  });

  const {
    handleSubmit,
    register,
    clearErrors,
    reset,
    formState: { errors },
  } = userRequestForm;
  const { mutate, isLoading } = useSendCreateResponseCommentPostRequest(() =>
    reset()
  );

  const handleCreatePostRequest = (data: FormCommentPostData) => {
    mutate(data.comment);
  };

  return (
    <footer className={cn("mt-4", rest.className)} {...rest}>
      <Collapsible.Root
        className="group transition-all"
        open={openResponseFormComment && idComment === commentId}
      >
        <Collapsible.Content className="mt-2 flex flex-col gap-4 ">
          <form
            className="relative h-full w-full"
            onSubmit={handleSubmit(handleCreatePostRequest)}
          >
            <TextareaBase
              disabled={isLoading}
              spellCheck={false}
              placeholder="Responder..."
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
        </Collapsible.Content>
      </Collapsible.Root>
    </footer>
  );
};
