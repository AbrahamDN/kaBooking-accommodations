import { RoomDetailProps } from "./RoomDetail.types.ts";
import "./RoomDetail.styles.css";
import { Star, Hotel, MapPin } from "lucide-react";

const RoomDetail = ({ room }: RoomDetailProps) => {
  const locations = [
    room.address_1,
    room.address_2,
    room.address_3,
    room.postcode,
  ].filter(Boolean);
  const location = locations.toString().replace(/,(?=[^\s])/g, ", ");

  const Divider = () => <span className="divider">·</span>;

  return (
    <div className="room">
      <h2 className="h4 room-name">{room.name}</h2>

      <div className="room-details">
        <div className="rating item">
          <Star />
          <span>
            {parseFloat(room.rating.label)} <span>stars</span>
          </span>
        </div>
        <Divider />
        <div className="type item">
          <Hotel /> <span>{room.type.name}</span>
        </div>
        <Divider />
        <div className="location item">
          <MapPin /> <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
