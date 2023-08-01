import { CardProps } from "./Card.types.ts";

const Card = ({ room }: CardProps) => {
  return (
    <div className="room-card">
      <h3 className="h5">{room.name}</h3>
      <p>{room.description}</p>
      {/* Add other room information here */}
    </div>
  );
};

export default Card;
