import styled from "styled-components";
import themes from "../../utils/themes";
import { infiniteText } from "./Animations.styled";

export const AboutUsContainer = styled.div`
  margin-top: 70px;
  font-family: ${themes.primary.font.family.namu};
  background-color: ${themes.primary.colors.blogBackground};
  min-height: 88vh;
  position: relative;
  @media ${themes.primary.media.maxLowestScreenMobile} {
    margin-top: 50px;
  }
`;

export const DescriptionContainer = styled.div`
  margin-bottom: 47px;
  @media ${themes.primary.media.maxTabletLandScape} {
    margin-bottom: 30px;
  }
  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 50px;
  }
  @media ${themes.primary.media.maxLowestScreenMobile} {
    margin-bottom: 40px;
  }
`;

export const MainTitle = styled.div`
  font-size: 5em;
  text-transform: uppercase;
  line-height: 120%;
  margin-bottom: 20px;
  span {
    color: ${themes.primary.colors.darkBlue};
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 4.5em;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 4.5em;
  }
  @media ${themes.primary.media.maxTablet} {
    font-size: 5.5em;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 4.5em;
  }
  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 70px;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 4em;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    font-size: 3.5em;
    margin-bottom: 50px;
  }
`;

export const Subtitle = styled.div`
  font-size: ${themes.primary.font.size.aboutUsSubtitle};
  font-weight: ${themes.primary.font.weight.heavy};
  margin-bottom: 15px;
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.smallAboutSubtitle};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 3.5em;

    &:first-child {
      margin-top: 0px;
    }
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    font-size: 2.8em;
  }
`;

export const Text = styled.div`
  font-size: ${themes.primary.font.size.aboutUsBelieveText};
  line-height: 160%;
  margin-top: 20px;
  width: 89%;

  p {
    margin-bottom: 0;
    &:first-child {
      margin: 0;
    }
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.headerLinkText};
    margin-top: 13px;
    width: 95%;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 90%;
    font-size: 1.6em;
    margin-top: 20px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 85%;
  }
`;

export const BottomImage = styled.img`
  position: absolute;
  width: 40%;
  bottom: 50px;
  right: 0;

  @media ${themes.primary.media.maxMobile} {
    width: 110%;
    left: -20%;
    transform: rotate(-4.51deg);
    bottom: 70px;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    left: -22%;
    width: 120%;
  }

  @media (min-width: 2000px) {
    bottom: 100px;
  }
`;

export const BonusContainer = styled.div`
  align-items: center;
  margin-top: 2px;
  &:first-child {
    margin-top: 0;
  }
`;

export const BonusWrapper = styled.div`
  @media ${themes.primary.media.maxMobile} {
    width: 85%;
  }
`;

export const BonusText = styled.div`
  font-size: 1.35em;
  line-height: 160%;

  @media ${themes.primary.media.maxPCFullHD} {
    font-size: 1.35em;
  }
  @media ${themes.primary.media.maxLaptop} {
    font-size: 1.3em;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.3em;
  }

  @media ${themes.primary.media.maxMobile} {
    max-width: 100%;
    font-size: 1.6em;
  }
`;

export const MainImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  z-index: 2;
  margin-left: -12%;
  @media ${themes.primary.media.minPC} {
    margin-left: -12%;
    width: 110%;
  }
  @media ${themes.primary.media.onlyTabletLandScape} {
    margin-left: -17%;
    width: 120%;
  }
  @media ${themes.primary.media.onlyTabletPortrait} {
    margin-left: -14%;
    width: 110%;
  }
  @media ${themes.primary.media.maxMobile} {
    margin-left: -5%;
    width: 110%;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-left: -7%;
    width: 115%;
  }
`;

export const MainImage = styled.img`
  position: relative;
  width: 100%;
  height: auto;
  z-index: 2;
`;

export const TeamLine = styled.img`
  width: 100%;
`;

export const MovingText = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: 20px;
  overflow: hidden;
  margin-top: -1.2em;
  width: 99%;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  z-index: -5;
  background: linear-gradient(
    61.63deg,
    ${themes.primary.colors.mainGradientColor1} 0%,
    ${themes.primary.colors.mainGradientColor2} 100%
  );
  border: 2px solid ${themes.primary.colors.primary};
  height: 2em;
  display: flex;
  align-items: center;
  background-size: cover;
  @media ${themes.primary.media.maxMobile} {
    margin-top: -3vw;
  }

  & > span {
    animation: ${infiniteText} 40s infinite linear;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 25px;
  }
  @media ${themes.primary.media.onlyPC} {
    font-size: 20px;
  }
  @media (min-width: 1800px) {
    font-size: 2em;
  }
  @media (min-width: 1500px) and (max-width: 2000px) {
    font-size: 1.6em;
  }
  @media (min-width: 1300px) and (max-width: 1400px) {
    font-size: 1.5em;
  }
  @media ${themes.primary.media.onlyTabletLandScape} {
    font-size: 1.1em;
  }
  @media ${themes.primary.media.onlyTabletPortrait} {
    font-size: 1.1em;
  }
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 52%;
  grid-template-rows: 1fr 1.17fr;
  row-gap: 180px;
  position: relative;
  margin-right: -3.5%;
  margin-top: 50px;
  overflow: clip;
  overflow-clip-margin: 100px;

  @media ${themes.primary.media.maxMobile} {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    position: relative;
    row-gap: 38px;
    padding: 496px 0 554px;
    margin: 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
    row-gap: 12vw;
    grid-template-rows: auto;
    padding-bottom: 10vw;
  }

  @media (min-width: 2400px) {
    row-gap: 16vw;
    padding-bottom: 12vw;
  }
`;

export const RowContainer = styled.div`
  padding-left: 30px;
  display: flex;
  column-gap: 5vw;
  position: relative;

  @media ${themes.primary.media.minPC} {
    column-gap: 6.5vw;
  }
  
  @media ${themes.primary.media.maxMobile} {
    &.wrapper {
      align-items; center;
      flex-direction: column;
    }
    padding-left: 0px;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    padding-left: 0px;
  }
`;

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  &.second {
    margin-left: -5px;
    width: 70%;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 60%;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;

    &.first,
    &.second {
      margin: 0;
      width: 100%;
    }
    &.first {
      margin-bottom: 70px;
    }
  }
`;

export const OurBonuses = styled.div`
  padding: 0 0 210px;

  @media ${themes.primary.media.minPC} {
    padding-bottom: 280px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-top: 0;
    padding-bottom: 320px;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    padding-bottom: 280px;
  }

  @media (min-width: 2000px) {
    padding-bottom: 500px;
  }
`;

export const BonusesContainer = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 53.2% 43%;
  column-gap: 80px;

  @media ${themes.primary.media.minPCFullHD} {
    grid-template-columns: 53.5% 43%;
  }

  @media ${themes.primary.media.maxMobile} {
    grid-template-columns: 1fr;
    margin-top: 20px;
    row-gap: 12px;
    div {
      font-size: 1.6em;
    }
  }
`;
