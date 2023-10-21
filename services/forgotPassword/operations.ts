import { useAccountUserStore } from "@/app/(dashboard)/minha-conta/store";
import { SendResetPassword } from "@/types/request/sendResetPassword";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { forgotPasswordRequest, resetPasswordRequest } from ".";

export const useSendForgotPasswordRequest = (funcAction: () => void) => {
  const { emailUser } = useAccountUserStore();

  return useMutation(() => forgotPasswordRequest(emailUser), {
    onSuccess: () => {
      toast.success("O e-mail enviado com sucesso.");
      funcAction();
    },
    onError: () => {
      toast.error("Error ao enviar");
    },
  });
};

export const useSendUserForgotPasswordRequest = () => {
  const { replace } = useRouter();

  return useMutation((email: string) => forgotPasswordRequest(email), {
    onSuccess: () => {
      toast.success("O e-mail enviado com sucesso.", { duration: 5000 });
      Cookies.remove("mundoprof.com.br");
      replace("/");
    },
    onError: (e: AxiosError) => {
      let safeError = e.response?.data as {
        message: string;
        status: number;
      };

      if (e.response?.status === 422) {
        safeError.message = "Usuário inexistente";
      }

      toast.error(safeError.message);
    },
  });
};

export const useResetPasswordRequest = () => {
  const { replace } = useRouter();

  return useMutation((data: SendResetPassword) => resetPasswordRequest(data), {
    onSuccess: () => {
      toast.success("Senha alterada com sucesso!", { duration: 5000 });
      Cookies.remove("mundoprof.com.br");
      replace("/");
    },
    onError: () => {
      toast.error("Erro ao alterar a senha");
    },
  });
};
