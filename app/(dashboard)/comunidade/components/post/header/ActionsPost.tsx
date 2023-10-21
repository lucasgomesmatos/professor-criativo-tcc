import { HTMLAttributes } from "react";

import { useAccountUserStore } from "@/app/(dashboard)/minha-conta/store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdownMenu";
import { PostCommunity } from "@/types/response/community";
import { AccountUser } from "@/types/response/myAccount";
import { Check, Edit, MoreVertical, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCommunityStore } from "../../../store";

interface ActionsPostProps extends HTMLAttributes<HTMLDivElement> {
  userId: number;
  admin: boolean;
  post: PostCommunity;
}

export const ActionsPost = ({
  userId,
  admin,
  post,
  ...rest
}: ActionsPostProps) => {
  const { account } = useAccountUserStore();
  const {
    setOpenDialogPostDelete,
    setPostUpdate,
    setOpenDialogPostVisibility,
  } = useCommunityStore();
  const { push } = useRouter();

  const disableButton = (userId: number, account: AccountUser | null) => {
    if (account?.data.type === "admin") return true;
    return userId === account?.data.id ? true : false;
  };

  return (
    <div className={rest.className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button>{disableButton(userId, account) && <MoreVertical />}</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-6 gap-2 bg-gray-500 p-2">
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={() => {
                setPostUpdate(post);
                push("comunidade/atualizar");
              }}
              className="flex items-center  gap-2 p-2 text-gray-50 hover:bg-gray-800"
            >
              <Edit className="h-4 w-4 text-purple-300" />
              <span>Editar</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setOpenDialogPostDelete(true, post.id)}
              className="flex items-center  gap-2 p-2 text-gray-50 hover:bg-gray-800"
            >
              <Trash className="h-4 w-4 text-purple-300" />
              <span>Excluir</span>
            </DropdownMenuItem>
            {admin && !post.visible && (
              <DropdownMenuItem
                onClick={() => setOpenDialogPostVisibility(true, post.id)}
                className="flex items-center  gap-2 p-2 text-gray-50 hover:bg-gray-800"
              >
                <Check className="h-4 w-4 text-purple-300" />
                <span>Aprovar</span>
              </DropdownMenuItem>
            )}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
