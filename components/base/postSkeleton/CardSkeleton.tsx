"use client";

import { SeparatorBase } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export const CardSkeleton = () => {
  return (
    <div className="z-0 h-[580px] w-full rounded-md bg-gray-700 p-8">
      <div className="flex w-full items-center gap-3">
        <Skeleton className="h-12 w-12 rounded-full bg-gray-900" />
        <SeparatorBase className="h-8 w-1 bg-gray-500" orientation="vertical" />

        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-40 bg-gray-900" />
          <Skeleton className="h-3 w-full bg-gray-900" />
        </div>
      </div>
      <div className="mt-4">
        <Skeleton className="h-80 w-full bg-gray-900" />
      </div>
      <footer className="mt-4">
        <Skeleton className="h-12 w-full bg-gray-900" />
      </footer>
    </div>
  );
};
