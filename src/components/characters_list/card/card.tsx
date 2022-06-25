import * as React from "react";
import { Link } from "react-router-dom";
import { CardContainer, Image } from "./styles";

interface Props {
  id: number;
  name: string;
  avatar: string;
  status: string;
}

const Card: React.FC<Props> = ({ id, name, avatar, status }) => {
  return (
    <Link to={`/${id}`}>
      <CardContainer>
        <h4>{name}</h4>
        <Image src={avatar} alt={`${name} avatar`} />
        <p>Status: {status}</p>
      </CardContainer>
    </Link>
  );
};

export default Card;
