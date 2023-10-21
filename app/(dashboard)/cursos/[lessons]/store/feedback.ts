import { create } from "zustand";

export interface FeedbackReducer {
  rate: number;
  openDialogRangeFeedback: boolean;
  setOpenDialogRangeFeedback: () => void;
  setRating: (rate: number) => void;
}

export const useFeedbackStore = create<FeedbackReducer>((set, get) => ({
  openDialogRangeFeedback: false,
  rate: 0,

  setOpenDialogRangeFeedback: () => {
    const { openDialogRangeFeedback } = get();

    set({ openDialogRangeFeedback: !openDialogRangeFeedback });
  },

  setRating: (rate: number) => {
    set({ rate: rate });
  },
}));
