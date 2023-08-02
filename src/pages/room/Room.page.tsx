import "./Room.styles.css";

import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { accommodations } from "../../data/accommodation.json";

import RoomDetail from "../../components/roomDetail/RoomDetail";
import RoomBooking from "../../components/roomBooking/RoomBooking";
import Layout from "../../layout/Layout";
import Markup from "../../components/Markup/Markup";
import RoomNotFoundPage from "./RoomNotFound.page";
import RoomBox from "../../components/roomBox/RoomBox";
import Slider from "../../components/slider/Slider";
import { useRoomStore } from "../../store/room.store";
import { Room } from "../../types/accommodation.types";

const RoomPage = () => {
  const { setBed } = useRoomStore();
  const [searchParams, setSearchParams] = useSearchParams({});
  const params = useParams();
  const roomId = parseInt(params.id!);
  const room = accommodations.find((room) => room.id === roomId);

  const selectBed = (newBed: Room) => {
    if (!newBed) return;
    setBed(newBed);
    setSearchParams({ bed: `${newBed.id}` });
  };

  useEffect(() => {
    if (room && searchParams) {
      const bedId = parseInt(searchParams.get("bed")!) || 0;
      const selectedBed = room.rooms[bedId];
      if (selectedBed) setBed(selectedBed);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                    <RoomBox
                      key={item.id}
                      className="slide"
                      room={item}
                      onClick={() => selectBed(item)}
                    />
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
