import { Activity } from "@/types/response/activity";
import { create } from "zustand";

export interface ActivitiesReducer {
  activities: Activity[] | null;
  activity: Activity | null;
  dialogActivity: boolean;
  setActivities: (state: Activity[] | undefined | null) => void;
  setOpenDialogActivity: (activity: Activity | null, isOpen: boolean) => void;
  loading: boolean;
  setLoading: () => void;
}

export const useActivitiesStore = create<ActivitiesReducer>((set, get) => ({
  activities: [],
  activity: null,
  dialogActivity: false,
  loading: false,

  setActivities: (state: Activity[] | undefined | null) => {
    set({ activities: state });
  },
  setOpenDialogActivity: (activity: Activity | null, isOpen: boolean) => {
    set({ activity: activity, dialogActivity: isOpen });
  },
  setLoading: () => {
    const { loading } = get();
    set({ loading: !loading });
  },
}));
