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
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;
  padding-top: 1.65em;
  }

  & span {
    &:nth-child(1) {
      color: ${themes.primary.colors.mainGradientColor2};
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
      font-size: 1.1em;
      line-height: 160%;
      padding-top: 1em;
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

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-left: 9%;
    padding-right: 5%;
  }
`;

export const BgImage = styled.img`
  position: absolute;
  left: -11em;

  @media ${themes.primary.media.minPC} {
    left: -15em;
    width: 140%;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    left: -7.5em;
    width: 125%;
  }

}
`;
