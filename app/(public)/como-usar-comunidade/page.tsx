import { Footer } from "@/components/base/footer";
import { SeparatorBase } from "@/components/ui/separator";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Políticas de Cookies - Mundo Prof.",
  description: "O conhecimento é a base de tudo!!!",
};

export default function Cookies() {
  return (
    <section className="absolute left-0 mt-20 min-h-[80%] w-full bg-gray-900">
      <article className="container ">
        <Link
          href="/comunidade"
          className="group mb-5 flex cursor-pointer items-center gap-2  text-sm text-gray-200 transition-colors hover:text-gray-100"
        >
          <ChevronLeft className="h-4 w-4" />{" "}
          <span className="max-[360px]:hidden">Voltar para a comunidade</span>
        </Link>
        <h1 className="mb-2 text-xl font-bold">
          Como Usar a Comunidade Mundo Prof
        </h1>
        <SeparatorBase className="bg-gray-500" />
        <section className="my-4  mb-96 flex flex-1 flex-col">
          <h2 className="text-sm md:text-base">1. CONCEITO DE COMUNIDADE</h2>

          <p className="text-sm md:text-base">
            A Comunidade Mundo Prof é o melhor lugar do mundo para você aprender
            estratégias de ensino. Com experiências e ser e melhorar os seus
            resultados em sala de aula: use-a com sabedoria e responsabilidade.
            O grupo é formado por centenas de professores e precisamos da ajuda
            de todos para que a experiência seja melhor.
          </p>
          <h2 className="my-4 font-bold">
            Como extrair o melhor da comunidade
          </h2>
          <ol>
            <li className="text-sm md:text-base">
              1 - Compartilhe suas experiências boas e aprendizados recentes;
            </li>
            <li className="text-sm md:text-base">
              2 - Envie suas dúvidas e desafios diários ou pontuais;
            </li>
            <li className="text-sm md:text-base">
              3 - Respondas (sem medo de errar) as dúvidas de outros
              professores;
            </li>
            <li className="text-sm md:text-base">
              4 - Divulgue alguma estratégia ou novidade que você achou
              interessante;
            </li>
          </ol>
        </section>
      </article>
      <Footer />
    </section>
  );
}
