import { spin, spinMobile } from "./../../styles/animations";
import styled from "styled-components";
import themes from "../../utils/themes";

export const Button = styled.button`
  color: black;
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
  font-size: ${themes.primary.font.size.vistaco};
  font-weight: ${themes.primary.font.weight.bold};
  box-shadow: 0 0 0 0.625rem ${themes.primary.colors.purpleBack},
    0 0 0 0.6875rem ${themes.primary.colors.allGreen};

  @media ${themes.primary.media.maxLaptop} {
    font-size: ${themes.primary.font.size.laptopButton};
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.vistaco};
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    width: 180px;
    height: 45px;
    padding: 0;
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.laptopButton};
    width: 180px;
    height: 45px;
    padding: 0;
  }
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

  @media ${themes.primary.media.maxTabletPortrait} {
    height: 75px;
    width: 75px;
    animation: ${spinMobile} 6s linear 0s infinite;
    animation-delay: ${(props) => props.theme};
  }
`;
