"use client";
import { useAccountUserStore } from "@/app/(dashboard)/minha-conta/store";

export const Title = () => {
  const { firstNameUser } = useAccountUserStore();

  return (
    <div className="flex items-center  gap-6 max-[840px]:flex-col max-[840px]:items-start max-[840px]:gap-2">
      <h1 className=" text-3xl font-bold">Olá, {firstNameUser}</h1>
      <p className="mt-2 text-lg max-[640px]:text-sm">
        Bem-vindo!{" "}
        <span className="block max-[640px]:max-w-[200px]">
          Ser o melhor professor é um objetivo nobre e inspirador!
        </span>
      </p>
    </div>
  );
};
