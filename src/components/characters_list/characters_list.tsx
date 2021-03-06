import * as React from "react";
import APIContext from "../../context/context";
import Card from "./card";
import Filters from "./filters";
import NotFound from "./not_found";
import ResetButton from "./reset_button";
import Search from "./search";
import { CharactersSection, FiltersSection, Wrapper } from "./styles";

const CharactersList: React.FC = () => {
  const { characters } = React.useContext(APIContext);

  return (
    <Wrapper>
      <FiltersSection>
        <Search />
        <Filters />
        <ResetButton />
      </FiltersSection>
      <CharactersSection>
        {characters ? characters.map((character, index) => (
          <Card
            key={index}
            id={character.id}
            name={character.name}
            avatar={character.image}
            status={character.status}
            gender={character.gender}
          />
        )) : <NotFound />}
      </CharactersSection>
    </Wrapper>
  );
};

export default CharactersList;
