import * as React from "react";
import { useParams } from "react-router-dom";
import { Character } from "../../context/types";

const CharacterDetails: React.FC = () => {
  const [character, setCharacter] = React.useState<Character | null>(null);
  const { id } = useParams();

  const API_URL_WITH_ID = `https://rickandmortyapi.com/api/character/${id}`;

  React.useEffect(() => {
    const getCharacterDetails = () => {
      fetch(API_URL_WITH_ID)
        .then(async (response) => {
          const data = await response.json();
          setCharacter(data);
        })
        .catch((err) => console.error(err));
    };
    getCharacterDetails();
  }, [API_URL_WITH_ID]);

  return (
    <div>
      <h4>{character?.name}</h4>
      <img src={character?.image} alt={`${character?.name} avatar`} />
      <p>Status: {character?.status}</p>
      <p>Species: {character?.species}</p>
      <p>Gender: {character?.gender}</p>
      <p>Origin: {character?.origin.name}</p>
      <p>Location: {character?.location.name}</p>
      <p>Episodes:</p>
      <div>
        {character?.episode.map((ep, index) => (
          <span key={index}>{ep.split("/")[5]}</span>
        ))}{" "}
      </div>
    </div>
  );
};

export default CharacterDetails;
