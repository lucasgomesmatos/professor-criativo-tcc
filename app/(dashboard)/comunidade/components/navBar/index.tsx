"use client";

import { Button } from "@/components/base/button";
import { LucidePencil, Users2 } from "lucide-react";
import { useCommunityStore } from "../../store";

export const NavBar = () => {
  const { openDrawerCommunity, setOpenDrawerCommunity } = useCommunityStore();

  return (
    <>
      <div className="fixed z-10  w-full border-b border-solid border-gray-500 bg-gray-900 p-8 ">
        <div className="container gap-4">
          <div className="flex items-center justify-between gap-4">
            <h1 className="flex  gap-2 text-base font-bold -tracking-tighter text-purple-300">
              <Users2 /> Comunidade
            </h1>
            <div className="flex gap-4">
              <Button
                onClick={setOpenDrawerCommunity}
                className="w-38 flex  h-10 items-center gap-2 text-sm"
              >
                <LucidePencil className="h-4 w-4" />{" "}
                <span className="max-[460px]:hidden">Ações</span>
              </Button>
            </div>
          </div>
          {/* <TextInputBase
            id="search"
            label=""
            className="border-none pr-4 focus-within:bg-black "
            placeholder="Pesquisar..."
            type="text"
            icon={Search}
            classNameIcon="text-white group-focus-within:text-purple-300"
          /> */}
          <div className="h-12 max-[300px]:h-6">
            <h1 className="text-sm text-gray-50 max-[300px]:hidden md:mt-2 md:text-base">
              Fique à vontade para compartilhar seus relatos, experiências e o
              seu dia a dia.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
