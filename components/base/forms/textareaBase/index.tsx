"use client";
import { Textarea, TextareaProps } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface TextareaBaseProps extends TextareaProps {
  label?: string;
  optionComponent?: JSX.Element;
  error?: string;
}

export const TextareaBase = forwardRef<HTMLTextAreaElement, TextareaBaseProps>(
  ({ label, className, id, error, ...rest }, ref) => {
    return (
      <div className="group">
        <label className="text-sm text-gray-200" htmlFor={id}>
          {label}
        </label>
        <Textarea
          data-error={error}
          ref={ref}
          className={cn(
            "mt-2 border-purple-300 bg-gray-950 data-[error]:border-red-600",
            className
          )}
          {...rest}
        />
        {error && <span className="pl-2 text-sm text-red-600">{error}</span>}
      </div>
    );
  }
);
