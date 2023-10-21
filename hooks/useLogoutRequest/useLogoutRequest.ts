import { logoutRequest } from "@/services/logout";
import { useHeaderStore } from "@/store/headerStore";
import { useAuthStore } from "@/store/loginStore";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export const useLogoutRequest = () => {
  const { replace } = useRouter();
  const { removeUser } = useAuthStore();
  const { setOpenDialogLogout, isOpenDialogLogout } = useHeaderStore();

  return useMutation(() => logoutRequest(), {
    onSuccess: () => {
      Cookies.remove("mundoprof.com.br");
      removeUser();
      if (isOpenDialogLogout) setOpenDialogLogout();
      localStorage.removeItem("mundoprof.com.br");
      toast.success("Saindo da plataforma...");
      replace("/");
    },
    onError: () => {
      toast.error("Error ao sair");
    },
  });
};
