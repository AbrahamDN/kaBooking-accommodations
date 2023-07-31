import HotelCard from "../../components/hotelCard/HotelCard";
import { accommodations } from "../../data/accommodation.json";

const HomePage = () => {
  return (
    <main className="container">
      <h1>Hotel Booking Website</h1>

      {accommodations.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </main>
  );
};

export default HomePage;
