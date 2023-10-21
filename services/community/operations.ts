import { useCommunityStore } from "@/app/(dashboard)/comunidade/store";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  createPostRequest,
  deletePostRequest,
  updatePostRequest,
  updateVisibilityPostRequest,
} from ".";

export const useSendCreatePostRequest = () => {
  const { replace, refresh } = useRouter();
  const { setUpdateDate } = useCommunityStore();

  return useMutation((formData: FormData) => createPostRequest(formData), {
    onSuccess: () => {
      toast.success("O post foi criado sucesso, aguarde aprovação.");
      refresh();
      replace("/comunidade");
      setUpdateDate();
    },
    onError: () => {
      toast.error("Error ao criar post");
    },
  });
};

export const useSendUpdatePostRequest = () => {
  const { replace, refresh } = useRouter();
  const { setUpdateDate, postUpdate } = useCommunityStore();

  return useMutation(
    (formData: FormData) => updatePostRequest(postUpdate?.id, formData),
    {
      onSuccess: () => {
        toast.success("O post foi atualizado sucesso.");
        refresh();
        replace("/comunidade");
        setUpdateDate();
      },
      onError: () => {
        toast.error("Error ao criar post");
      },
    }
  );
};

export const useSendDeletePostRequest = () => {
  const { setUpdateDate, postDeleteId, setOpenDialogPostDelete } =
    useCommunityStore();

  return useMutation(() => deletePostRequest(postDeleteId), {
    onSuccess: () => {
      toast.success("O post foi excluído com sucesso.");
      setOpenDialogPostDelete(false, null);
      setUpdateDate();
    },
    onError: () => {
      toast.error("Error ao excluir post");
    },
  });
};

export const useSendUpdateVisibilityPostRequest = () => {
  const { setUpdateDate, postVisibilityId, setOpenDialogPostVisibility } =
    useCommunityStore();

  return useMutation(() => updateVisibilityPostRequest(postVisibilityId), {
    onSuccess: () => {
      toast.success("O post foi aprovado com sucesso.");
      setOpenDialogPostVisibility(false, null);
      setUpdateDate();
    },
    onError: () => {
      toast.error("Error ao aprovar post");
    },
  });
};
