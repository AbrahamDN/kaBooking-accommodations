// RoomBooking.js
import "./RoomBooking.styles.css";
import { default as cn } from "classnames";
import { RoomBookingProps } from "./RoomBooking.types";
import { useRoomStore } from "../../store/room.store";
import { formatCurrencyString } from "../../lib/formatCurrencyString";

const RoomBooking = ({ className }: RoomBookingProps) => {
  const { bed } = useRoomStore();

  return (
    <article className={cn("room-booking", className)}>
      <div className="">
        <span className="h6">
          {bed?.price
            ? formatCurrencyString({
                val: bed?.price?.value,
                currency: bed.price.currency_iso_code,
              })
            : "Unavailable"}
        </span>
        <span className="caption"> /night</span>
      </div>
    </article>
  );
};

export default RoomBooking;
