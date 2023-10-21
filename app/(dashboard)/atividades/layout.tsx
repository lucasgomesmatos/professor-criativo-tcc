"use client";
import { ReactNode, useEffect } from "react";

export default function DisciplinesLayout({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="absolute left-0 mt-20 min-h-[80%] w-full bg-gray-900">
        {children}
      </section>
    </>
  );
}
