import { Discipline } from "@/types/response/discipline";
import { Year } from "@/types/response/year";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface DisciplinesReducer {
  disciplines: Discipline[];
  years: Year[];
  disciplineId: number | null;
  yearId: number | null;
  setDisciplines: (state: Discipline[] | undefined) => void;
  setDisciplineId: (id: number | undefined) => void;
  setYearId: (id: number | undefined) => void;
  setYears: (state: Year[] | undefined) => void;
}

export const useDisciplinesStore = create(
  persist<DisciplinesReducer>(
    (set, get) => ({
      disciplines: [],
      years: [],
      disciplineId: null,
      yearId: null,

      setDisciplines: (state: Discipline[] | undefined) => {
        set({ disciplines: state });
      },
      setDisciplineId: (id: number | undefined) => {
        set({ disciplineId: id });
      },
      setYears: (state: Year[] | undefined) => {
        set({ years: state });
      },
      setYearId: (id: number | undefined) => {
        set({ yearId: id });
      },
    }),
    {
      name: "professor-criativo-discipline",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
