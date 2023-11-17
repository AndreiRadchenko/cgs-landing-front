import styled from "styled-components";
import themes from "../../../utils/themes";

interface IRightArrow {
  isRight: boolean;
}

export const ArrowContainer = styled.span`
  position: relative;
  overflow: hidden;
  flex-grow: 1;
  display: flex;
  height: 1em;
  background-color: ${themes.primary.colors.portfolioBg};
`;

export const ArrowHead = styled.span<IRightArrow>`
  position: absolute;
  z-index: 1;
  ${(props) => (props.isRight ? "right: 0;" : "left: 0;")}
  ${(props) => (props.isRight ? "top: 53%;" : "top: 50%;")}
  transform: translateY(-50%);
  width: 1em;
  height: 1em;
  background-color: ${themes.primary.colors.portfolioBg};
`;

export const ArrowShaft = styled.span<IRightArrow>`
  position: absolute;
  width: 100%;
  z-index: 2;
  ${(props) => (props.isRight ? "right: 3px;" : "left: 2px;")}
  ${(props) => (props.isRight ? "top: 53%;" : "top: 50%;")}
  transform: translateY(-1.5px);
  height: ${(props) => (props.isRight ? "2px;" : "3px;")};
  background-color: black;
  @media ${themes.primary.media.maxLaptop} {
    transform: translateY(-1px);
    height: 2px;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    transform: translateY(-0.75px);
    height: 1px;
  }
  @media ${themes.primary.media.maxMobile} {
    transform: translateY(-1.5px);
    height: 3px;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    transform: translateY(-0.75px);
    height: 1px;
  }
`;
