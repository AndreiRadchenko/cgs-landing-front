import styled from "styled-components";
import themes from "../../utils/themes";

interface IFontSize {
  size: string;
  padding: string;
}

export const RowContainer = styled.div`
  display: flex;
`;

export const ContentContainer = styled.div`
  background-color: ${themes.primary.colors.blogBackground};
  padding: 38px 51px 90px;
  font-family: ${themes.primary.font.family.namu};
  button {
    border: none;
    outline: none;
    border-radius: 0;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 50px 50px 70px;
  }
`;

export const LocalLayout = styled.div`
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.2rem;
  }

  @media (min-width: 2200px) {
    font-size: 1.4rem;
  }
`;
export const ButtonArrow = styled.img`
  position: absolute;
  right: -14px;
  top: -14px;
  width: 36px;
  height: 36px;
`;

export const BlackButton = styled.a<IFontSize>`
  font-family: inherit;
  font-size: ${({ size }) => size};
  padding: ${({ padding }) => padding};
  cursor: pointer;
  position: relative;
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.primary};
  line-height: 99%;
  display: inline-block;

  &.footer {
    margin-top: 10px;
    height: 4vw;
    margin-left: 20px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding: 0.8em 1em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 14px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 1.25rem 1.375rem;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    &.seeAll {
      padding: 0.75rem 0.625rem;

      & > div {
        width: 25px;
        height: 25px;
      }
    }
  }

  & path {
    transition: transform 1s ease-in-out;
  }
  & path:nth-child(1) {
    transform: translate(-36px, 36px);
  }
  &:hover {
    & path:nth-child(1) {
      transform: translate(0px, 0px);
    }
    & path:nth-child(2) {
      transform: translate(36px, -36px);
    }
  }
`;

export const Title = styled.h1`
  font-size: ${themes.primary.font.size.homeHeader};
  letter-spacing: 0.045em;
  line-height: 132%;
  text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000,
    0.5px 0.5px 0 #000;
  margin: 0;
  white-space: nowrap;
  @media ${themes.primary.media.onlyTabletLandScape} {
    font-size: ${themes.primary.font.size.homeHeaderTablet};
  }
  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.homeHeaderPc};
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: ${themes.primary.font.size.homeHeaderPcHd};
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 76px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 5.2em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 15vw;
  }
`;

export const MainSubtitle = styled.div`
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.homeMainSubtitle};
  line-height: 99%;
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  margin: 28px 0 40px;

  @media (max-width: 1320px) {
    margin-top: ${themes.primary.spacing.small};
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 20px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1.25em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 4.3vw;
    margin: 10px 0 35px;
  }
`;

export const RightArrow = styled.img`
  display: inline-block;
  margin: 0 10px;
  width: 115px;
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 88px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 10.4vw;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin: 0 5px;
  }
`;

export const LeftArrow = styled.img`
  display: inline-block;
  width: 142px;
  margin-left: 10px;
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 108px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 14.1vw;
  }
`;

export const LongArrow = styled.img`
  display: inline-block;
  margin-left: auto;
  width: 30vw;

  @media ${themes.primary.media.minLaptop} {
    margin-left: 10px;
    width: 20vw;
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: 524px;
  }
  @media (max-width: 1360px) {
    width: 35vw;
  }
  @media (max-width: 1370px) {
    width: 28vw;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-left: 10px;
    width: 22vw;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-left: 0;
    margin-right: 5px;
    width: 110px;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    width: 28vw;
  }
`;

export const HeadBlockContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 8.75em;
  z-index: 2;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 0;
  }
`;

export const Tetris = styled.img`
  position: absolute;
  width: 33.7%;
  right: 122px;

  @media ${themes.primary.media.minPCFullHD} {
    top: 80px;
    width: 28em;
  }
  @media (max-width: 1400px) {
    right: 70px;
  }
  @media (max-width: 1320px) {
    right: 40px;
    top: 40px;
    width: 370px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    top: 50px;
    width: 33.7%;
  }
  @media ${themes.primary.media.maxMobile} {
    top: 0;
    right: 0;
    position: relative;
    width: auto;
    transform: scale(0.9);
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    transform: none;
    width: 101.74%;
  }
`;

export const HeadBlockRow = styled(RowContainer)`
  margin-top: 38px;
  width: 100%;

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    align-items: center;
    row-gap: 43px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-top: 0.75rem;
  }
`;

export const Subtitle = styled.div`
  text-transform: uppercase;
  font-size: 5.14vw;
  letter-spacing: 0.05em;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin: 32px 0 40px;

  & u {
    text-decoration-thickness: 3px;
    text-underline-offset: 7px;
  }

  &.footer {
    margin-top: ${themes.primary.spacing.tertiary};
    margin-bottom: 171px;
    line-height: 132%;
    display: inline-block;
    vertical-align: middle;
  }
  span {
    &.blue {
      color: ${themes.primary.colors.darkBlue};
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 5em;
  }

  @media (max-width: 1370px) {
    &.small {
      font-size: 4.5vw;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 4.75vw;

    &.small {
      font-size: 4.4vw;
    }
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 4vw;

    &.small {
      font-size: 3.75vw;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 6.5vw;
    row-gap: 0px;

    & u {
      text-decoration-thickness: 1px;
      text-underline-offset: 5px;
    }

    &.small {
      margin-top: 0;
      font-size: 5vw;
      margin-bottom: 14px;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 1.75rem;
    &.small {
      line-height: 132%;
      font-size: 2rem;
      display: inline-block;
      white-space: nowrap;
    }
    &.small div {
      flex-wrap: wrap;
    }

    &.footer {
      margin-top: 110px;
      font-size: 2rem;
      margin-bottom: 100px;
    }
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    font-size: 1.475rem;
    &.small {
      line-height: 132%;
      font-size: 7.5vw;
    }
    &.small div {
      flex-wrap: nowrap;
    }
  }
`;

export const NextTech = styled.div`
  margin-top: 24.5em;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 20.5em;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: 18.5em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 10.5em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 5.5em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-top: 10.5em;
  }
`;

export const FilmContainer = styled.div`
  position: relative;
  margin-bottom: 70px;

  @media ${themes.primary.media.maxTabletPortrait} {
    overflow: hidden;
    padding-bottom: 400px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-bottom: 412px;
    overflow: visible;
    margin-bottom: 52px;
  }

  @media (max-width: 600px) {
    padding-bottom: 310px;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    padding-bottom: 300px;
  }
  @media (max-width: 360px) {
    margin-bottom: 0px;
    padding-bottom: 350px;
  }
`;

export const Film = styled.img`
  width: 89.3%;
  @media (max-width: 1410px) {
    width: 97%;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 100%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    top: -18%;
    position: absolute;
    width: 125%;
  }

  @media (max-width: 835px) {
    top: -20%;
    width: 145%;
  }

  @media ${themes.primary.media.maxMobile} {
    left: 5%;
    top: 0;
    width: 90%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 125%;
    left: -8%;
  }
`;

export const FilmText = styled.div`
  position: absolute;
  top: 35.3%;
  left: 2.7%;
  max-width: 42%;
  font-size: ${themes.primary.font.size.feedbackName};
  line-height: 160%;

  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.menuElement};
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.4em;
  }
  @media (max-width: 1410px) {
    max-width: 47.5%;
    top: 33%;
  }
  @media (max-width: 1220px) {
    font-size: 20px;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    top: 35%;
    font-size: 1rem;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    top: 32%;
    font-size: 1.1rem;
    max-width: 60.5%;
  }

  @media (max-width: 835px) {
    top: 27%;
    font-size: 1.1rem;
    max-width: 70.5%;
  }

  @media ${themes.primary.media.maxMobile} {
    left: 7.7%;
    top: 20%;
    font-size: 2.65em;
    max-width: 83.5%;
  }

  @media (max-width: 660px) {
    font-size: ${themes.primary.font.size.secondary};
  }

  @media ${themes.primary.media.minTablet} {
    top: 19%;
    font-size: 1.8em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    top: 15%;
    left: 2.7%;
    max-width: 98.5%;
    font-size: 1.1rem;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    top: 14%;
  }

  @media (max-width: 360px) {
    top: 15%;
    font-size: 0.95rem;
  }

  @media (max-width: 320px) {
    top: 15%;
    font-size: 0.8rem;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 15px;
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  margin-block: 41.5px;
  background-color: ${themes.primary.colors.headerBorder};

  @media ${themes.primary.media.maxLowScreenMobile} {
    opacity: 0;
  }
`;

export const FooterButtonWrapper = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-right: 13px;
`;

export const FooterLinkButton = styled.a`
  font-family: inherit;
  font-size: ${themes.primary.font.size.homeFooterButton};
  padding: 1.15rem 1.1rem;
  cursor: pointer;
  position: relative;
  letter-spacing: 0.03em;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 20px;
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.primary};
  line-height: 99%;

  @media ${themes.primary.media.minPCFullHD} {
    padding: 1.5rem 1.4rem;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 0.875rem;
    padding: 12px 15px;
  }

  & path {
    transition: all 1s ease-in-out;
  }
  & path:nth-child(1) {
    z-index: -1;
    transform: translate(-36px, 36px);
  }
  &:hover {
    & path:nth-child(2) {
      transform: translate(36px, -36px);
    }

    & path:nth-child(1) {
      transform: translate(0px, 0px);
    }
  }
`;

export const ArrowContainer = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  right: -12px;
  top: -12px;
  background-color: ${themes.primary.colors.headerBorderHover};
  border: 1.7px solid ${themes.primary.colors.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media ${themes.primary.media.minPCFullHD} {
    width: 1em;
    height: 1em;
    right: -0.3em;
    top: -0.3em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 24px;
    height: 24px;
    right: -9px;
    top: -9px;
  }
`;
