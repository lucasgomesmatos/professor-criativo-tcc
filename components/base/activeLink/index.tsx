"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

export const ActiveLink = ({
  children,
  href,
  className = "desktop",
  ...rest
}: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActiveCurrent = pathname.includes(href.toString());
  const currentClassName =
    className === "desktop" ? "active-link" : "active-link-mobile";

  return (
    <Link
      href={href}
      className={isActiveCurrent ? currentClassName : "block w-full"}
      {...rest}
    >
      {children}
    </Link>
  );
};
