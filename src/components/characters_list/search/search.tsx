import * as React from "react";
import APIContext from "../../../context/context";
import { Input } from "./styles";

const Search: React.FC = () => {
  const { updateCharacters, getName, name } = React.useContext(APIContext);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const timeout = React.useRef<NodeJS.Timeout>();

  const handleDebounceSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeout.current);

    getName(event);

    if (!inputRef.current?.value.trim()) return;

    timeout.current = setTimeout(() => {
      fetch(`https://rickandmortyapi.com/api/character/?name=${inputRef?.current?.value}`)
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
