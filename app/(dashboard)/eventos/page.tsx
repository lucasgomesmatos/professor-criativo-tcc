import { SearchBar } from "@/components/base/searchBar";
import { EventsView } from "./components/views/EventsView";

export const metadata = {
  title: "Eventos - Mundo Prof.",
  description: "O conhecimento é a base de tudo!!!",
};

export default function Subjects() {
  return (
    <>
      <section className="absolute left-0 mt-20 min-h-[80%] w-full bg-gray-900">
        <SearchBar />
        <EventsView />
      </section>
    </>
  );
}
