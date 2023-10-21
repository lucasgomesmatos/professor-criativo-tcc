import { HTMLAttributes } from "react";

import { useCommunityPostCommentsStore } from "@/app/(dashboard)/comunidade/store/comments";
import { useAccountUserStore } from "@/app/(dashboard)/minha-conta/store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdownMenu";
import { CommentPost } from "@/types/response/community";
import { AccountUser } from "@/types/response/myAccount";
import { Edit, MoreVertical, Trash } from "lucide-react";

interface ActionsCommentProps extends HTMLAttributes<HTMLDivElement> {
  userId: number;
  admin: boolean;
  comment: CommentPost | null;
}

export const ActionsComment = ({
  userId,
  admin,
  comment,

  ...rest
}: ActionsCommentProps) => {
  const { account } = useAccountUserStore();
  const {
    setUpdateComment,
    setOpenResponseFormComment,
    setOpenDialogCommentDelete,
  } = useCommunityPostCommentsStore();

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
                if (comment) {
                  setUpdateComment(true, comment);
                  setOpenResponseFormComment(false, null);
                }
              }}
              className="flex items-center  gap-2 p-2 text-gray-50 hover:bg-gray-800"
            >
              <Edit className="h-4 w-4 text-purple-300" />
              <span>Editar</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                comment && setOpenDialogCommentDelete(true, comment.id)
              }
              className="flex items-center  gap-2 p-2 text-gray-50 hover:bg-gray-800"
            >
              <Trash className="h-4 w-4 text-purple-300" />
              <span>Excluir</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
