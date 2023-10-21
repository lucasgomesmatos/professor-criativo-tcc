import { Comment, CourseModule, Module } from "@/types/response/module";
import { create } from "zustand";

export interface ModulesReducer {
  course: CourseModule | null;
  modules: Module[];
  currentModuleIndex: number;
  currentLessonIndex: number;
  setCourse: (course: CourseModule | undefined) => void;
  play: (lessonIndex: number, moduleIndex: number) => void;
  prev: () => void;
  next: () => void;
  comments: Comment[];
  dateUpdate: number;
  setUpdateDate: () => void;
  setReset: () => void;
  loading: boolean;
  setLoading: () => void;
  showQuiz: {
    showButton: boolean;
    lengthLessons: number;
  };
  setShowQuiz: () => void;
}

export const useModulesStore = create<ModulesReducer>((set, get) => ({
  course: null,
  loading: false,
  modules: [],
  comments: [],
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  dateUpdate: 0,
  showQuiz: {
    showButton: false,
    lengthLessons: 0,
  },

  setLoading: () => {
    const { loading } = get();
    set({ loading: !loading });
  },

  setReset: () => {
    set({
      course: null,
      modules: [],
      comments: [],
      currentModuleIndex: 0,
      currentLessonIndex: 0,
      dateUpdate: 0,
      showQuiz: {
        showButton: false,
        lengthLessons: 0,
      },
    });
  },

  setUpdateDate: () => {
    set({ dateUpdate: Number(new Date()) });
  },

  setCourse: (course: CourseModule | undefined) => {
    const { currentLessonIndex, currentModuleIndex } = get();
    const modules = course?.modules?.slice();

    if (modules) {
      const lessons = modules[currentModuleIndex].lessons;
      const comments = lessons[currentLessonIndex]
        ? lessons[currentLessonIndex].comments
        : lessons[0].comments;
      set({ comments: comments });
    }

    const lengthLessons = modules?.flatMap((modules) => modules.lessons).length;
    if (lengthLessons) {
      set({
        showQuiz: {
          showButton: false,
          lengthLessons: lengthLessons,
        },
      });
    }

    set({ course: course, modules: modules });
  },
  play: (lessonIndex: number, moduleIndex: number) => {
    const { modules } = get();
    const lessons = modules[moduleIndex].lessons;
    const comments = lessons[lessonIndex].comments;

    set({
      comments: comments,
      currentLessonIndex: lessonIndex,
      currentModuleIndex: moduleIndex,
    });
  },
  prev: () => {
    const { currentLessonIndex, currentModuleIndex, modules } = get();
    const prevLessonIndex = currentLessonIndex - 1;
    let newModuleIndex = currentModuleIndex;
    let newLessonIndex = currentLessonIndex;

    if (prevLessonIndex >= 0) {
      newLessonIndex = prevLessonIndex;
    } else {
      newModuleIndex = currentModuleIndex - 1;
      if (newModuleIndex < 0) return; // No previous module, do nothing.
      const prevModule = modules[newModuleIndex];
      newLessonIndex = prevModule.lessons.length - 1;
    }
    const lessons = modules[newModuleIndex].lessons;
    const comments = lessons[newLessonIndex].comments;
    set({
      comments: comments,
      currentModuleIndex: newModuleIndex,
      currentLessonIndex: newLessonIndex,
    });
  },
  setShowQuiz: () => {
    const { showQuiz } = get();
    const { lengthLessons } = showQuiz;

    set({
      showQuiz: {
        showButton: true,
        lengthLessons,
      },
    });
  },
  next: () => {
    const { currentLessonIndex, currentModuleIndex, modules } = get();
    const moduleIndex = modules[currentModuleIndex];
    const lessonCount = moduleIndex.lessons.length;
    const nextLessonIndex = currentLessonIndex + 1;
    let newModuleIndex = currentModuleIndex;
    let newLessonIndex = currentLessonIndex;

    if (nextLessonIndex < lessonCount) {
      newLessonIndex = nextLessonIndex;
    } else {
      newModuleIndex = currentModuleIndex + 1;
      if (newModuleIndex >= modules.length) return;
      // No next module, do nothing.
      newLessonIndex = 0;
    }

    const lessons = modules[newModuleIndex].lessons;
    const comments = lessons[newLessonIndex].comments;

    set({
      comments: comments,
      currentModuleIndex: newModuleIndex,
      currentLessonIndex: newLessonIndex,
    });
  },
}));
