import { FileBadge2, LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";

import { useAccountUserStore } from "@/app/(dashboard)/minha-conta/store";
import { NotificationBase } from "@/components/base/notificationBase";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdownMenu";
import { useHeaderStore } from "@/store/headerStore";
import Link from "next/link";

export const HeaderNavigateUser = () => {
  const { prefixNameUser, profileImage } = useAccountUserStore();
  const { setOpenDialogLogout } = useHeaderStore();

  return (
    <nav>
      <ul className="flex items-center gap-8">
        <li>
          <NotificationBase />
        </li>
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="rounded-full border-2 border-purple-300">
                <Avatar>
                  <AvatarImage src={profileImage || ""} />
                  <AvatarFallback>{prefixNameUser}</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 gap-2 bg-gray-500 p-2">
              <DropdownMenuGroup>
                <Link href="/minha-conta">
                  <DropdownMenuItem className="p-4 text-gray-50  hover:bg-gray-800">
                    <User className="mr-2 h-5 w-5 text-purple-300" />
                    <span className="text-gray-50">Minha conta</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/certificados">
                  <DropdownMenuItem className="p-4 text-gray-50 hover:bg-gray-800">
                    <FileBadge2 className="mr-2 h-5 w-5 text-purple-300" />
                    <span className="text-gray-50">Certificados</span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem
                  onClick={setOpenDialogLogout}
                  className="p-4 text-gray-50 hover:bg-gray-800"
                >
                  <LogOut className="mr-2 h-5 w-5 text-purple-300" />
                  <span className="text-gray-50">Sair da plataforma</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>
    </nav>
  );
};
