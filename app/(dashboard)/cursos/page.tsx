import { SearchBar } from "@/components/base/searchBar";
import { CoursesView } from "./components/views/CoursesView";

export const metadata = {
  title: "Cursos - Professor Criativo.",
  description: "O conhecimento é a base de tudo!!!",
};

export default function Courses() {
  return (
    <>
      <section className="absolute left-0 mt-20 min-h-[80%] w-full bg-gray-900">
        <SearchBar />
        <CoursesView />
      </section>
    </>
  );
}
