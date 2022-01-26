import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.form`
  position: relative;
  margin: 0 3em 3em 3em;
  width: 100%;
  height: 100%;
  z-index: 2;
  font-family: ${themes.primary.font.family.roboto};
`;

export const Title = styled.h2`
  font-size: 36px;
  margin: 0.6em 0;
`;

export const ContentWrapper = styled.div`
  width: 80%;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
`;
