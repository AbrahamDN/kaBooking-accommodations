import { RoomBoxIconProps } from "./RoomBox.types";
import { BedDouble, BedSingle, Bed } from "lucide-react";

const RoomBoxIcon = ({ max, available }: RoomBoxIconProps) => {
  if (max > 1) {
    if (available) return <BedDouble />;
    return <Bed />;
  }
  return <BedSingle />;
};

export default RoomBoxIcon;
