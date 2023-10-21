import { Footer } from "@/components/base/footer";
import { MainAccountUser } from "./components/main";

export const metadata = {
  title: "Minha conta - - Mundo Prof.",
  description: "O conhecimento é a base de tudo!!!",
};

export default function MyAccount() {
  return (
    <section className="absolute left-0 mt-20 min-h-[80%] w-full bg-gray-900">
      <MainAccountUser />
      <Footer />
    </section>
  );
}
