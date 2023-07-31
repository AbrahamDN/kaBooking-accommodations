import { useLocation } from "react-router-dom";
import HotelDetail from "../components/HotelDetail";
import RoomBooking from "../components/RoomBooking";
import { accommodations } from "../data/accommodation.json";

const HotelPage = () => {
  const location = useLocation();
  // Get the hotel id from the URL
  const hotelId = location.pathname.split("/").pop();
  const hotel = accommodations.find((hotel) => hotel.id === parseInt(hotelId!));

  if (!hotel) {
    return <div>Hotel not found.</div>;
  }

  return (
    <div>
      <HotelDetail hotel={hotel} />
      <RoomBooking />
    </div>
  );
};

export default HotelPage;
