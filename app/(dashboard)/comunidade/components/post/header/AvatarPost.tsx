import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { subPrefixNameUser } from "@/shared/utils/stringUtils/subPrefixNameUser";

interface AvatarPostProps {
  image: string;
  name: string;
}

export const AvatarPost = ({ image, name }: AvatarPostProps) => {
  return (
    <Avatar className="h-9 w-9 border-2 border-purple-300">
      <AvatarImage src={image} alt="Usuário" />
      <AvatarFallback className="bg-gray-950 text-sm">
        {subPrefixNameUser(name)}
      </AvatarFallback>
    </Avatar>
  );
};
