import * as React from "react";
import { Link } from "react-router-dom";
import { GenderType } from "../../../context/types";
import { getBgColor } from "../../../utils";
import { CardContainer, Gender, Image, Name, Status } from "./styles";

interface Props {
  id: number;
  name: string;
  avatar: string;
  status: string;
  gender: GenderType;
}

const Card: React.FC<Props> = ({ id, name, avatar, status, gender }) => {

  return (
    <Link style={{ textDecoration: "none" }} to={`/${id}`}>
      <CardContainer bgColor={getBgColor(gender).container}>
        <Name bgColor={getBgColor(gender).text}>{name}</Name>
        <Image src={avatar} alt={`${name} avatar`} />
        <Gender bgColor={getBgColor(gender).text}>Gender: {gender}</Gender>
        <Status bgColor={getBgColor(gender).text}>Status: {status}</Status>
      </CardContainer>
    </Link>
  );
};

export default Card;
