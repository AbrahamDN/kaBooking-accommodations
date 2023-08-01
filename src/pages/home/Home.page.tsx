import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import { accommodations } from "../../data/accommodation.json";
import Layout from "../../layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <main className="container">
        <h1>Accommodation Booking Website</h1>

        {accommodations.map((room) => (
          <Link key={room.id} to={`/room/${room.id}`}>
            <Card room={room} />
          </Link>
        ))}
      </main>
    </Layout>
  );
};

export default HomePage;
