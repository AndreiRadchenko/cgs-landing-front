import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 28em;
  position: relative;
`;

export const Subtitle = styled.h2`
  margin: 0;
  font-size: 2.835em;
  text-transform: uppercase;
  width: fit-content;

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.quaternary};
  }
`;

export const TextContent = styled.div`
  font-size: 1.5em;
  line-height: 160%;
  padding-top: 1.65em;
  }

  & span {
    &:nth-child(1) {
    color: #5869DD;
    }
  }
`;

export const ContentWrapper = styled.div`
  padding-left: 9.7%;
  padding-right: 6.7%;
  display: flex;
  justify-content: space-between;

  @media ${themes.primary.media.minPC} {
    padding-left: 6%;
    padding-right: 0;
  }
`;

export const BgImage = styled.img`
  position: absolute;
  left: -11em;

  @media ${themes.primary.media.minPC} {
    left: -15em;
    width: 140%;
  }
`;
