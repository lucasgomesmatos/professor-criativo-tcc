import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "group flex min-h-[80px] w-full resize-none rounded-md border border-input bg-gray-950 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-within:border-2  focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-current focus-visible:ring-purple-500  focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
