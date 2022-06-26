import styled from "styled-components";

interface Props {
  bgColor?: string | null;
}

export const CharacterContainer = styled.div<Props>`
  background: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  max-width: 33rem;
  color: #fff;
  margin: 2vh auto;
  text-align: center;
  border-radius: 15px;
  padding: 20px 30px 30px 30px;
  color: #1f1f9b;
`;

export const Name = styled.h1<Props>`
  background: ${(props) => props.bgColor};
  margin-top: 0;
  border-radius: 15px;
`;

export const Image = styled.img`
  width: 70%;
  margin: auto;
  border-radius: 50%;
`;

export const Detail = styled.p<Props>`
  background: ${(props) => props.bgColor};
  font-size: 18px;
  padding: 5px 20px;
  margin: 10px auto 0 auto;
  border-radius: 15px;
`;

export const EpisodesContainer = styled.div<Props>`
  background: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  border-radius: 15px;
  margin: 10px auto;
  padding: 0 18px 15px 18px;
  text-align: center;
`;

export const Episodes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3px;
  margin-top: 10px;
`;

export const Episode = styled.span<Props>`
  background: ${(props) => props.bgColor};
  list-style-type: none;
  padding: 3px;
  border-radius: 7px;
  border: 1px solid;
`;
