import { create } from "zustand";

interface HeaderState {
  expandHeader: boolean;
  setExpandHeader: (bool: boolean) => void;
}

export const useHeaderStore = create<HeaderState>()((set) => ({
  expandHeader: false,
  setExpandHeader: (bool) => set(() => ({ expandHeader: bool })),
}));
