"use client";

import { Button } from "@/components/base/button";
import { DialogBase } from "@/components/base/dialogBase";
import { useLogoutRequest } from "@/hooks/useLogoutRequest/useLogoutRequest";
import { useHeaderStore } from "@/store/headerStore";
import { LogOut, X } from "lucide-react";

export const HeaderDialogLogout = () => {
  const { isOpenDialogLogout, setOpenDialogLogout } = useHeaderStore();
  const { mutate, isLoading } = useLogoutRequest();

  return (
    <>
      <DialogBase
        setOpenDialogBase={() => setOpenDialogLogout()}
        title=""
        isOpen={isOpenDialogLogout}
      >
        <div className="flex flex-col justify-center">
          <h1 className="text-center text-xl font-bold tracking-wide">
            Quer mesmo sair ? :/
          </h1>
          <div className="mt-7 flex h-28 gap-4">
            <Button
              onClick={setOpenDialogLogout}
              className="flex flex-col items-center justify-center gap-2"
            >
              <X className="h-6 w-6 font-semibold" /> Nãoooo!
            </Button>
            <Button
              disabled={isLoading}
              onClick={() => mutate()}
              className="flex flex-col items-center justify-center gap-2 bg-gray-500 text-gray-100 hover:bg-gray-600 hover:text-gray-200"
            >
              <LogOut className="h-6 w-6 font-semibold" />
              Sair
            </Button>
          </div>
        </div>
      </DialogBase>
    </>
  );
};
