import { CommunityCreatePostView } from "../components/views/CommunityCreatePostView";

export const metadata = {
  title: "Criar Postagem - Mundo Prof.",
  description: "O conhecimento é a base de tudo!!!",
};

export default function CreatePost() {
  return (
    <>
      <div className="container">
        <div className="mb-24 mt-16 flex flex-wrap justify-center gap-4">
          <CommunityCreatePostView />
        </div>
      </div>
    </>
  );
}
