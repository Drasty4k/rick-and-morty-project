import * as React from "react";
import { Container, Ripple, SecondRipple, Wrapper } from "./styles";


const Loading: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Ripple />
        <SecondRipple />
      </Container>
    </Wrapper>
  );
};

export default Loading;
