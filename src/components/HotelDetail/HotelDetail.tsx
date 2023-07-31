import React from "react";
import { HotelDetailProps } from "./HotelDetail.types";

const HotelDetail = ({ hotel }: HotelDetailProps) => {
  return (
    <div className="hotel-card">
      <h2>{hotel.name}</h2>
      <p>{hotel.description}</p>
      {/* Add other hotel information here */}
    </div>
  );
};

export default HotelDetail;
