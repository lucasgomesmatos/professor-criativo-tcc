import { HtmlHTMLAttributes, ReactNode } from "react";

interface DropdownMenuProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const HeaderDropdownMenuMobile = ({
  children,
  ...rest
}: DropdownMenuProps) => {
  return (
    <>
      <div
        {...rest}
        className="fixed left-0 top-0  z-20 min-h-screen min-w-full"
      />
      <div className="absolute  top-9 z-30 w-48 rounded bg-gray-500 p-2">
        {children}
      </div>
    </>
  );
};
