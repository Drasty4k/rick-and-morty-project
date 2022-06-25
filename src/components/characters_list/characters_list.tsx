import * as React from "react";
import APIContext from "../../context/context";
import Card from "./card";
import Filters from "./filters";
import Search from "./search";
import { CharactersSection, FiltersSection, Wrapper } from "./styles";

const CharactersList: React.FC = () => {
  const { characters } = React.useContext(APIContext);

  return (
    <Wrapper>
      <FiltersSection>
        <Search />
        <Filters />
      </FiltersSection>
      <CharactersSection>
        {characters.map((character, index) => (
          <Card
            key={index}
            id={character.id}
            name={character.name}
            avatar={character.image}
            status={character.status}
          />
        ))}
      </CharactersSection>
    </Wrapper>
  );
};

export default CharactersList;
