import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface HeaderPostProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const HeaderPost = ({ children, ...rest }: HeaderPostProps) => {
  return <header className={cn(rest.className)}>{children}</header>;
};
