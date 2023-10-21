import { useAccountUserStore } from "@/app/(dashboard)/minha-conta/store";
import { httpClient } from "@/shared/utils/axios/api";
import { Endpoint } from "@/shared/utils/axios/constants/environment";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const sendUpdateProfileImage = async (
  newProfileImage: string | null
) => {
  const { data } = await httpClient.patch<string>(Endpoint.PROFILE_IMAGE, {
    image: newProfileImage,
  });
  return data;
};

export const useSendUpdateProfileImageUserRequest = (
  funcAction: () => void
) => {
  const { newProfileImage, setProfileImageUser, setNewProfileImageUser } =
    useAccountUserStore();

  return useMutation(() => sendUpdateProfileImage(newProfileImage), {
    onSuccess: () => {
      setProfileImageUser(newProfileImage);
      setNewProfileImageUser(null);
      toast.success("Imagem alterada com sucesso");
      funcAction();
    },
    onError: () => {
      toast.error("Error ao alterar a imagem");
    },
  });
};
