import * as React from "react";
import APIContext from "../../context/context";
import Card from "./card";

const CharactersList: React.FC = () => {
  const { characters } = React.useContext(APIContext);

  return (
    <div>
      {characters.map((character, index) => (
        <Card
          key={index}
          name={character.name}
          avatar={character.image}
          status={character.status}
        />
      ))}
    </div>
  );
};

export default CharactersList;
