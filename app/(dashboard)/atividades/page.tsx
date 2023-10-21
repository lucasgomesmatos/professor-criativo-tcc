import { Breadcrumb } from "@/components/base/breadcrumb";
import { DisciplinesView } from "./components/views/DisciplinesView";

export const metadata = {
  title: "Atividades - Professor Criativo.",
  description: "O conhecimento é a base de tudo!!!",
};

export default function Disciplines() {
  return (
    <>
      <div className="fixed z-10  w-full border-b border-solid border-gray-500 bg-gray-900 p-8 ">
        <div className="container gap-4">
          <div className="flex items-center gap-4">
            <Breadcrumb />
          </div>
          <div className="h-12 max-[300px]:h-6">
            <h1 className="text-sm text-gray-50 max-[300px]:hidden md:mt-2 md:text-base">
              As atividades estão organizadas por disciplinas. Portanto, escolha
              a disciplina que você deseja.
            </h1>
          </div>
        </div>
      </div>
      <DisciplinesView />
    </>
  );
}
