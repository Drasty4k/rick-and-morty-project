import * as React from "react";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  name: string;
  avatar: string;
  status: string;
}

const Card: React.FC<Props> = ({ id, name, avatar, status }) => {
  return (
    <Link to={`/${id}`}>
      <div>
        <h4>{name}</h4>
        <img src={avatar} alt={`${name} avatar`} />
        <p>Status: {status}</p>
      </div>
    </Link>
  );
};

export default Card;
