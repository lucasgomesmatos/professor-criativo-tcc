import { httpClient } from "@/shared/utils/axios/api";
import { Endpoint } from "@/shared/utils/axios/constants/environment";
import { SendResetDataUser } from "@/types/request/sendResetDataUser";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const getDataUser = async <T>() => {
  const { data } = await httpClient.get<T>(Endpoint.ME);
  return data;
};

export const sendUpdateDataUser = async (request: SendResetDataUser) => {
  const { email, reason, cpf, name, phone } = request;

  const { data } = await httpClient.patch(`${Endpoint.ME}`, {
    email,
    reason,
    cpf,
    name,
    phone,
  });

  return data;
};

export const useSendUpdateDataUserRequest = (
  funcAction: () => void,
  funcReset: () => void,
  funcUpdateData: (data: string) => void,
  updateData: string
) => {
  return useMutation(
    (request: SendResetDataUser) => sendUpdateDataUser(request),
    {
      onSuccess: () => {
        toast.success("Dados alterados com sucesso");
        funcAction();
        funcReset();
        funcUpdateData(updateData);
      },
      onError: (e: AxiosError) => {
        toast.error("Erro ao alterar os dados");
      },
    }
  );
};
