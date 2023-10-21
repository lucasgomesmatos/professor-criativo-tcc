import { Footer } from "@/components/base/footer";
import { SvgAnimate } from "@/components/base/svgAnimate";
import { VideoPlayer } from "@/components/base/videoPlayer";
import scrollDownSvg from "@/shared/assets/scroll.json";
import warningSvg from "@/shared/assets/warning.json";
import { Users2 } from "lucide-react";
import Link from "next/link";
import { Title } from "./components/title";

export const metadata = {
  title: "Home - Professor Criativo.",
  description: "O conhecimento é a base de tudo!!!",
};

export default function Home() {
  return (
    <section className="absolute left-0 mt-20 min-h-[80%] w-full bg-gray-900">
      <div className="container">
        <div className="mt-16 w-full">
          <div className="flex w-full items-center justify-between max-[640px]:gap-4">
            <Title />
            <div>
              <Link href="/comunidade">
                <button className="flex gap-2 rounded bg-gray-600 px-5 py-2 font-bold uppercase transition-colors hover:bg-gray-500 hover:text-purple-300">
                  <Users2 />
                  <span className="max-[840px]:hidden">Comunidade</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <VideoPlayer />
        </div>
      </div>
      <div className="m-auto  flex h-full max-w-5xl flex-col justify-between px-4">
        <div className="mt-10 flex flex-col items-center justify-center gap-2">
          <SvgAnimate className="w-12 opacity-25" svg={scrollDownSvg} />
        </div>
      </div>
      <div className="mt-10 bg-gray-800 px-10 py-9 text-base text-gray-50 md:text-lg">
        <div className="container">
          <div className=" flex flex-col items-center justify-center ">
            <h1 className="flex items-center text-center text-2xl font-bold">
              Regras da Plataforma <SvgAnimate svg={warningSvg} />
            </h1>
            <p className="mt-2">
              Olá, Professor! Seja muito bem-vindo ao Professor Criativo. Para
              ter a melhor experiência de utilização, existem algumas
              informações para serem seguidas. Leia com atenção e caso tenha
              alguma dúvida, sinta-se à vontade para entrar em contato com nosso
              suporte.
            </p>
            <div>
              <p className="mt-2">
                A Plataforma é composta por várias abas para trazer tudo que
                você precisa para aprender para se tornar um professor cada dia
                melhor.
              </p>
              <p className="mt-2">
                <strong>Home:</strong> É onde você está agora e onde você chega
                quando faz o login na plataforma. Aqui você terá acesso a todas
                as informações necessárias para utilização, bem como
                atualizações quando surgir alguma novidade. Então, fique
                atento(a) às modificações para não perder nada.
              </p>
              <p className="mt-2">
                <strong>Atividades:</strong> É a aba onde você encontrará as
                atividades prontas para você imprimir e levar para a sala de
                aula. Serão adicionadas novas atividades constantemente. Basta
                clicar nas atividades para realizar o download.
              </p>
              <p className="mt-2">
                <strong>Cursos:</strong> Aqui você terá as aulas já gravadas e
                os próximos eventos que acontecerão nos próximos dias. Basta
                você acessar e assistir.
              </p>
              <p className="mt-2">
                <strong>Eventos:</strong> É um calendário com tudo que teremos.
                Os eventos ficarão agendados para você poder se programar.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
