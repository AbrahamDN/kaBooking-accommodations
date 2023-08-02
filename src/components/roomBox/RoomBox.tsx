import "./RoomBox.styles.css";
import { RoomBoxProps } from "./RoomBox.types";
import { default as cn } from "classnames";
import { rooms as rooms_available } from "../../data/accommodation_availability.json";
import RoomBoxIcon from "./RoomBoxIcon";

const RoomBox = ({ className, flex, room }: RoomBoxProps) => {
  const roomAvailability = rooms_available.find((item) => item.id === room.id);

  return (
    <article className={cn("room-box", flex && "flex", className)}>
      <RoomBoxIcon
        max={room.max_occupancy}
        available={Boolean(roomAvailability)}
      />

      <h4 className="room-box__title">{room.name}</h4>

      {roomAvailability && (
        <div className="room-box__available">
          <span>{roomAvailability?.available} available, </span>
          <span>{roomAvailability?.available} total</span>
        </div>
      )}

      <span className="room-box__occupants">
        {" "}
        {room.max_occupancy} occupants
      </span>
    </article>
  );
};
export default RoomBox;
