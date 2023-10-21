import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface PostRootRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const PostRoot = ({ children, ...rest }: PostRootRootProps) => {
  return (
    <div className={cn("w-full rounded-md  p-6", rest.className)}>
      {children}
    </div>
  );
};
