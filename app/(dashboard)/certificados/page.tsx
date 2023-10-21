import { NavBar } from "./components/navbar";
import { CertificateView } from "./components/views/CertificateView";

export const metadata = {
  title: "Certificados - Mundo Prof.",
  description: "O conhecimento é a base de tudo!!!",
};

export default function Certificate() {
  return (
    <>
      <NavBar />
      <div className="container ">
        <div className="mb-24 mt-48 flex flex-wrap justify-center gap-4 overflow-hidden">
          <CertificateView />
        </div>
      </div>
    </>
  );
}
