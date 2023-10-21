"use client";
import { useModulesStore } from "@/app/(dashboard)/cursos/[lessons]/store";
import dynamic from "next/dynamic";
import { useLayoutEffect, useState } from "react";
import { Loading } from "../loading";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const VideoPlayerLesson = () => {
  const {
    currentLessonIndex,
    currentModuleIndex,
    modules,
    next,
    showQuiz,
    setShowQuiz,
  } = useModulesStore();

  const [hasWindow, setHasWindow] = useState(false);
  const [hasCurrentLesson, setHasCurrentLesson] = useState<string>();
  useLayoutEffect(() => {
    if (typeof window !== "undefined") setHasWindow(true);

    if (modules) {
      const currentLesson =
        modules[currentModuleIndex]?.lessons[currentLessonIndex];
      setHasCurrentLesson(currentLesson?.path);
    }
  }, [
    setHasWindow,
    setHasCurrentLesson,
    currentLessonIndex,
    currentModuleIndex,
    modules,
  ]);

  if (!hasCurrentLesson) return <Loading />;

  const handleNextLesson = () => {
    next();

    if (showQuiz.lengthLessons === currentLessonIndex + 1) {
      setShowQuiz();
    }
  };

  return (
    <div className="relative rounded bg-gray-600 pb-[56.25%]">
      {hasWindow && hasCurrentLesson ? (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          onEnded={handleNextLesson}
          className="absolute left-0 top-0 rounded"
          url={hasCurrentLesson}
        />
      ) : (
        <div className="absolute flex h-full w-full animate-pulse items-center justify-center rounded-lg bg-gray-600">
          <svg
            className="h-24 w-24 text-gray-200 dark:text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            aria-hidden="true"
            viewBox="0 0 384 512"
          >
            <path d="M361 215c14.3 8.8 23 24.3 23 41s-8.7 32.2-23 40.1l-287.97 176c-14.82 9.9-33.37 10.3-48.51 1.8A48.02 48.02 0 0 1 0 432V80a48.02 48.02 0 0 1 24.52-41.87 48.019 48.019 0 0 1 48.51.91L361 215z" />
          </svg>
        </div>
      )}
    </div>
  );
};
