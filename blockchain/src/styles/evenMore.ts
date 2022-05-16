import styled from "styled-components";
import themes from "../utils/themes";

export const LeftSideBlock = styled.div`
  position: relative;
`;

export const RightSideBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.6em;
  row-gap: 1em;
  padding-top: 2em;
  position: relative;
`;

export const hoverBlock = styled.div`
  &: hover div{
    cursor: pointer;
    border: 5px solid #90e645;
  }
`;

export const Block = styled.div`
  z-index: 1;
  display: flex;
  background: #322262;
  border: 1px solid #fff;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 10.5em;
  font-size: 1.5em;
  font-weight: 600;
  font-family: ${themes.primary.font.family.montserrat};
  color: #fff;
  padding: 1.6em;
  white-space: pre-line;
  & p {
    text-align: center;
  }
`;

export const Number = styled.div`
  display: flex;
  border: 1px solid #90e645;
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
  color: #90e645;
`;

export const LineThrough = styled.div`
  border-top: 1px solid #fff;
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
