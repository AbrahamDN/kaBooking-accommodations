import "./Card.styles.css";

import Markup from "../Markup/Markup.tsx";
import { CardProps } from "./Card.types.ts";
import { Hotel } from "lucide-react";

const Card = ({
  room: { name, description, images, type, facilities },
}: CardProps) => {
  return (
    <article className="card">
      <div className="card__image">
        <img
          src={images[0].filename}
          alt={images[0].alt}
          className="card__img"
        />
      </div>

      <h3 className="h5 card__name">{name}</h3>

      <Markup className="card__desc" markup={description} />

      <div className="card__type">
        <Hotel /> <span>{type.name}</span>
      </div>

      <ul className="card__facilities">
        {facilities.slice(0, 3).map((facility) => (
          <li key={facility.id} className="facility">
            {facility.label}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Card;
