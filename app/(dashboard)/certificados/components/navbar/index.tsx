"use client";

import { Trophy } from "lucide-react";

export const NavBar = () => {
  return (
    <>
      <div className="fixed z-10  w-full border-b border-solid border-gray-500 bg-gray-900 p-8 ">
        <div className="container gap-4">
          <div className="flex items-center justify-between gap-4">
            <h1 className="flex  gap-2 text-base font-bold -tracking-tighter text-purple-300">
              <Trophy /> Certificados
            </h1>
          </div>
          <div className="h-12 max-[300px]:h-6">
            <h1 className="text-sm text-gray-50 max-[300px]:hidden md:mt-2 md:text-base">
              Aqui você poderá visualizar todos os certificados e baixar-los.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
