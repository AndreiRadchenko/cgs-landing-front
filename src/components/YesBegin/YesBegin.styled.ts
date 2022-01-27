import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.secondary};
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 25%;
`;

export const Title = styled.h2`
  font-size: 4em;
  width: 60%;
  text-align: center;
  margin: 0;
`;

export const SubTitle = styled.h4`
  font-size: 2em;
  font-weight: 400;
  text-align: center;
  margin: 1em 0 0 0;
`;

export const ButtonContainer = styled.div`
  position: relative;
  font-family: ${themes.primary.font.family.sourceCode};
`;

export const ImageContainer = styled.div`
  position: absolute;
  width: 10em;
  height: 13em;
  right: -6.5em;
  bottom: -5.8em;
  z-index: 10;
`;
