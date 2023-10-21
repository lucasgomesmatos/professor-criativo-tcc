import { Badge } from "@/components/ui/badge";
import { HTMLAttributes } from "react";

interface NameUserCommentProps extends HTMLAttributes<HTMLDivElement> {
  nameUser: string;
  admin: boolean;
}

export const NameUserComment = ({ admin, nameUser }: NameUserCommentProps) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {admin && (
        <Badge className=" bg-purple-300 font-bold text-gray-900 hover:bg-purple-300">
          Professor Criativo.
        </Badge>
      )}
      <span className="text-xs text-gray-200">{nameUser}</span>
    </div>
  );
};
