import { User } from "@/types/response/user";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface AccountUserReducer {
  user: User | null;
  prefix: string | null;
  saveUser: (user: User) => void;
  removeUser: () => void;
}

export const useAuthStore = create(
  persist<AccountUserReducer>(
    (set) => ({
      user: null,
      prefix: null,
      saveUser: (user: User) => {
        const { name } = user;
        const prefix = name.slice(0, 2).toLocaleUpperCase();

        set({ user: user, prefix: prefix });
      },
      removeUser: () => {
        set({ user: null, prefix: null });
      },
    }),
    {
      name: "professor-criativo",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
