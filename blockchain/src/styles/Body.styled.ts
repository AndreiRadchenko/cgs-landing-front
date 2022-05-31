import styled from "styled-components";
import themes from "../utils/themes";

export const BodyContainer = styled.section`
  @media ${themes.primary.media.maxMobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const WelcomeBlockWrapper = styled.div`
  color: ${themes.primary.colors.textColor};
  font-family: ${themes.primary.font.family.goldman};
  display: flex;
  padding: 0 4rem;
  width: 100%;

  @media ${themes.primary.media.maxLaptop} {
    padding: 0 2rem;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 0;
  }
  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
  }
`;

export const WrapperBgImg = styled.div`
  position: relative;
  width: 700px;
  height: 600px;

  @media ${themes.primary.media.maxMobile} {
    transform: translateY(-15%);
    top: 0;
    left: -23%;
    width: 150%;
    height: 600px;
  }
`;

export const TextBlock = styled.div`
  width: fit-content;
  margin-top: 12rem;
  @media ${themes.primary.media.maxMobile} {
    margin-top: 0;
    transform: translateY(-40%);
  }
`;

export const Title = styled.h2`
  font-size: ${themes.primary.font.size.bigTitle};
  margin: 0;
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.tabletTitle};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 4.2rem;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 3rem;
  }
`;

export const Subtitle = styled.div`
  font-size: ${themes.primary.font.size.secondary};
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.tabletHeader};
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.secondary};
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: ${themes.primary.font.size.oneAndHalf};
  }
`;

export const BottomText = styled.div`
  margin: 1rem 0;
  font-family: ${themes.primary.font.family.montserrat};
  font-weight: ${themes.primary.font.weight.light};
  font-size: ${themes.primary.font.size.oneAndHalf};

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.tertiary};
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.oneAndHalf};
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: ${themes.primary.font.size.tertiary};
  }
`;

export const Bold = styled.span`
  font-weight: ${themes.primary.font.weight.semiBold};
`;
