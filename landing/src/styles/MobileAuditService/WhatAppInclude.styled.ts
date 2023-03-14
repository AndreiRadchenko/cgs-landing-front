import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  margin-top: 12.5em;
  position: relative;
  height: 805px;

  @media ${themes.primary.media.maxMobile} {
    margin: 0;
    margin-bottom: 3.5em;
    padding-top: 1.75em;
    height: auto;
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 1000px;
  }
`;

export const Title = styled.h2`
  font-weight: inherit;
  font-size: 2.5em;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 1em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.45em;
    line-height: 132%;
    width: 15em;
    margin-bottom: 0.6em;
    margin-left: -5px;
  }
`;

export const GradientLineContainer = styled.div`
  position: relative;
  height: 79%;
  @media ${themes.primary.media.maxMobile} {
    height: 60%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    left: -6%;
  }
`;

export const GradientLine = styled.div`
  position: absolute;
  height: 100%;
  width: 24px;
  background: linear-gradient(
    0deg,
    ${themes.primary.colors.mainGradientColor1} 13.67%,
    ${themes.primary.colors.mainGradientColor2} 90.39%
  );
  border: 1px solid ${themes.primary.colors.primary};
  box-shadow: 7px 2px 0px ${themes.primary.colors.primary};

  @media ${themes.primary.media.minPCFullHD} {
    width: 1.6em;
  }
`;

export const SubtitlesList = styled.div`
  margin-left: 14px;
  height: 97%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${themes.primary.media.maxTabletPortrait} {
    padding-top: 1.5em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 12px;
  }
`;

export const ListItem = styled.div`
  display: flex;
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 29px;

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.25em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column;
  }
`;

export const ListText = styled.span`
  position: relative;

  @media ${themes.primary.media.minPCFullHD} {
    line-height: 140%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-left: 3.5em;
  }
  @media ${themes.primary.media.maxMobile} {
    margin-block: 5px 1.69em;
    font-size: 1.34em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-left: 3em;
    & br {
      display: none;
    }
  }
`;

export const PointWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 37px;

  @media ${themes.primary.media.maxTabletPortrait} {
    &.subtext {
      display: none;
    }
  }
`;

export const PointLine = styled.div`
  width: 70px;
  border-bottom: 1px solid ${themes.primary.colors.primary};

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 60px;
  }
`;

export const PointCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${themes.primary.colors.bigDigit};
  border: 1px solid ${themes.primary.colors.primary};
  box-shadow: 7px 2px 0px ${themes.primary.colors.primary};
`;

export const GlassContainer = styled.div`
  position: absolute;
  right: 20%;
  bottom: 0;
  width: 421px;
  height: 415px;

  @media (max-width: 1250px) {
    right: 15%;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 321px;
    height: 315px;
    bottom: 10%;
    right: 1em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 271px;
    height: 265px;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    bottom: 0;
    right: 0;
    margin-top: 51px;
    margin-inline: auto;
    height: 300px;
    width: 70%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 327px;
    width: 100%;
  }
`;

export const SubtextContainer = styled.div`
  position: absolute;
  top: 23px;
  right: -43%;
  display: flex;

  @media ${themes.primary.media.minPCFullHD} {
    top: 16px;
    right: -33%;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    top: 19px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    position: relative;
    top: 0;
    right: 0;
    margin-top: 0.5em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 10px;
  }
`;

export const ConectLine = styled.div`
  width: 69px;
  height: 98px;
  border-style: solid;
  border-color: ${themes.primary.colors.primary};
  border-width: 1px 1px 0 0;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 29px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    display: none;
  }
`;

export const SubtextPointLine = styled.div`
  width: 70px;
  border-bottom: 1px solid ${themes.primary.colors.primary};
`;

export const Subtext = styled.div`
  top: -40%;
  left: 90%;
  text-transform: none;
  white-space: nowrap;
  position: absolute;
  font-size: 0.92em;

  @media ${themes.primary.media.minPCFullHD} {
    top: -60%;
    font-size: 0.8em;
    line-height: normal;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    top: 0;
    left: 0;
    position: relative;
    font-size: 0.75em;
    line-height: 20px;
    white-space: pre-wrap;
    max-width: 80%;
    margin-bottom: 0.5em;

    & br {
      display: none;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 0.8em;
    line-height: 19px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    max-width: none;
  }
`;

export const SubtextWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
`;

export const SubtextContentWrapper = styled.div`
  margin-top: -5.5px;
  margin-bottom: -5.5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: -6px;
  }

  @media (min-width: 2190px) {
    margin-top: -5.5px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin: 0;
  }
`;
