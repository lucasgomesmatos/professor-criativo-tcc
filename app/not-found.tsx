import { Button } from "@/components/base/button";
import { Logo } from "@/components/base/logo";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "404 - Plataforma Professor Criativo",
  description: "O conhecimento é a base de tudo!!!",
};

export default function NotFound() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-900">
      <Logo width="176px" height="127px" />
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-10 text-center text-sm text-gray-50 md:text-xl">
          404 - Esta página não pôde ser encontrada.
        </h1>
        <Link href="/home">
          <Button className="flex w-52 items-center justify-center gap-2 p-2">
            <ArrowBigLeft /> Voltar
          </Button>
        </Link>
      </div>
    </section>
  );
}
