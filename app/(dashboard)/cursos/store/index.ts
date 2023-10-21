import { Course } from "@/types/response/course";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface CourseReducer {
  courses: Course[];
  courseId: number | null;
  setCourses: (courses: Course[] | undefined) => void;
  setCourseId: (id: number | undefined) => void;
  dateUpdate: number;
  setUpdateDate: () => void;
}

export const useCoursesStore = create(
  persist<CourseReducer>(
    (set, get) => ({
      courses: [],
      courseId: null,
      dateUpdate: 0,

      setUpdateDate: () => {
        set({ dateUpdate: Number(new Date()) });
      },

      setCourses: (courses: Course[] | undefined) => {
        set({ courses: courses });
      },
      setCourseId: (id: number | undefined) => {
        set({ courseId: id });
      },
    }),
    {
      name: "professor-criativo-course",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
