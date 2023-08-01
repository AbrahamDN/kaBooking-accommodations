import { HotelCardProps } from "./HotelCard.types.ts";

const HotelCard = ({ room }: HotelCardProps) => {
  return (
    <div className="room-card">
      <h3 className="h5">{room.name}</h3>
      <p>{room.description}</p>
      {/* Add other room information here */}
    </div>
  );
};

export default HotelCard;
