import { cn } from "@/lib/utils";
import { HtmlHTMLAttributes, ReactNode } from "react";

interface CardContentProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardContent = ({ children, ...rest }: CardContentProps) => {
  return (
    <main className={cn("mt-4 h-20", rest.className)} {...rest}>
      <div>{children}</div>
    </main>
  );
};
