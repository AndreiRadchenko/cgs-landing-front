import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin: 0 1.95em 0 0;
`;

export const BlockWrapper = styled.div`
  margin-top: 4.67em;
  padding-top: 1em;
  display: flex;
  justify-content: space-between;
`;

export const Block = styled.div`
  max-width: 33.2em;
  position: relative;
  &:first-child {
    & > img {
      top: 14.83em;
      left: 17.67em;
    }
  }
  &:nth-child(2) {
    & > img {
      top: 3.83em;
      left: 22.3em;
    }
    & > div {
      p {
        margin-top: 6.35em;
      }
    }
  }
  :not(:last-child) {
    padding-left: 1.25em;

    & > p {
      max-width: 19.5em;
    }
  }
`;

export const TitleWrapper = styled.div`
  position: relative;
`;

export const Title = styled.p`
  margin: 0;
  margin-left: 1.67em;
  font-size: ${themes.primary.font.size.secondary};
  line-height: 160%;
`;

export const BlockText = styled.p`
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;
  margin: 1.28em 0 0 0;
  max-width: 21.95em;
`;

export const Svg = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateX(-50%);
`;

export const Image = styled.img`
  position: absolute;
`;
