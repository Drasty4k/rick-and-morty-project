import * as React from "react";
import { useParams } from "react-router-dom";
import { Character } from "../../context/types";
import { getBgColor } from "../../utils";
import Loading from "./loading";
import { CharacterContainer, Detail, Episode, Episodes, EpisodesContainer, Image, Name } from "./styles";

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

  if (!character) return <Loading />

  return (
    <CharacterContainer bgColor={getBgColor(character?.gender).container}>
      <Name bgColor={getBgColor(character?.gender).text}>{character?.name}</Name>
      <Image src={character?.image} alt={`${character?.name} avatar`} />
      <Detail bgColor={getBgColor(character?.gender).text}>Status: {character?.status}</Detail>
      <Detail bgColor={getBgColor(character?.gender).text}>Species: {character?.species}</Detail>
      <Detail bgColor={getBgColor(character?.gender).text}>Gender: {character?.gender}</Detail>
      <Detail bgColor={getBgColor(character?.gender).text}>Origin: {character?.origin.name}</Detail>
      <Detail bgColor={getBgColor(character?.gender).text}>Location: {character?.location.name}</Detail>
      <EpisodesContainer bgColor={getBgColor(character?.gender).text}>
        <Detail>Episodes:</Detail>
        <Episodes>
          {character?.episode.map((ep, index) => (
            <Episode key={index} bgColor={getBgColor(character?.gender).text}>{ep.split("/")[5]}</Episode>
          ))}{" "}
        </Episodes>
      </EpisodesContainer>
    </CharacterContainer>
  );
};

export default CharacterDetails;
