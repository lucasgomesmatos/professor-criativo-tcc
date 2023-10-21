"use client";

import { Button } from "@/components/base/button";
import { DialogBase } from "@/components/base/dialogBase";
import { useSendForgotPasswordRequest } from "@/services/forgotPassword/operations";
import { useAccountUserStore } from "../../store";

export const DataUserAccessDialogPassword = () => {
  const { isOpenDialogUpdatePassword, setOpenDialogUpdatePassword } =
    useAccountUserStore();

  const { mutate, isLoading } = useSendForgotPasswordRequest(
    setOpenDialogUpdatePassword
  );

  return (
    <>
      <DialogBase
        setOpenDialogBase={() => setOpenDialogUpdatePassword()}
        title=""
        isOpen={isOpenDialogUpdatePassword}
      >
        <div className="mt-2 flex flex-col items-center gap-4">
          <h1 className="text-center text-xl font-bold">Alteração de senha!</h1>
          <p className="max-w-sm text-center">
            Será enviado um e-mail de alteração de senha para o seu e-mail de
            cadastro. Deseja continuar ?
          </p>
          <Button loading={isLoading} onClick={() => mutate()}>
            Confirmar
          </Button>
        </div>
      </DialogBase>
    </>
  );
};
