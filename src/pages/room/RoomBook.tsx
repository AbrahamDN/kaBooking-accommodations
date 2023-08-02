import "./RoomBook.styles.css";
import { formatCurrencyString } from "../../lib/formatCurrencyString";
import { useRoomStore } from "../../store/room.store";

const RoomBook = () => {
  const { bed } = useRoomStore();

  return (
    <article className={"room-booking"}>
      <div>
        <span className="h6">
          {bed?.price
            ? formatCurrencyString({
                val: bed.price.value,
                currency: bed.price.currency_iso_code,
              })
            : "Unavailable"}
        </span>
        <span className="caption"> /night</span>
      </div>
    </article>
  );
};
export default RoomBook;
