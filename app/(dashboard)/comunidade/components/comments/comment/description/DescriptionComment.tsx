import { HTMLAttributes, ReactNode } from "react";

interface DescriptionCommentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const DescriptionComment = ({
  children,
  ...rest
}: DescriptionCommentProps) => {
  return <div {...rest}>{children}</div>;
};
