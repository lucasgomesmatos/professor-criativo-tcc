import { ActiveLink } from "@/components/base/activeLink";
import { HtmlHTMLAttributes } from "react";

interface HeaderNavLinkMobileProps
  extends HtmlHTMLAttributes<HTMLUListElement> {}

export const HeaderNavLinkMobile = ({ ...rest }: HeaderNavLinkMobileProps) => {
  return (
    <ul className=" flex flex-col gap-2" {...rest}>
      <li className="link-nav rounded hover:bg-gray-800">
        <ActiveLink className="mobile block w-full" href="/home">
          Home
        </ActiveLink>
      </li>
      <li className="link-nav p-6 hover:bg-gray-800">
        <ActiveLink className="mobile block w-full" href="/atividades">
          Atividades
        </ActiveLink>
      </li>
      <li className="link-nav p-6 hover:bg-gray-800">
        <ActiveLink className="mobile block w-full" href="/cursos">
          Cursos
        </ActiveLink>
      </li>
      <li className="link-nav p-6 hover:bg-gray-800">
        <ActiveLink className="mobile block w-full" href="/eventos">
          Eventos
        </ActiveLink>
      </li>
      <li className="link-nav p-6 hover:bg-gray-800">
        <ActiveLink className="mobile block w-full" href="/comunidade">
          Comunidade
        </ActiveLink>
      </li>
    </ul>
  );
};
