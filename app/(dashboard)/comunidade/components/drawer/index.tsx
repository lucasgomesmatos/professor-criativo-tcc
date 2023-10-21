import { useAccountUserStore } from "@/app/(dashboard)/minha-conta/store";
import { SeparatorBase } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { useCommunityStore } from "../../store";

export const CommunityDrawer = () => {
  const {
    openDrawerCommunity,
    setOpenDrawerCommunity,
    listVisiblePosts,
    setListVisiblePosts,
  } = useCommunityStore();
  const { account } = useAccountUserStore();

  return (
    <div>
      <Sheet open={openDrawerCommunity} onOpenChange={setOpenDrawerCommunity}>
        <SheetContent className="bg-gray-600">
          <SheetHeader>
            <SheetTitle className="mt-5 text-gray-50">
              Bem-vindos a comunidade!
            </SheetTitle>
            <div>
              <nav className="">
                <div className="mt-6 flex flex-col  gap-2 rounded-md bg-gray-700 p-4">
                  <Link
                    onClick={setOpenDrawerCommunity}
                    href="/comunidade"
                    className="flex cursor-pointer rounded px-6 py-4 font-bold tracking-wide text-purple-300  transition-colors hover:bg-gray-800"
                  >
                    <span className="">Início</span>
                  </Link>
                  <Link
                    onClick={setOpenDrawerCommunity}
                    href="/comunidade/criar"
                    className="flex cursor-pointer rounded px-6 py-4 font-bold tracking-wide text-purple-300  transition-colors hover:bg-gray-800"
                  >
                    <span className="">Criar</span>
                  </Link>
                  <div className="mt-2 flex flex-col justify-start gap-2 rounded  px-2 transition-colors ">
                    <h2 className="px-4 text-gray-50">Comece aqui</h2>
                    <SeparatorBase
                      className="mt-1 h-[1px] w-full bg-gray-500"
                      orientation="vertical"
                    />
                    <nav>
                      <ul>
                        <li className=" flex cursor-pointer rounded  transition-colors hover:bg-gray-800">
                          <Link
                            onClick={setOpenDrawerCommunity}
                            href="/como-usar-comunidade"
                            className="px-4 py-4 font-bold tracking-wide text-purple-300"
                          >
                            Como usar a Comunidade
                          </Link>
                        </li>
                        <li className=" flex cursor-pointer rounded  transition-colors hover:bg-gray-800">
                          <Link
                            onClick={setOpenDrawerCommunity}
                            href="/termos-de-participacao"
                            className="px-4 py-4 font-bold tracking-wide text-purple-300"
                          >
                            Regras da Comunidade
                          </Link>
                        </li>
                        <li className=" flex  rounded  transition-colors ">
                          {account?.data.type === "admin" && (
                            <div className="flex items-center gap-4 px-4 py-4 font-bold tracking-wide text-purple-300">
                              <Switch
                                checked={!listVisiblePosts}
                                onClick={setListVisiblePosts}
                              />
                              Posts não aprovados
                            </div>
                          )}
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </nav>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
