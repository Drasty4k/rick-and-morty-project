import styled from "styled-components";

interface Props {
  bgColor: string | null;
}

export const CardContainer = styled.div<Props>`
  background: ${(props) => props.bgColor};
  border-radius: 15px;
  text-align: center;
  height: 414px;
  position: relative;
  transition: all 0.5s;
  &:hover {
    filter: brightness(1.07);
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 90%;
  margin-top: 10px;
  border-radius: 50%;
`;

export const Name = styled.h4`
  background: #5cc300;
  width: 63%;
  margin: 0 auto;
  border-radius: 15px;
  padding: 4px 0;
  flex-direction: column;
  position: relative;
  top: 4px;
`;

export const Gender = styled.span`
  background-color: #ff6c6c;
  padding: 3px 11px;
  border-radius: 0 15px 0 15px;
  margin: 0 auto 0 auto;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const Status = styled.p`
  font-size: 18px;
`;

export const rainbow = "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%);";
