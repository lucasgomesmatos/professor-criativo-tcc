"use client";
import { Link } from "react-scroll";

export const NavMenu = () => {
  return (
    <nav className="fixed hidden md:flex">
      <ul className=" rounded-md bg-gray-700 p-4">
        <li className="relative flex cursor-pointer rounded transition-colors  hover:bg-gray-800 ">
          <Link
            activeClass="active "
            to="a1"
            className="p-4 "
            smooth={true}
            duration={500}
            spy={true}
            offset={-170}
          >
            Meus Dados
          </Link>
        </li>
        <li className="relative flex cursor-pointer rounded  transition-colors hover:bg-gray-800">
          <Link
            activeClass="active"
            to="a2"
            className="p-4"
            smooth={true}
            duration={500}
            spy={true}
            offset={-120}
          >
            Meu Acesso
          </Link>
        </li>
        <li className="relative flex cursor-pointer rounded  transition-colors hover:bg-gray-800">
          <Link
            activeClass="active"
            to="a3"
            className="p-4"
            smooth={true}
            duration={500}
            spy={true}
            offset={-120}
          >
            Assinaturas
          </Link>
        </li>
        <li className="relative flex cursor-pointer rounded  transition-colors hover:bg-gray-800">
          <Link
            activeClass="active"
            className="p-4"
            to="a4"
            smooth={true}
            duration={500}
            spy={true}
            offset={-120}
          >
            Histórico
          </Link>
        </li>
      </ul>
    </nav>
  );
};
