import HotelCard from "../../components/hotelCard/HotelCard";
import { accommodations } from "../../data/accommodation.json";
import Layout from "../../layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <main className="container">
        <h1>Hotel Booking Website</h1>

        {accommodations.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </main>
    </Layout>
  );
};

export default HomePage;
