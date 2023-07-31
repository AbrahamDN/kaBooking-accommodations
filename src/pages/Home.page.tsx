import HotelCard from "../components/HotelCard";
import { accommodations } from "../data/accommodation.json";

const HomePage = () => {
  return (
    <div>
      <h1>Hotel Booking Website</h1>

      {accommodations.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HomePage;
