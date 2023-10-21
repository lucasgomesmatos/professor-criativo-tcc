"use client";
import { Logo } from "@/components/base/logo";
import { Check } from "lucide-react";
import { Element } from "react-scroll";
import { useAccountUserStore } from "../../store";

export const Signature = () => {
  const { account } = useAccountUserStore();

  return (
    <Element name="a3" className="rounded-md bg-gray-700 p-8">
      <h1 className="text-2xl font-bold">Assinatura</h1>
      <div className="mt-6 flex flex-col items-center justify-center">
        <div className="w-full rounded-md bg-gray-950 p-4">
          <div className="relative flex items-center justify-center gap-4  rounded-t-md bg-gray-700 p-6">
            <div className=" flex flex-col items-center gap-4 ">
              <Logo />
              <h1 className="text-center text-lg font-bold text-gray-50">
                Acesso ao Mundo Prof.
              </h1>
            </div>
            <button className="absolute right-8 top-4  -rotate-90 text-2xl font-bold md:ml-auto">
              ...
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-8 rounded-b-md bg-gray-600 p-6">
            <div className="flex justify-center gap-6">
              <div className="text-sm md:text-base">
                <p>Data da compra</p>
                <p className="text-center">
                  {account?.data.date_purchase && account?.data.date_purchase}
                </p>
                <p className="text-center">
                  {!account?.data.date_purchase && "N/D"}
                </p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center rounded-md bg-green-900 p-4">
              <p className="flex gap-2 font-bold -tracking-tighter">
                <Check /> Ativo
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
