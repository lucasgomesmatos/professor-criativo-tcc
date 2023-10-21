"use client";
import { CardSkeleton } from "./CardSkeleton";

export const PostSkeleton = () => {
  return (
    <div className="flex w-full max-w-5xl flex-wrap justify-center gap-4">
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
};
