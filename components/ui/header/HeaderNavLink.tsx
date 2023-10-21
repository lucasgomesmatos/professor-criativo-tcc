import { ActiveLink } from "@/components/base/activeLink";

export const HeaderNavLink = () => {
  return (
    <ul className="hidden gap-4 max-[840px]:gap-1 md:flex">
      <li className="link-nav">
        <ActiveLink href="/home">Home</ActiveLink>
      </li>
      <li className="link-nav">
        <ActiveLink href="/atividades">Atividades</ActiveLink>
      </li>
      <li className="link-nav">
        <ActiveLink href="/cursos">Cursos</ActiveLink>
      </li>
      <li className="link-nav">
        <ActiveLink href="/eventos">Eventos</ActiveLink>
      </li>
      <li className="link-nav">
        <ActiveLink href="/comunidade">Comunidade</ActiveLink>
      </li>
    </ul>
  );
};
