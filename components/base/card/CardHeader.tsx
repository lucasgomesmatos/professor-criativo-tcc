"use client";
import { SeparatorBase } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ElementType } from "react";

interface CardHeaderProps {
  title?: string;
  icon?: ElementType;
}

export const CardHeader = ({ title, icon: Icon }: CardHeaderProps) => {
  return (
    <header className="group flex h-14 items-center gap-3 transition-all">
      {Icon && (
        <Icon
          className={cn(
            "h-9 w-9 text-purple-400 group-hover:text-purple-300  data-[error]:text-red-600"
          )}
        />
      )}
      {title && (
        <>
          <SeparatorBase
            className="h-8 w-1 rounded bg-purple-400  group-hover:bg-purple-300"
            orientation="vertical"
          />

          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
          </div>
        </>
      )}
    </header>
  );
};
