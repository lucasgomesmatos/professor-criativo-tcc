import { HTMLAttributes, ReactNode } from "react";

interface ContentPostProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const ContentPost = ({ children, ...rest }: ContentPostProps) => {
  return <div {...rest}>{children}</div>;
};
