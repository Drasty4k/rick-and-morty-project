import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #b5dcff;
  border-radius: 15px;
  text-align: center;
  height: 100%;
  transition: all 0.5s;
  &:hover {
    filter: brightness(1.06);
  }
`;

export const Image = styled.img`
  width: 90%;
  margin-top: 10px;
  border-radius: 50%;
`;
