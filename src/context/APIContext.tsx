import * as React from "react";
import APIContext from "./context";
import { Character } from "./types";

interface Props {
  children: React.ReactElement;
}

const APIContextProvider: React.FC<Props> = ({ children }) => {
  const [characters, setCharacters] = React.useState<Character[]>([]);

  const API_URL = `https://rickandmortyapi.com/api/character`;

  const getCharacters = async () => {
    fetch(API_URL)
      .then(async (response) => {
        const data = await response.json();
        setCharacters(data.results);
      })
      .catch((err) => console.error(err));
  };

  React.useEffect(() => {
    getCharacters();
  }, []);

  return (
    <APIContext.Provider
      value={{characters}}
    >
      {children}
    </APIContext.Provider>
  );
};

export default APIContextProvider;
