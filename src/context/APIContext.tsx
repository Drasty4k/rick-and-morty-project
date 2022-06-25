import * as React from "react";
import APIContext from "./context";
import { Character, Details } from "./types";

interface Props {
  children: React.ReactElement;
}

const APIContextProvider: React.FC<Props> = ({ children }) => {
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [name, setName] = React.useState<string>("");
  const [status, setStatus] = React.useState<string>("");
  const [species, setSpecies] = React.useState<string>("");
  const [type, setType] = React.useState<string>("");
  const [gender, setGender] = React.useState<string>("");

  const API_URL = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}`;

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
  }, [status, species, type, gender]);

  React.useEffect(() => {
    if (name.length === 0) {
      getCharacters();
    }
  }, [name]);

  const getDetails = (detail: Details,event: React.ChangeEvent<HTMLSelectElement>) => {
    switch (detail) {
      case "status":
        setStatus(event.target.value);
        break;
      case "species":
        setSpecies(event.target.value);
        break;
      case "type":
        setType("")
        break;
      case "genders":
        setGender(event.target.value);
        break;
      default:
        return null;
    }
  };

  const updateCharacters = (value: Character[]) => {
    setCharacters(value);
  };

  const getName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <APIContext.Provider
      value={{
        characters,
        updateCharacters,
        getDetails,
        getName,
        name,
        status,
        species,
        type,
        gender
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export default APIContextProvider;
