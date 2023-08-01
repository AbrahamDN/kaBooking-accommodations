import { create } from "zustand";

type Selected = "location" | "dates" | "guests";

interface SearchState {
  expand: boolean;
  selected: Selected;
  setExpand: (bool: boolean) => void;
  setSelected: (key: Selected) => void;
  toggleExpand: () => void;
}

export const useSearchStore = create<SearchState>()((set) => ({
  expand: false,
  selected: "location",
  setExpand: (bool) => set(() => ({ expand: bool })),
  setSelected: (key) => set(() => ({ selected: key })),
  toggleExpand: () => set((state) => ({ expand: !state.expand })),
}));
