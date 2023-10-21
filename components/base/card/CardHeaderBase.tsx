"use client";
import { cn } from "@/lib/utils";
import { HtmlHTMLAttributes, ReactNode } from "react";

interface CardHeaderProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardHeaderBase = ({ children, ...rest }: CardHeaderProps) => {
  return (
    <header
      className={cn(
        "group flex h-14 items-center gap-3 transition-all",
        rest.className
      )}
      {...rest}
    >
      {children}
    </header>
  );
};
