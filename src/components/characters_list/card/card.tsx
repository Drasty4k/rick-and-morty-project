import * as React from "react";
import { Link } from "react-router-dom";
import { CardContainer, Gender, Image, Name, rainbow, Status } from "./styles";

interface Props {
  id: number;
  name: string;
  avatar: string;
  status: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
}

const Card: React.FC<Props> = ({ id, name, avatar, status, gender }) => {

  const getBgColor = () => {
    switch (gender) {
      case "Female":
        return "#ffb4c1";
      case "Male":
        return "#68baff";
      case "Genderless":
        return rainbow;
      case "unknown":
        return "#e5e5e5";
      default:
        return null;
    }
  };

  return (
    <Link style={{ textDecoration: "none" }} to={`/${id}`}>
      <CardContainer bgColor={getBgColor()}>
        <Name>{name}</Name>
        <Image src={avatar} alt={`${name} avatar`} />
        <Gender>Gender: {gender}</Gender>
        <Status>Status: {status}</Status>
      </CardContainer>
    </Link>
  );
};

export default Card;
