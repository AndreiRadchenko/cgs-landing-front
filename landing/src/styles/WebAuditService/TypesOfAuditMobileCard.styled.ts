import styled from "styled-components";
import themes from "../../utils/themes";

export const TypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  gap: 2.3em;

  @media ${themes.primary.media.maxMobile} {
    gap: 0.5em;
  }
`;

export const TypeTitle = styled.div`
  font-size: 2em;
  line-height: 160%;
  color: ${themes.primary.colors.darkBlue};

  @media ${themes.primary.media.maxMobile} {
    text-transform: uppercase;
  }
`;

export const TypeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
`;

export const TypeText = styled.p`
  font-size: 1rem;
  line-height: 160%;
  max-width: 100%;
  white-space: pre-line;
  margin: 0;
`;
