import { useCommunityStore } from "@/app/(dashboard)/comunidade/store";
import { useCommunityPostCommentsStore } from "@/app/(dashboard)/comunidade/store/comments";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  createCommentPostRequest,
  createResponseCommentPostRequest,
  deleteCommentPostRequest,
  updateCommentPostRequest,
} from ".";

export const useSendCreateCommentPostRequest = (func: () => void) => {
  const { setUpdateDate: updatePost } = useCommunityStore();
  const { post, setUpdateDate } = useCommunityPostCommentsStore();

  return useMutation(
    (comment: string) => createCommentPostRequest(post?.id, comment),
    {
      onSuccess: () => {
        toast.success("O comentário foi criado sucesso.");
        updatePost();
        setUpdateDate();
        func();
      },
      onError: () => {
        toast.error("Error ao criar comentário");
      },
    }
  );
};

export const useSendUpdateCommentPostRequest = (func: () => void) => {
  const { setUpdateDate: updatePost } = useCommunityStore();
  const { post, setUpdateDate, commentUpdate, setUpdateComment } =
    useCommunityPostCommentsStore();

  return useMutation(
    (comment: string) =>
      updateCommentPostRequest(commentUpdate?.id, post?.id, comment),
    {
      onSuccess: () => {
        toast.success("O comentário foi atualizado sucesso.");
        updatePost();
        setUpdateDate();
        setUpdateComment(false, null);
        func();
      },
      onError: () => {
        toast.error("Error ao atualizar comentário");
      },
    }
  );
};

export const useSendDeleteCommentPostRequest = () => {
  const { setUpdateDate: updatePost } = useCommunityStore();
  const { post, setUpdateDate, commentDeleteId, setOpenDialogCommentDelete } =
    useCommunityPostCommentsStore();

  return useMutation(
    () => deleteCommentPostRequest(commentDeleteId, post?.id),
    {
      onSuccess: () => {
        toast.success("O comentário excluído sucesso.");
        updatePost();
        setUpdateDate();
        setOpenDialogCommentDelete(false, null);
      },
      onError: () => {
        toast.error("Error ao excluir comentário");
      },
    }
  );
};

export const useSendCreateResponseCommentPostRequest = (func: () => void) => {
  const { post, setUpdateDate, commentId, setOpenResponseFormComment } =
    useCommunityPostCommentsStore();

  return useMutation(
    (comment: string) =>
      createResponseCommentPostRequest(post?.id, comment, commentId),
    {
      onSuccess: () => {
        toast.success("A resposta do comentário foi criada com sucesso.");
        setOpenResponseFormComment(false, null);
        setUpdateDate();
        func();
      },
      onError: () => {
        toast.error("Error ao criar resposta do comentário");
      },
    }
  );
};
