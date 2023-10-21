import { create } from "zustand";

export interface HeaderReducer {
  isOpenMenuMobile: boolean;
  isOpenDialogLogout: boolean;
  setOpenMenuMobile: () => void;
  setOpenDialogLogout: () => void;
}

export const useHeaderStore = create<HeaderReducer>((set, get) => {
  return {
    isOpenMenuMobile: false,
    isOpenDialogLogout: false,

    setOpenMenuMobile: () => {
      const { isOpenMenuMobile } = get();
      set({ isOpenMenuMobile: !isOpenMenuMobile });
    },
    setOpenDialogLogout: () => {
      const { isOpenDialogLogout } = get();
      set({ isOpenDialogLogout: !isOpenDialogLogout });
    },
  };
});
