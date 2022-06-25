import * as React from "react";
import { Link } from "react-router-dom";
import { CardContainer, Image, Name } from "./styles";

interface Props {
  id: number;
  name: string;
  avatar: string;
  status: string;
}

const Card: React.FC<Props> = ({ id, name, avatar, status }) => {
  return (
    <Link style={{ textDecoration: "none" }} to={`/${id}`}>
      <CardContainer>
        <Name>{name}</Name>
        <Image src={avatar} alt={`${name} avatar`} />
        <p>Status: {status}</p>
      </CardContainer>
    </Link>
  );
};

export default Card;
