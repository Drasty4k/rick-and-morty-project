import * as React from "react";
import image404 from './assets/404.jpg'
import { Image, NotFoundContainer, Title } from "./styles";

const NotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <Title>Character not found</Title>
      <Image src={image404} alt="Character not found" />
    </NotFoundContainer>
  );
};

export default NotFound;
