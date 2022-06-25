import * as React from "react";
import { useParams } from "react-router-dom";
import { Character } from "../../context/types";
import { CharacterContainer, Detail, Episode, Episodes, Image, Name } from "./styles";

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
    <CharacterContainer>
      <Name>{character?.name}</Name>
      <Image src={character?.image} alt={`${character?.name} avatar`} />
      <Detail>Status: {character?.status}</Detail>
      <Detail>Species: {character?.species}</Detail>
      <Detail>Gender: {character?.gender}</Detail>
      <Detail>Origin: {character?.origin.name}</Detail>
      <Detail>Location: {character?.location.name}</Detail>
      <Detail>Episodes:</Detail>
      <Episodes>
        {character?.episode.map((ep, index) => (
          <Episode key={index}>{ep.split("/")[5]}</Episode>
        ))}{" "}
      </Episodes>
    </CharacterContainer>
  );
};

export default CharacterDetails;
