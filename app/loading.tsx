"use client";
import { Logo } from "@/components/base/logo";
import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div className="fixed left-0 top-0 z-50 flex min-h-screen w-full flex-col items-center justify-center gap-2 bg-gray-900">
      <Logo width="176px" height="127px" />
      <ReactLoading color="#b07cf8" type="spokes" width={32} height={32} />
    </div>
  );
}
