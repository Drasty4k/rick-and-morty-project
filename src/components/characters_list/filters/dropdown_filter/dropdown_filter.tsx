import * as React from "react";
import APIContext from "../../../../context/context";
import { Details } from "../../../../context/types";
import { DropdownContainer, Title } from "./styles";

interface Props {
  details: string[];
  title: Details;
  value: string;
}

const DropdownFilter: React.FC<Props> = ({ title, details, value }) => {
  const { getDetails } = React.useContext(APIContext);

  return (
    <DropdownContainer>
      <Title>{title}</Title>
      <select
        value={value}
        title={title}
        onChange={(event) => getDetails(title, event)}
      >
        <option value="">All</option>
        {details.map((el, index) => (
          <option key={index} value={el}>{el}</option>
        ))}
      </select>
    </DropdownContainer>
  );
};

export default DropdownFilter;
