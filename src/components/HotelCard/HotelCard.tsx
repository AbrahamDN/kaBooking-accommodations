import React from "react";
import { HotelCardProps } from "./HotelCard.types";

const HotelCard = ({ hotel }: HotelCardProps) => {
  return (
    <div className="hotel-card">
      <h2>{hotel.name}</h2>
      <p>{hotel.description}</p>
      {/* Add other hotel information here */}
    </div>
  );
};

export default HotelCard;
