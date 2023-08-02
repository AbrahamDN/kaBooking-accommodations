import "./RoomBox.styles.css";
import { RoomBoxProps } from "./RoomBox.types";
import { default as cn } from "classnames";
import { rooms as rooms_available } from "../../data/accommodation_availability.json";
import RoomBoxIcon from "./RoomBoxIcon";
import { useRoomStore } from "../../store/room.store";

const RoomBox = ({ className, flex, onClick, room }: RoomBoxProps) => {
  const { bed } = useRoomStore();
  const roomAvailability = rooms_available.find((item) => item.id === room.id);
  const selected = bed?.id === room.id;

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    const enterOrSpace =
      e.key === "Enter" ||
      e.key === " " ||
      e.key === "Spacebar" ||
      e.which === 13 ||
      e.which === 32;
    if (enterOrSpace) {
      e.preventDefault();
      onClick && onClick();
    }
  };

  return (
    <article
      className={cn(
        "room-box",
        flex && "flex",
        selected && "selected",
        className
      )}
      data-selected={selected}
      onClick={onClick}
      tabIndex={0}
      role="button"
      onKeyDown={onKeyDown}
    >
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
