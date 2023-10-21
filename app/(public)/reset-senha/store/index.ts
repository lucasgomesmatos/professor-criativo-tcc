import { create } from "zustand";

export interface ResetPasswordReducer {
  isShowVisibilityPasswordOne: boolean;
  isShowVisibilityPasswordTwo: boolean;
  setShowVisibilityPasswordOne: () => void;
  setShowVisibilityPasswordTwo: () => void;
}

export const useResetPassword= create<ResetPasswordReducer>((set, get) => {
  return {
    isShowVisibilityPasswordOne: false,
    isShowVisibilityPasswordTwo: false,

    setShowVisibilityPasswordOne: () => {
      const {isShowVisibilityPasswordOne} = get()
      set({isShowVisibilityPasswordOne: !isShowVisibilityPasswordOne})
    },
    setShowVisibilityPasswordTwo: () => {
      const {isShowVisibilityPasswordTwo} = get()
      set({isShowVisibilityPasswordTwo: !isShowVisibilityPasswordTwo})
    }
  };
});
