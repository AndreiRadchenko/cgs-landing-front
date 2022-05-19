import styled from "styled-components";
import themes from "../utils/themes";

export const LeftSideBlock = styled.div`
  position: relative;
`;

export const RightSideBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${themes.primary.spacing.horizontalGap};
  row-gap: ${themes.primary.spacing.verticalGap};
  padding-top: ${themes.primary.spacing.tertiary};
  position: relative;
`;

export const hoverBlock = styled.div`
  &:hover div {
    cursor: pointer;
    border: 5px solid ${themes.primary.colors.allGreen};
  }
`;

export const Block = styled.div`
  z-index: 1;
  display: flex;
  background: ${themes.primary.colors.purpleBack};
  border: 1px solid ${themes.primary.colors.textColor};
  position: relative;
  justify-content: center;
  align-items: center;
  height: 10.5em;
  font-size: ${themes.primary.font.size.oneAndHalf};
  font-weight: 600;
  font-family: ${themes.primary.font.family.montserrat};
  color: ${themes.primary.colors.textColor};
  padding: 1.6em;
  white-space: pre-line;
  & p {
    text-align: center;
  }
`;

export const Number = styled.div`
  display: flex;
  border: 1px solid ${themes.primary.colors.allGreen};
  position: absolute;
  justify-content: center;
  align-items: center;
  top: -1px;
  left: -1px;
  width: 2.2em;
  height: 2.2em;
  font-weight: 700;
  font-size: 0.9em;
  font-family: ${themes.primary.font.family.sourceCode};
`;

export const greenText = styled.span`
  color: ${themes.primary.colors.allGreen};
`;

export const LineThrough = styled.div`
  border-top: 1px solid ${themes.primary.colors.textColor};
  width: 100%;
  position: absolute;
  top: ${(props) => props.theme + "em"};
`;

export const BlockImageWrapper = styled.div`
  position: absolute;
  width: 110%;
  top: 4.6em;
  right: -3em;
`;
