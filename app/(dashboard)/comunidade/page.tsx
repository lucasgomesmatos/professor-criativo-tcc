import { NavBar } from "./components/navBar";
import { CommunityView } from "./components/views/CommunityView";

export const metadata = {
  title: "Comunidade - Professor Criativo.",
  description: "O conhecimento é a base de tudo!!!",
};

export default function Community() {
  return (
    <>
      <NavBar />
      <div className="container ">
        <div className="mb-24 mt-48 flex flex-wrap justify-center gap-4 overflow-hidden">
          <CommunityView />
        </div>
      </div>
    </>
  );
}
