import * as React from "react";
import APIContext from "../../../context/context";
import { Input } from "./styles";

const Search: React.FC = () => {
  const { updateCharacters, getName, name, status, species, type, gender } = React.useContext(APIContext);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const timeout = React.useRef<NodeJS.Timeout>();

  const handleDebounceSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeout.current);

    getName(event);

    if (!inputRef.current?.value.trim()) return;

    const API_URL = `https://rickandmortyapi.com/api/character/?name=${inputRef?.current?.value}&status=${status}&species=${species}&type=${type}&gender=${gender}`;

    timeout.current = setTimeout(() => {
      fetch(API_URL)
        .then(async (response) => {
          const data = await response.json();
          updateCharacters(data.results);
        })
        .catch((err) => console.error(err));
    }, 300);
  };

  return (
    <div>
      <Input
        value={name}
        ref={inputRef}
        onChange={handleDebounceSearch}
        placeholder="Search Characters"
        type="text"
      />
    </div>
  );
};

export default Search;
