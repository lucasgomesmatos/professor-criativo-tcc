"use client";

import { cn } from "@/lib/utils";
import { HtmlHTMLAttributes, ReactNode } from "react";
import ReactLoading from "react-loading";

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  disabled?: boolean;
  children: ReactNode;
  colorLoading?: string;
}

export const Button = ({
  loading,
  disabled,
  children,
  colorLoading = "#b07cf8",
  ...rest
}: ButtonProps) => {
  return (
    <>
      {loading ? (
        <button
          {...rest}
          disabled
          className={cn(
            " flex w-full cursor-wait justify-center gap-2 rounded bg-purple-600 p-4 text-lg font-bold text-gray-50",
            rest.className
          )}
        >
          <ReactLoading
            color={colorLoading}
            type="spokes"
            width={24}
            height={24}
          />
        </button>
      ) : (
        <button
          {...rest}
          disabled={disabled}
          className={cn(
            "w-full rounded bg-purple-500 p-4 text-lg font-bold text-gray-50 transition-colors hover:bg-purple-400 hover:text-gray-50 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-950",
            rest.className
          )}
        >
          {children}
        </button>
      )}
    </>
  );
};
