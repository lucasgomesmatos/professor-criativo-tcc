"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { useModulesStore } from "../../store";
import { Lesson } from "../lesson";

interface ModuleProps {
  moduleIndex: number;
  title: string;
  amountOfLessons: number;
}

export const Module = ({
  moduleIndex,
  title,
  amountOfLessons,
}: ModuleProps) => {
  const { modules, play, currentLessonIndex, currentModuleIndex } =
    useModulesStore();
  const lessons = modules[moduleIndex].lessons;

  return (
    <Collapsible.Root
      className="group"
      defaultOpen={moduleIndex === 0 || moduleIndex === currentModuleIndex}
    >
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-gray-800 p-4 transition-transform focus-within:bg-gray-700">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-gray-200">
            {amountOfLessons} {amountOfLessons > 1 ? "aulas" : "aula"}
          </span>
        </div>
        <ChevronDown className="ml-auto h-5 w-5 text-gray-200 group-data-[state=open]:rotate-180" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons.map((lesson, lessonIndex) => {
            const isCurrent =
              currentModuleIndex === moduleIndex &&
              currentLessonIndex === lessonIndex;

            return (
              <Lesson
                key={lesson.id}
                title={`Aula ${lessonIndex + 1}`}
                duration={lesson.duration}
                isCurrent={isCurrent}
                onPlay={() => play(lessonIndex, moduleIndex)}
              />
            );
          })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
