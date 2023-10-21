"use client";
import { Header } from "@/components/ui/header";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const token = Cookies.get("mundoprof.com.br");
  const { replace } = useRouter();

  useEffect(() => {
    if (!token) replace("/");
  }, [token, replace]);

  return (
    <>
      <main>
        <Header />
        {children}
      </main>
    </>
  );
}
