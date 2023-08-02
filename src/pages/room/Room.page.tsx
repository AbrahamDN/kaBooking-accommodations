import "./Room.styles.css";

import { useLocation } from "react-router-dom";
import { accommodations } from "../../data/accommodation.json";

import RoomDetail from "../../components/roomDetail/RoomDetail";
import RoomBooking from "../../components/roomBooking/RoomBooking";
import Layout from "../../layout/Layout";
import Markup from "../../components/Markup/Markup";
import RoomNotFoundPage from "./RoomNotFound.page";
import RoomBox from "../../components/roomBox/RoomBox";
import Slider from "../../components/slider/Slider";

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

        <div className="content__container">
          <div className="content">
            <section className="desc__wrapper">
              <h2 className="h5 subtitle">Room info</h2>

              <section className="beds">
                <h3 className="h6 beds__title">Where you'll sleep</h3>

                <Slider>
                  {room.rooms.map((item) => (
                    <RoomBox key={item.id} className="slide" room={item} />
                  ))}
                </Slider>
              </section>

              <section className="facilities">
                <h3 className="h6 facilities__title">Facilities</h3>
                <ul className="facilities__list">
                  {room.facilities.map((facility) => (
                    <li key={facility.id} className="facilities__list-item">
                      <span className="name">{facility.label}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </section>

            <section className="desc__wrapper">
              <h2 className="h5 subtitle">About this place</h2>

              <Markup markup={room.description} />
            </section>
          </div>

          <aside className="sidebar">
            <RoomBooking />
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default RoomPage;
