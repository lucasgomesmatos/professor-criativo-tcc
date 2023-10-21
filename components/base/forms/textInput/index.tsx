"use client";
import { cn } from "@/lib/utils";
import { ElementType, forwardRef } from "react";
import { Input, InputProps } from "../input";

interface TextInputIconProps extends InputProps {
  icon?: ElementType;
  classNameIcon?: string;
  label?: string;
  optionComponent?: JSX.Element;
  error?: string;
}

export const TextInputBase = forwardRef<HTMLInputElement, TextInputIconProps>(
  (
    {
      label,
      className,
      classNameIcon,
      id,
      icon: Icon,
      optionComponent,
      error,
      ...props
    },
    ref
  ) => {
    return (
      <div className="group">
        <label className="text-sm text-gray-200" htmlFor={id}>
          {label}
        </label>

        <div className="relative">
          {Icon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3  text-gray-500">
              <Icon
                data-error={error}
                className={cn(
                  "h-4 w-4 text-purple-300  data-[error]:text-red-600",
                  classNameIcon
                )}
              />
            </div>
          )}
          <Input
            data-error={error}
            ref={ref}
            className={cn(
              "mt-2 border-purple-300 bg-gray-950 px-10 data-[error]:border-red-600",
              className
            )}
            {...props}
          />
          {optionComponent}
        </div>
        {error && <span className="pl-2 text-sm text-red-600">{error}</span>}
      </div>
    );
  }
);
