import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocks};
`;

export const Subtitle = styled.h2`
  font-size: 40px;
  line-height: 140%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  column-gap: 110px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 39.5%;
  height: 306px;
`;

export const TextWrapper = styled.div`
  font-size: 2em;
  line-height: 160%;
`;
