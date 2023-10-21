import { Notification } from "@/types/response/notification";
import { create } from "zustand";

export interface NotificationReducer {
  isOpenNotification: boolean;
  notification: Notification | null;
  setOpenDialogNotification: (
    notification: Notification | null,
    openDialog: boolean
  ) => void;

  isOpenDropdown: boolean;
  setOpenDropdown: () => void;

  updateDate: number;
  setUpdateDate: () => void;
}

export const useNotificationStore = create<NotificationReducer>((set, get) => {
  return {
    isOpenNotification: false,
    isOpenDropdown: false,
    notification: null,
    updateDate: 0,
    setOpenDropdown: () => {
      const { isOpenDropdown } = get();
      set({ isOpenDropdown: !isOpenDropdown });
    },

    setOpenDialogNotification: (
      notification: Notification | null,
      openDialog: boolean
    ) => {
      set({ notification: notification, isOpenNotification: openDialog });
    },
    setUpdateDate: () => {
      set({ updateDate: Number(new Date()) });
    },
  };
});
