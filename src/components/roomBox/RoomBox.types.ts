import { Room } from "../../types/accommodation.types.ts";

export type RoomBoxProps = {
  className?: string;
  flex?: boolean;
  onClick?: () => void;
  room: Room;
};

export type RoomBoxIconProps = {
  max: number;
  available?: boolean;
};
