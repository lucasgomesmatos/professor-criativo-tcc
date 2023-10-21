import globo from "@/shared/assets/globo.svg";
import { Facebook, Instagram, Mail, Navigation } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className=" w-full border-t border-solid border-gray-500  p-6">
      <div className="container">
        <div className="flex w-full justify-between gap-6 max-[840px]:flex-col ">
          <div>
            <h2 className="text-lg font-bold">Mapa do Site</h2>
            <ul className=" mt-4 grid grid-cols-2 gap-2 max-[840px]:grid-cols-3 max-[460px]:grid-cols-1">
              <li className="link-footer">
                <Link href="/home">Home</Link>
              </li>
              <li className="link-footer">
                <Link href="/minha-conta">Minha Conta</Link>
              </li>
              <li className="link-footer">
                <Link target="_blank" href="https://wa.me/5531993909228">
                  Contato
                </Link>
              </li>
              <li className="link-footer">
                <Link href="/termos">Termos</Link>
              </li>
              <li className="link-footer">
                <Link href="/politicas-de-privacidade">Privacidade</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Redes</h2>
            <ul className=" mt-4 flex gap-4">
              <li className=" rounded-md bg-gray-500 p-2">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/mundo.prof"
                >
                  <Instagram className="cursor-pointer transition-colors hover:text-purple-300" />
                </Link>
              </li>
              <li className=" rounded-md bg-gray-500 p-2">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/profbio.dicas?mibextid=LQQJ4d"
                >
                  <Facebook className="cursor-pointer transition-colors hover:text-purple-300" />
                </Link>
              </li>
              <li className=" rounded-md bg-gray-500 p-2">
                <Link href="mailto:plataformamundoprof@gmail.com">
                  <Mail className="cursor-pointer transition-colors hover:text-purple-300" />
                </Link>
              </li>
              <li className=" rounded-md bg-gray-500 p-2">
                <Link href="https://t.me/mundoprof" target="_blank">
                  <Navigation className="cursor-pointer transition-colors hover:text-purple-300" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center max-[840px]:mt-4">
            <Image src={globo} alt="Logo Globo" width={48} height={48} />
            <p className="p-3 text-center text-sm text-gray-200">
              Professor Criativo. © {new Date().getFullYear()}
              <br />
              Alguns direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
