import { spin } from "./../../styles/animations";
import styled from "styled-components";
import themes from "../../utils/themes";

export const Button = styled.button`
  outline: none;
  width: 190px;
  margin-top: 1rem;
  padding: 1rem 2rem;
  height: 55px;
  border-radius: 2rem;
  border: 0;
  position: relative;
  cursor: pointer;
  text-transform: lowercase;
  background: ${themes.primary.colors.allGreen};
  font-size: ${themes.primary.font.size.tertiary};
  font-weight: ${themes.primary.font.weight.bold};
  box-shadow: 0 0 0 0.625rem ${themes.primary.colors.purpleBack},
    0 0 0 0.6875rem ${themes.primary.colors.allGreen};
`;

export const Dot = styled.div`
  position: absolute;
  height: 10px;
  width: 10px;
  background: ${themes.primary.colors.allGreen};
  border-radius: 50px;
  top: 0em;
`;

export const DotWrapp = styled.div`
  height: 85px;
  width: 85px;
  top: -15px;
  left: -15px;
  display: flex;
  justify-content: center;
  position: absolute;
  animation: ${spin} 6s linear 0s infinite;
  animation-delay: ${(props) => props.theme};
`;
