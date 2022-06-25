import * as React from "react";

interface Props {
  name: string;
  avatar: string;
  status: string;
}

const Card: React.FC<Props> = ({ name, avatar, status }) => {
  return (
    <div>
      <h4>{name}</h4>
      <img src={avatar} alt={`${name} avatar`} />
      <p>Status: {status}</p>
    </div>
  );
};

export default Card;
