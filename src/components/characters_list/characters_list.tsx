import * as React from "react";
import APIContext from "../../context/context";

const CharactersList: React.FC = () => {
  const { characters } = React.useContext(APIContext);

  return (
    <div>
      {characters.map((character, index) => (
        <div key={index}>
          <p>{character.name}</p>
          <img src={character.image} alt={`${character.name} avatar`} />
          <p>{character.status}</p>
        </div>
      ))}
    </div>
  );
};

export default CharactersList;
