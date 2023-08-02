import "./RoomBooking.styles.css";
import { default as cn } from "classnames";
import { RoomBookingProps } from "./RoomBooking.types.ts";
// import { useRoomStore } from "../../store/room.store";
// import { formatCurrencyString } from "../../lib/formatCurrencyString";

const RoomBooking = ({ className }: RoomBookingProps) => {
  // const { bed } = useRoomStore();
  // const room = mockBed || bed;

  return (
    <article className={cn("room-booking", className)}>
      <div className="">
        {/* <span className="h6">
          {room?.price
            ? formatCurrencyString({
                val: 100,
                currency: room.price.currency_iso_code,
              })
            : "Unavailable"}
        </span> */}
        <span className="caption"> /night</span>
      </div>
    </article>
  );
};

export default RoomBooking;
