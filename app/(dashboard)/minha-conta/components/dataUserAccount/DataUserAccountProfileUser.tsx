import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAccountUserStore } from "../../store";
import { DataUserAccountDialogProfileUser } from "./DataUserAccountDialogProfileUser";

export const DataUserAccountProfileUser = () => {
  const { setOpenDialogProfileImageUser, profileImage, prefixNameUser } =
    useAccountUserStore();

  return (
    <>
      <div className="rounded-full border-4 border-purple-500">
        <div className="group relative flex h-52 w-52 cursor-pointer justify-center overflow-hidden rounded-full">
          <div
            onClick={() => setOpenDialogProfileImageUser()}
            className="absolute bottom-0 z-10 flex h-14 w-full cursor-pointer justify-center bg-gray-600 pt-2 text-sm font-bold opacity-0 transition-all group-hover:opacity-100"
          >
            Trocar imagem
          </div>

          <Avatar
            className="h-52 w-52 "
            onClick={() => setOpenDialogProfileImageUser()}
          >
            <AvatarImage src={profileImage || ""} alt="Usuário" />
            <AvatarFallback className="bg-gray-950 text-2xl">
              {prefixNameUser}
            </AvatarFallback>
          </Avatar>
          <DataUserAccountDialogProfileUser />
        </div>
      </div>
    </>
  );
};
