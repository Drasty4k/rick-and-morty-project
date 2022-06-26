import * as React from "react";
import APIContext from "../../../context/context";
import { Button } from "./styles";

const ResetButton: React.FC = () => {
  const { handleReset } = React.useContext(APIContext);

  return (
    <Button onClick={handleReset}>Reset</Button>
  );
};

export default ResetButton;
