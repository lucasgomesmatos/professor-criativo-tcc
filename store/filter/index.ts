import { create } from "zustand";

export interface FilterReducer {
  filter: string | null;
  setFilter: (value: string | null) => void;
}

export const useFilterStore = create<FilterReducer>((set, get) => {
  return {
    filter: null,

    setFilter: (value: string | null) => {
      set({ filter: value });
    },
  };
});
