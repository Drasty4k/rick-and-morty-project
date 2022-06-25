import * as React from "react";
import APIContext from "../../../context/context";
import DropdownFilter from "./dropdown_filter";

const Filters: React.FC = () => {
  const { status, species, gender, type } = React.useContext(APIContext);

  const allStatus = ["Alive", "Dead", "Unknown"];
  const allSpecies = ["Human", "Alien", "Humanoid", "Poopybutthole", "Mythological", "Unknown", "Animal", "Disease", "Robot", "Cronenberg",];
  const allGenders = ["Female", "Male", "Genderless", "Unknown"];
  const allTypes = [""];

  return (
    <div>
      <DropdownFilter details={allStatus} title="status" value={status} />
      <DropdownFilter details={allSpecies} title="species" value={species} />
      <DropdownFilter details={allGenders} title="genders" value={gender} />
      <DropdownFilter details={allTypes} title="type" value={type} />
    </div>
  );
};

export default Filters;
