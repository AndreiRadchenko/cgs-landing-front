import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 12em;
`;

export const ContentWrapper = styled.div`
  margin-top: 4.5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 3em;
`;

export const TextBlock = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-basis: 30%;

  &:nth-child(4) {
    justify-content: flex-end;
  }

  &:nth-child(5) {
    justify-content: flex-start;
  }

  &:nth-child(4) {
    flex-basis: 43%;
  }

  &:nth-child(5) {
    flex-basis: 45%;
  }
`;

export const BigDigit = styled.div`
  font-size: 80px;
  line-height: 96px;
  color: ${themes.primary.colors.bigDigit};
  -webkit-text-stroke: 1.6px ${themes.primary.colors.primary};
  text-shadow: 7px 2px 0px ${themes.primary.colors.primary};
  margin-right: 22px;
`;

export const TextContent = styled.div`
  font-size: 1.83em;
  line-height: 160%;
  margin-bottom: 0.25em;
`;
