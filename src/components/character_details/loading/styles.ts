import styled, { keyframes } from "styled-components";

const rippleAnimation = keyframes`
 0% {
    top: 150px;
    left: 150px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 150px;
    left: 150px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 150px;
    left: 150px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 300px;
    height: 300px;
    opacity: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 300px;
  height: 300px;
`;

export const Ripple = styled.div`
  position: absolute;
  border: 4px solid #7fea1f;
  opacity: 1;
  border-radius: 50%;
  animation: ${rippleAnimation} 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`;

export const SecondRipple = styled.div`
  position: absolute;
  border: 4px solid #7fea1f;
  opacity: 1;
  border-radius: 50%;
  animation: ${rippleAnimation} 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  animation-delay: -0.5s;
`;
