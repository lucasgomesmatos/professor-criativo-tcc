import { CommunityUpdatePostView } from "../components/views/CommunityUpdatePostView";

export const metadata = {
  title: "Atualizar Postagem - Professor Criativo.",
  description: "O conhecimento é a base de tudo!!!",
};

export default function CreatePost() {
  return (
    <>
      <div className="container">
        <div className="mb-24 mt-16 flex flex-wrap justify-center gap-4">
          <CommunityUpdatePostView />
        </div>
      </div>
    </>
  );
}
