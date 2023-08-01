import { RoomDetailProps } from "./RoomDetail.types.ts";
import "./RoomDetail.styles.css";
import { Star, Hotel, MapPin } from "lucide-react";

const RoomDetail = ({ hotel }: RoomDetailProps) => {
  const locations = [
    hotel.address_1,
    hotel.address_2,
    hotel.address_3,
    hotel.postcode,
  ].filter(Boolean);
  const location = locations.toString().replace(/,(?=[^\s])/g, ", ");

  const Divider = () => <span className="divider">·</span>;

  return (
    <div className="room">
      <h2 className="h4 room-name">{hotel.name}</h2>

      <div className="room-details">
        <div className="rating item">
          <Star />
          <span>
            {parseFloat(hotel.rating.label)} <span>stars</span>
          </span>
        </div>
        <Divider />
        <div className="type item">
          <Hotel /> <span>{hotel.type.name}</span>
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
