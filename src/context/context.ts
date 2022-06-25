import * as React from "react";
import { Character } from "./types";

interface APIContextI {
  characters: Character[];
}

const defaulstState = {
  characters: []
};

const APIContext = React.createContext<APIContextI>(defaulstState);

export default APIContext;
