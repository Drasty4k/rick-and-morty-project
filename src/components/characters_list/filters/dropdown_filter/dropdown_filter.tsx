import * as React from "react";
import APIContext from "../../../../context/context";
import { Details } from "../../../../context/types";

interface Props {
  details: string[];
  title: Details;
  value: string;
}

const DropdownFilter: React.FC<Props> = ({ title, details, value }) => {
  const { getDetails } = React.useContext(APIContext);

  return (
    <div>
      <h4>{title}</h4>
      <select
        value={value}
        title={title}
        onChange={(event) => getDetails(title, event)}
      >
        <option value="">All</option>
        {details.map((el) => (
          <option value={el}>{el}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownFilter;
