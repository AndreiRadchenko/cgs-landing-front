import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${themes.primary.colors.primary};
`;

export const Title = styled.h2`
  font-size: 5em;
  text-align: center;
  margin: 0;
`;

export const SubTitle = styled.h4`
  font-size: 3em;
  text-align: center;
  margin: 1em 0 0 0;
`;

export const ButtonContainer = styled.div`
  position: relative;
`;

export const ImageContainer = styled.div`
  position: absolute;
  width: 6em;
  height: 7.2em;
  right: -4em;
  bottom: -1.9em;
  z-index: -1;
`;
