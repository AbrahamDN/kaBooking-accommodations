import "./Home.styles.css";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import { accommodations } from "../../data/accommodation.json";
import Layout from "../../layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <main className="page container">
        <div className="page-header">
          <h1 className="h4 title">Your Australia Accommodation</h1>
          <p className="standfirst">
            Discover Your Perfect Stay: Explore a Diverse Range of Australian
            Accommodations - from Stunning Coastal Resorts to Charming Outback
            Retreats. Find Your Ideal Escape and Uncover the Beauty of Australia
          </p>
        </div>

        <section className="accoms">
          {accommodations.map((room) => (
            <Link key={room.id} to={`/room/${room.id}`}>
              <Card room={room} />
            </Link>
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
