import { cn } from "@/lib/utils";
import { HtmlHTMLAttributes, ReactNode } from "react";

interface CardFooterProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardFooter = ({ children, ...rest }: CardFooterProps) => {
  return (
    <footer className={cn("mt-4", rest.className)} {...rest}>
      {children}
    </footer>
  );
};
