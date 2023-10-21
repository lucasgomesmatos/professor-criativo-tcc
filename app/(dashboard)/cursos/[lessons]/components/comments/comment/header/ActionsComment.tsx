import { HTMLAttributes } from "react";

import { useAccountUserStore } from "@/app/(dashboard)/minha-conta/store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdownMenu";
import { AccountUser } from "@/types/response/myAccount";
import { CornerDownRight, Edit, MoreVertical, Trash } from "lucide-react";
import { useCommentStore } from "../../../../store/comment";

interface ActionsCommentProps extends HTMLAttributes<HTMLDivElement> {
  userId: number;
  admin: boolean;
  commentId: number;
  description: string;
}

export const ActionsComment = ({
  userId,
  admin,
  commentId,
  description,
  ...rest
}: ActionsCommentProps) => {
  const { account } = useAccountUserStore();
  const {
    setOpenDialogCommentUpdate,
    setOpenDialogCommentDelete,
    setOpenDialogCommentResponse,
  } = useCommentStore();

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
              onClick={() =>
                setOpenDialogCommentUpdate(true, commentId, description)
              }
              className="flex items-center  gap-2 p-2 text-gray-50 hover:bg-gray-800"
            >
              <Edit className="h-4 w-4 text-purple-300" />
              <span>Editar</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setOpenDialogCommentDelete(true, commentId)}
              className="flex items-center  gap-2 p-2 text-gray-50 hover:bg-gray-800"
            >
              <Trash className="h-4 w-4 text-purple-300" />
              <span>Excluir</span>
            </DropdownMenuItem>
            {admin && (
              <DropdownMenuItem
                onClick={() => setOpenDialogCommentResponse(commentId)}
                className="flex items-center  gap-2 p-2 text-gray-50 hover:bg-gray-800"
              >
                <CornerDownRight className="h-4 w-4 text-purple-300" />
                <span>Responder</span>
              </DropdownMenuItem>
            )}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
