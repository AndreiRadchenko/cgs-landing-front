import styled from "styled-components";
import themes from "../utils/themes";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #f7f7f7;
  z-index: 33;

  @media (min-width: 1401px) {
    display: none;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 650px;
  height: 600px;
  margin: 0 auto;
`;

export const TextContent = styled.span`
  display: block;
  font-family: ${themes.primary.font.family.sourceCode};
  font-size: ${themes.primary.font.size.tertiary};
  padding: 0.5em 1em;
  text-align: center;
`;
