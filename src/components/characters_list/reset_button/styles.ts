import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  top: 11px;
  margin-top: 10px;
  padding: 6px 43px;
  border-radius: 15px;
  border: none;
  outline: none;
  font-size: 15px;
  background: #7fea1f;
  color: #171b1f;
  font-weight: bold;
  letter-spacing: 1px;
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    transform: scale(1.06);
    filter: brightness(0.9);
  }
`;
