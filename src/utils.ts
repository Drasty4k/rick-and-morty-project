import { rainbow } from "./components/characters_list/card/styles";
import { GenderType } from "./context/types";

export const getBgColor = (gender: GenderType | undefined) => {
  switch (gender) {
    case "Female":
      return {
        container: "#ffb4c1",
        text: "#fd8398",
      };
    case "Male":
      return {
        container: "#68baff",
        text: "#2c9af3",
      };
    case "Genderless":
      return {
        container: rainbow,
        text: "#ffe9e9",
      };
    case "unknown":
      return {
        container: "#e5e5e5",
        text: "#b3b3b3",
      };
    default:
      return {
        container: null,
        text: null,
      };
  }
};
