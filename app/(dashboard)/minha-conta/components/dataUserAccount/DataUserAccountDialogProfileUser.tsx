"use client";

import { AvatarUpload } from "@/components/base/avatarUpload";
import { Button } from "@/components/base/button";
import { DialogBase } from "@/components/base/dialogBase";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSendUpdateProfileImageUserRequest } from "@/services/updatePhotoUser";
import { useAccountUserStore } from "../../store";

export const DataUserAccountDialogProfileUser = () => {
  const {
    setOpenDialogProfileImageUser,
    isOpenDialogProfileImageUser,
    profileImage,
    prefixNameUser,
    newProfileImage,
  } = useAccountUserStore();

  const { mutate, isLoading } = useSendUpdateProfileImageUserRequest(
    setOpenDialogProfileImageUser
  );

  return (
    <>
      <DialogBase
        setOpenDialogBase={() => setOpenDialogProfileImageUser()}
        title="Editar Imagem do Usuário"
        isOpen={isOpenDialogProfileImageUser}
      >
        <div className="flex w-full flex-col items-center ">
          <AvatarUpload />

          <div className="rounded-full border border-purple-600">
            <Avatar className="h-32 w-32 ">
              <AvatarImage
                src={newProfileImage || profileImage || ""}
                alt="Usuário"
              />
              <AvatarFallback className=" bg-gray-950 text-2xl">
                {prefixNameUser}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
          <label
            className="flex h-10 w-40 cursor-pointer items-center justify-center rounded border border-solid
             border-purple-300
             bg-purple-500 bg-transparent p-4 text-xs font-bold  
              tracking-wide text-gray-50 transition-colors hover:bg-purple-400"
            htmlFor="media"
          >
            Alterar Foto
          </label>
          <Button
            loading={isLoading}
            onClick={() => mutate()}
            disabled={!newProfileImage}
            className="flex h-10 w-40 items-center justify-center text-xs tracking-wide"
          >
            Salvar Foto
          </Button>
        </div>
      </DialogBase>
    </>
  );
};
