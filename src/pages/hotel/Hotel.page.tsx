import { useLocation } from "react-router-dom";
import HotelDetail from "../../components/hotelDetail/HotelDetail";
import RoomBooking from "../../components/roomBooking/RoomBooking";
import { accommodations } from "../../data/accommodation.json";

const HotelPage = () => {
  const location = useLocation();
  // Get the hotel id from the URL
  const hotelId = location.pathname.split("/").pop();
  const hotel = accommodations.find((hotel) => hotel.id === parseInt(hotelId!));

  if (!hotel) {
    return <div>Hotel not found.</div>;
  }

  return (
    <main className="container">
      <HotelDetail hotel={hotel} />
      <RoomBooking />
    </main>
  );
};

export default HotelPage;
