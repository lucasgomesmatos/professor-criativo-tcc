"use client";

import { cn } from "@/lib/utils";
import Lottie from "lottie-react";

interface ISvgAnimateProps {
  className?: string;
  svg: any;
}

export const SvgAnimate = ({ className, svg }: ISvgAnimateProps) => {
  return (
    <div className={cn("w-12", className)}>
      <Lottie animationData={svg} loop={true} />
    </div>
  );
};
