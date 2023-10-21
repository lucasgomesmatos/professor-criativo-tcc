import { useAccountUserStore } from "@/app/(dashboard)/minha-conta/store";
import { TextareaBase } from "@/components/base/forms/textareaBase";
import { LoadingFetch } from "@/components/base/loadingFetch";
import { NoResult } from "@/components/base/noResult";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scrollArea";
import { useFetch } from "@/hooks/useFetch/useFetch";
import { getCommentsPost } from "@/services/community";
import { useSendCreateCommentPostRequest } from "@/services/community/comments";
import { CommentRequest } from "@/types/response/community";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  FormCommentPostData,
  requestCommentValidationFormSchema,
} from "../../../schema/commentShema";
import { useCommunityPostCommentsStore } from "../../../store/comments";
import { Comment } from "../../comments/comment";
import { UpdateCommentForm } from "../../comments/comment/description/UpdateFormComment";
import { ActionsComment } from "../../comments/comment/header/ActionsComment";
import { AvatarComment } from "../../comments/comment/header/AvatarComment";
import { NameUserComment } from "../../comments/comment/header/NameUserComment";
import { CarouselBase } from "../../corousel";
import { AvatarPost } from "../../post/header/AvatarPost";
import { CommentDialogDelete } from "../dialogDeleteComment";

export const DialogCommentPost = () => {
  const userRequestForm = useForm<FormCommentPostData>({
    resolver: zodResolver(requestCommentValidationFormSchema),
  });

  const {
    handleSubmit,
    register,
    clearErrors,
    reset,
    setValue,
    formState: { errors },
  } = userRequestForm;
  const { mutate, isLoading: isLoadingMutate } =
    useSendCreateCommentPostRequest(() => reset());

  const {
    openDialogCommentPost,
    setOpenDialogCommentPost,
    post,
    updateDate,
    setComments,
    comments,
    setOpenResponseFormComment,
    openCommentUpdate,
    setUpdateComment,
    commentUpdate,
  } = useCommunityPostCommentsStore();
  const { account } = useAccountUserStore();

  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, isLoading, error, isFetching } = useFetch<CommentRequest>(
    String(updateDate),
    () => getCommentsPost(post?.id, currentPage),
    null,
    currentPage + Number(post?.id),
    Boolean(post?.id)
  );

  useEffect(() => {
    if (error instanceof Error) {
      toast.error("Erro de conexão");
      return;
    }

    if (data?.data) setComments(data.data);
  }, [data, setComments, error]);

  const showNoResult = !isLoading && !comments?.length;

  useEffect(() => {
    clearErrors();
    window.scrollTo(0, 0);
  }, [clearErrors]);

  const handleCloseDialog = () => {
    setOpenDialogCommentPost(false, null);
    setComments(null);
    setUpdateComment(false, null);
    setOpenResponseFormComment(false, null);
    reset();
  };

  const handleCreatePostRequest = (data: FormCommentPostData) => {
    mutate(data.comment);
  };

  return (
    <Dialog open={openDialogCommentPost} onOpenChange={handleCloseDialog}>
      <DialogContent className="w-full max-w-4xl bg-gray-700">
        <DialogHeader>
          {post && (
            <div className="flex flex-wrap gap-4">
              <AvatarPost image={post.user.avatar_path} name={post.user.name} />
              <NameUserComment
                admin={post.user.admin}
                nameUser={post.user.name}
              />
            </div>
          )}

          <div>
            <ScrollArea className="h-[300px] w-full rounded-md  p-4 md:h-[500px] ">
              <div className="mt-2 w-full max-w-5xl">
                {post?.attachments && (
                  <CarouselBase attachments={post?.attachments} />
                )}
                <h1 className="mt-4 text-xs text-gray-100">
                  Comentários mais relevantes
                </h1>
                <div className="mb-10 mt-4 flex flex-col items-center gap-4 py-4 ">
                  {!isFetching && showNoResult && (
                    <NoResult text="Post sem comentários" />
                  )}
                  {isFetching && <LoadingFetch />}
                  {comments?.map((comment) => (
                    <div key={comment.id} className="w-full">
                      <Comment.Root>
                        <Comment.Header className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-4">
                            <AvatarComment
                              image={comment.user.avatar_path}
                              name={comment.user.name}
                            />
                            <NameUserComment
                              admin={comment.user.admin}
                              nameUser={comment.user.name}
                            />
                          </div>
                          <ActionsComment
                            admin={comment.user.admin}
                            comment={comment}
                            userId={comment.user.id}
                          />
                        </Comment.Header>
                        <Comment.Description>
                          {openCommentUpdate && (
                            <UpdateCommentForm idComment={comment.id} />
                          )}

                          {commentUpdate?.id !== comment.id && (
                            <p className="pt-6 text-sm">{comment.comment}</p>
                          )}

                          <button
                            disabled={openCommentUpdate}
                            onClick={() =>
                              setOpenResponseFormComment(true, comment.id)
                            }
                          >
                            <span className="mt-4 flex cursor-pointer  text-sm text-gray-300 transition-all hover:text-gray-200 group-data-[state=open]:text-gray-200">
                              Responder
                            </span>
                          </button>
                        </Comment.Description>
                        <Comment.FooterResponse idComment={comment.id} />
                        {Boolean(comment.responses.length !== 0) && (
                          <Comment.Footer responses={comment.responses} />
                        )}
                      </Comment.Root>
                    </div>
                  ))}
                  <div className="mb-8 flex items-center justify-center p-4">
                    {!isLoading && isFetching && <span> Carregando...</span>}
                  </div>
                  {data && data.meta.to < data.meta.total && (
                    <button
                      className="cursor-pointer"
                      onClick={() => setCurrentPage((oldPage) => oldPage + 1)}
                    >
                      Ver mais
                    </button>
                  )}
                </div>
              </div>
            </ScrollArea>

            <div className="flex h-24 w-full items-center justify-between gap-2">
              <div className="w-10">
                {account && (
                  <AvatarPost
                    image={account?.data.avatar_path}
                    name={account.data.name}
                  />
                )}
              </div>
              <form
                className="relative h-full w-full"
                onSubmit={handleSubmit(handleCreatePostRequest)}
              >
                <TextareaBase
                  disabled={isLoadingMutate}
                  spellCheck={false}
                  placeholder="Comente..."
                  className="min-h-[70px] w-full flex-1 resize-none rounded border-0 bg-gray-900 p-3 pr-9 text-base leading-relaxed text-gray-50 placeholder:text-gray-300 focus:ring-purple-400"
                  {...register("comment")}
                  error={errors.comment?.message}
                />
                <button
                  data-error={Boolean(errors.comment?.message?.length)}
                  className="group absolute bottom-7 right-5 disabled:cursor-not-allowed data-[error=true]:bottom-7"
                  disabled={
                    isLoadingMutate || Boolean(errors.comment?.message?.length)
                  }
                >
                  <Send
                    data-error={Boolean(errors.comment?.message?.length)}
                    className="h-5 w-5 rotate-45 text-purple-300 disabled:text-gray-300 data-[error=true]:text-red-500"
                  />
                </button>
              </form>
            </div>
          </div>
          <CommentDialogDelete />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
