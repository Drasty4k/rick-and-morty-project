import styled from "styled-components";

export const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 28%;
  color: #fff;
  margin: auto;
  text-align: center;
  background-color: #ffb4c1;
  border-radius: 15px;
  margin-top: 50px;
  padding: 20px 30px 30px 30px;
`;

export const Name = styled.h1`
  margin-top: 0;
`;

export const Image = styled.img`
  width: 70%;
  margin: auto;
  border-radius: 50%;
`;

export const Detail = styled.p`
  font-size: 18px;
  background-color: purple;
  padding: 5px 6px;
  width: 60%;
  margin: 10px auto 0 auto;
  border-radius: 15px;
`;

export const Episodes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3px;
  margin-top: 20px;
`;

export const Episode = styled.span`
  list-style-type: none;
  background-color: darkblue;
  padding: 3px;
  border-radius: 6px;
`;
