"use client";
import { CardSkeleton } from "./CardSkeleton";

export const CardsSkeleton = () => {
  return (
    <div className=" flex max-w-5xl flex-wrap justify-center gap-4">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
};
