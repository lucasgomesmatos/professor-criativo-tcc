import { Lesson, Module } from "@/types/response/module";
import { HTMLAttributes, useEffect, useState } from "react";
import { useModulesStore } from "../../store";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Header = ({ ...rest }: HeaderProps) => {
  const { currentLessonIndex, currentModuleIndex, modules } = useModulesStore();
  const [module, setModule] = useState<Module>();
  const [lesson, setLesson] = useState<Lesson>();

  useEffect(() => {
    if (modules) {
      const currentModule = modules[currentModuleIndex];
      const currentLesson =
        modules[currentModuleIndex]?.lessons[currentLessonIndex];
      setModule(currentModule);
      setLesson(currentLesson);
    }
  }, [modules, setModule, setLesson, currentLessonIndex, currentModuleIndex]);

  return (
    <header className="flex flex-col gap-1" {...rest}>
      <h1
        data-size={lesson && Boolean(lesson?.name.length > 80)}
        className="text-lg font-bold text-zinc-300 data-[size=true]:text-sm"
      >
        {lesson?.name}
      </h1>
      <span className="text-sm text-zinc-400">{module?.name}</span>
    </header>
  );
};
