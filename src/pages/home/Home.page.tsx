import { Link } from "react-router-dom";
import HotelCard from "../../components/hotelCard/HotelCard";
import { accommodations } from "../../data/accommodation.json";
import Layout from "../../layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <main className="container">
        <h1>Hotel Booking Website</h1>

        {accommodations.map((hotel) => (
          <Link key={hotel.id} to={`/room/${hotel.id}`}>
            <HotelCard hotel={hotel} />
          </Link>
        ))}
      </main>
    </Layout>
  );
};

export default HomePage;
