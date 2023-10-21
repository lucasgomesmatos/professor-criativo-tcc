"use client";

import ReactLoading from "react-loading";
import { Logo } from "../logo";

export const Loading = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex min-h-screen w-full flex-col items-center justify-center gap-2 overflow-hidden bg-gray-900">
      <Logo width="176px" height="127px" />
      <ReactLoading color="#b07cf8" type="spokes" width={32} height={32} />
    </div>
  );
};
