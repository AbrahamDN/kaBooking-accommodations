import { HotelCardProps } from "./HotelCard.types";

const HotelCard = ({ hotel }: HotelCardProps) => {
  return (
    <div className="hotel-card">
      <h3 className="h5">{hotel.name}</h3>
      <p>{hotel.description}</p>
      {/* Add other hotel information here */}
    </div>
  );
};

export default HotelCard;
