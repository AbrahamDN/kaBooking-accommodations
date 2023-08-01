import { useLocation } from "react-router-dom";
import RoomDetail from "../../components/roomDetail/RoomDetail";
import RoomBooking from "../../components/roomBooking/RoomBooking";
import { accommodations } from "../../data/accommodation.json";
import Layout from "../../layout/Layout";
import Markup from "../../components/Markup/Markup";
import "./Room.styles.css";
import RoomNotFoundPage from "./RoomNotFound.page";

const RoomPage = () => {
  const location = useLocation();
  // Get the room id from the URL
  const roomId = parseInt(location.pathname.split("/").pop()!);
  const room = accommodations.find((room) => room.id === roomId);

  if (!room) return <RoomNotFoundPage />;

  return (
    <Layout>
      <main className="page container">
        <RoomDetail room={room} />

        <div className="content">
          <section className="desc__wrapper">
            <h3 className="h5 subtitle">About this place</h3>
            <Markup className="desc" markup={room.description} />
          </section>
        </div>

        <aside className="sidebar">
          <RoomBooking />
        </aside>
      </main>
    </Layout>
  );
};

export default RoomPage;
