"use client";
import { useAccountUserStore } from "@/app/(dashboard)/minha-conta/store";
import { Loading } from "@/components/base/loading";
import { useFetch } from "@/hooks/useFetch/useFetch";
import { useMedia } from "@/hooks/useMedia";
import { getDataUser } from "@/services/me";
import globo from "@/shared/assets/globo.svg";
import { Endpoint } from "@/shared/utils/axios/constants/environment";
import { useHeaderStore } from "@/store/headerStore";
import { AccountUser } from "@/types/response/myAccount";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Logo } from "../../base/logo";
import { HeaderDialogLogout } from "./HeaderDialogLogout";
import { HeaderDropdownMenuMobile } from "./HeaderDropdownMenuMobile";
import { HeaderMenuMobile } from "./HeaderMenuMobile";
import { HeaderNavLink } from "./HeaderNavLink";
import { HeaderNavLinkMobile } from "./HeaderNavLinkMobile";
import { HeaderNavigateUser } from "./HeaderNavigateUser";

export const Header = () => {
  const { isOpenMenuMobile, setOpenMenuMobile } = useHeaderStore();
  const isWide = useMedia("(min-width: 900px)");

  const { setDataUser } = useAccountUserStore();
  const { data, error } = useFetch<AccountUser>(Endpoint.ME, getDataUser);

  useEffect(() => {
    if (error instanceof Error) {
      toast.error("Erro de conexão");
      return;
    }
    setDataUser(data);
  }, [data, error, setDataUser]);

  if (!data) return <Loading />;

  return (
    <header className="fixed left-0 top-0 z-50 h-20 w-full border-b border-solid border-gray-500 bg-gray-800">
      <nav className="m-auto flex h-full max-w-5xl items-center justify-between px-4">
        <div className="z-50 flex items-center gap-6">
          <Link href="/home">
            {isWide ? (
              <Logo width="126px" height="45px" />
            ) : (
              <Image src={globo} alt="Logo Globo" width={56} height={56} />
            )}
          </Link>
          <div className="accordion-down relative transition duration-700 ease-out md:hidden">
            {isOpenMenuMobile ? (
              <HeaderMenuMobile icon={X} onClick={setOpenMenuMobile} />
            ) : (
              <HeaderMenuMobile icon={Menu} onClick={setOpenMenuMobile} />
            )}
            {isOpenMenuMobile && (
              <>
                <HeaderDropdownMenuMobile onClick={setOpenMenuMobile}>
                  <HeaderNavLinkMobile onClick={setOpenMenuMobile} />
                </HeaderDropdownMenuMobile>
              </>
            )}
          </div>
        </div>

        <HeaderNavLink />
        <HeaderNavigateUser />
        <HeaderDialogLogout />
      </nav>
    </header>
  );
};
