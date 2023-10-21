import { Event } from "@/types/response/event";
import { create } from "zustand";

export interface EventsReducer {
  events: Event[];
  event: Event | null;
  dialogEvent: boolean;
  setEvents: (events: Event[] | undefined) => void;
  setOpenDialogEvent: (event: Event | null, isOpen: boolean) => void;
}

export const useEventsStore = create<EventsReducer>((set, get) => ({
  events: [],
  event: null,
  dialogEvent: false,

  setEvents: (events: Event[] | undefined) => {
    set({ events: events });
  },
  setOpenDialogEvent: (event: Event | null, isOpen: boolean) => {
    set({ event: event, dialogEvent: isOpen });
  },
}));
