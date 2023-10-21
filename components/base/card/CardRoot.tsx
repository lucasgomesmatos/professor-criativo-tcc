import { cn } from "@/lib/utils";
import { HtmlHTMLAttributes, ReactNode } from "react";

interface CardCardRootProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardRoot = ({ children, ...rest }: CardCardRootProps) => {
  return (
    <div
      className={cn(
        "group h-72 w-80 rounded-md bg-gray-700 p-8",
        rest.className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
