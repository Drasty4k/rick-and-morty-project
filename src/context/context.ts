import * as React from "react";
import { Character } from "./types";

interface APIContextI {
  characters: Character[];
  updateCharacters: (value: Character[]) => void;
}

const defaulstState = {
  characters: [],
  updateCharacters: (value: Character[]) => {},
};

const APIContext = React.createContext<APIContextI>(defaulstState);

export default APIContext;
