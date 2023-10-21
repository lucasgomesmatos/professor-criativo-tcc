import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface HeaderCommentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const HeaderComment = ({ children, ...rest }: HeaderCommentProps) => {
  return <header className={cn(rest.className)}>{children}</header>;
};
