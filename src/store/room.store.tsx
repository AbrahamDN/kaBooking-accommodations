import { create } from "zustand";
import { Room } from "../types/accommodation.types.ts";

interface RoomState {
  bed: Room | undefined;
  setBed: (newBed: Room) => void;
}

export const useRoomStore = create<RoomState>()((set) => ({
  bed: undefined,
  setBed: (newBed) => set(() => ({ bed: newBed })),
}));
