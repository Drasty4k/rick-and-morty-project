import * as React from "react";
import { Character, Details } from "./types";

interface APIContextI {
  characters: Character[];
  updateCharacters: (value: Character[]) => void;
  getDetails: (detail: Details, event: React.ChangeEvent<HTMLSelectElement>) => void;
  status: string;
  species: string;
  type: string;
  gender: string;
}

const defaulstState = {
  characters: [],
  updateCharacters: (value: Character[]) => {},
  getDetails: (detail: Details, event: React.ChangeEvent<HTMLSelectElement>) => {},
  status: "",
  species: "",
  type: "",
  gender: ""
};

const APIContext = React.createContext<APIContextI>(defaulstState);

export default APIContext;
