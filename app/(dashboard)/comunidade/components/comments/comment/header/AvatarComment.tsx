import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { subPrefixNameUser } from "@/shared/utils/stringUtils/subPrefixNameUser";

interface AvatarCommentProps {
  image: string;
  name: string;
}

export const AvatarComment = ({ image, name }: AvatarCommentProps) => {
  return (
    <Avatar className="h-9 w-9 border-2 border-purple-300">
      <AvatarImage src={image} alt="Usuário" />
      <AvatarFallback className="bg-gray-950 text-base">
        {subPrefixNameUser(name)}
      </AvatarFallback>
    </Avatar>
  );
};
