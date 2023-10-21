import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface CommentRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CommentRoot = ({ children, ...rest }: CommentRootProps) => {
  return (
    <div className={cn("w-full rounded-md bg-gray-900 p-4 ", rest.className)}>
      {children}
    </div>
  );
};
