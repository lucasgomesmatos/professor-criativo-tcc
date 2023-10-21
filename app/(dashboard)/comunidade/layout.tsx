"use client";
import { ReactNode } from "react";
import { CommunityDrawer } from "./components/drawer";

export default function CommunityLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <section className="absolute left-0 mt-20 min-h-[80%] w-full bg-gray-900 ">
        {children}
        <CommunityDrawer />
      </section>
    </>
  );
}
