// RoomBooking.js
import { useState } from "react";

const RoomBooking = () => {
  const [numNights, setNumNights] = useState(5);
  // const [roomType, setRoomType] = useState("");

  // Implement booking logic here

  return (
    <article className="room-booking">
      <h3>Room Booking</h3>
      <label>
        Number of Nights:
        <input
          type="number"
          value={numNights}
          onChange={(e) => setNumNights(parseInt(e.target.value))}
        />
      </label>
      {/* Add room type selection and booking confirmation here */}
    </article>
  );
};

export default RoomBooking;
