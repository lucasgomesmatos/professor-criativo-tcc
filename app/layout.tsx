import { ProviderReactQuery } from "@/components/base/providerReactQuery";
import { SvgAnimate } from "@/components/base/svgAnimate";
import school from "@/shared/assets/scholl.json";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Mundo Prof.",
  description: "O conhecimento é a base de tudo!!!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true}>
      <body
        className={`${roboto.variable}  flex bg-gray-900 font-sans text-gray-100 `}
      >
        <section className="flex min-h-screen flex-1 overflow-hidden">
          <aside className="relative hidden max-h-fit flex-1 items-center justify-center md:flex">
            <SvgAnimate className=" w-96" svg={school} />
          </aside>
        </section>
        <Toaster />
        <ProviderReactQuery>{children}</ProviderReactQuery>
      </body>
    </html>
  );
}
