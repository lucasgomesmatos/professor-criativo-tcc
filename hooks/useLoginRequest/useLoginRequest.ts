import { UserCredentials, loginRequest } from "@/services/login";
import { useAuthStore } from "@/store/loginStore";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export const useLoginRequest = () => {
  const { push } = useRouter();
  const { saveUser } = useAuthStore();

  return useMutation(
    (credentials: UserCredentials) => loginRequest(credentials),
    {
      onSuccess: (data) => {
        Cookies.set("mundoprof.com.br", `${data.access_token}`, {
          expires: 7,
        });
        saveUser(data);
        push("/home");
      },
      onError: (e: AxiosError) => {
        let safeError = e.response?.data as {
          message: string;
          status: number;
        };

        if (e.response?.status === 401) {
          safeError.message = "E-mail ou senha inválidas!";
        }

        if (e.response?.status === 422) {
          safeError.message = "Usuário inexistente";
        }

        toast.error(safeError.message);
      },
    }
  );
};
