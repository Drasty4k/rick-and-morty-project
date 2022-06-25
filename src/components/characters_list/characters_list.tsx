import * as React from "react";
import APIContext from "../../context/context";
import Card from "./card";
import Search from "./search";

const CharactersList: React.FC = () => {
  const { characters } = React.useContext(APIContext);

  return (
    <div>
      <Search />
      {characters.map((character, index) => (
        <Card
          key={index}
          id={character.id}
          name={character.name}
          avatar={character.image}
          status={character.status}
        />
      ))}
    </div>
  );
};

export default CharactersList;
