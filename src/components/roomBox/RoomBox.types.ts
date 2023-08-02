import { Room } from "../../types/accommodation.types";

export type RoomBoxProps = {
  className?: string;
  flex?: boolean;
  room: Room;
};

export type RoomBoxIconProps = {
  max: number;
  available?: boolean;
};
