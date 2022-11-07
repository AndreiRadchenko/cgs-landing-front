import styled, {css} from "styled-components";
import themes from "../../utils/themes";
import {slideRight} from "../Animations.styled";
import {ISlide} from "../../types/Decoration.types";

export const ItemWrapper = styled.div<ISlide>`
    display: flex;
  align-items: center;
  position: relative;
  &.scrolled {
    opacity: 0;
    animation: ${({ ind }) => css`
        ${slideRight} 1.5s ${ind * 120}ms forwards
      `};
  }
`;

export const Indention = styled.div`
  height: 25px;
  width: 25px;
  position: relative;
  background: linear-gradient(90deg, ${themes.primary.colors.mainGradientColor1} 13.67%,
  ${themes.primary.colors.mainGradientColor2} 90.39%);
  border: 1.23px solid ${themes.primary.colors.primary};
  box-shadow: 7px 2px 0 ${themes.primary.colors.primary};
  transform: rotate(45deg);
  margin-right: 20px;
  z-index: 2;
`;

export const IndentionBranch = styled.div`
  position: absolute;
  width: 50px;
  border-top: 2px solid ${themes.primary.colors.headerBorder} ;
  top: 11.5px;
  left: -40px;
  z-index: 1;
`

export const IndentionWrapper = styled.div`
position: relative;
`

export const Text = styled.p`
    font-size: 1.73em;
  line-height: 120%;
`;