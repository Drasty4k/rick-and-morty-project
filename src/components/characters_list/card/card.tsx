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
        return {
          container: "#ffb4c1",
          text: "#fd8398",
        };
      case "Male":
        return {
          container: "#68baff",
          text: "#2c9af3",
        };
      case "Genderless":
        return {
          container: rainbow,
          text: "#fff",
        };
      case "unknown":
        return {
          container: "#e5e5e5",
          text: "#b3b3b3",
        };
      default:
        return {
          container: null,
          text: null,
        };
    }
  };

  return (
    <Link style={{ textDecoration: "none" }} to={`/${id}`}>
      <CardContainer bgColor={getBgColor().container}>
        <Name bgColor={getBgColor().text}>{name}</Name>
        <Image src={avatar} alt={`${name} avatar`} />
        <Gender bgColor={getBgColor().text}>Gender: {gender}</Gender>
        <Status bgColor={getBgColor().text}>Status: {status}</Status>
      </CardContainer>
    </Link>
  );
};

export default Card;
