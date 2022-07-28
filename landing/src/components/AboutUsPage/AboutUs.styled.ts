import styled from "styled-components";
import themes from "../../utils/themes";

interface IPadding {
  padding: string;
}

interface IBackground {
  right: string;
  bottom: string;
  border?: string;
}

interface IRotate {
  rotate: string;
}

interface IPin {
  right: string;
}

export const AboutUsContainer = styled.div`
  font-family: ${themes.primary.font.family.namu};
  background-color: ${themes.primary.colors.blogBackground};
  min-height: 88vh;
  position: relative;
`;

export const MainTitle = styled.div`
  font-size: 5.15vw;
  text-transform: uppercase;
  line-height: 120%;
  padding: 77px 3.5% 0;
  span {
    color: ${themes.primary.colors.darkBlue};
  }
`;

export const Subtitle = styled.div`
  font-size: ${themes.primary.font.size.aboutUsSubtitle};
  margin-top: 40px;
  &:first-child {
    margin-top: 0;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.smallAboutSubtitle};
    margin-top: 25px;
  }
`;

export const Text = styled.div`
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;
  margin-top: 20px;
  p {
    margin-bottom: 0;
    &:first-child {
      margin: 0;
    }
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.headerLinkText};
    margin-top: 13px;
  }
`;

export const BottomImage = styled.img`
  position: absolute;
  width: 55%;
  bottom: 20px;
  right: 0;
`;

export const BonusContainer = styled.div`
  display: grid;
  grid-template-columns: 10px 1fr;
  align-items: center;
  margin-top: 19px;
  column-gap: 16px;
  &:first-child {
    margin-top: 0;
  }
`;

export const BonusPoint = styled.div`
  height: 10px;
  width: 10px;
  background-color: ${themes.primary.colors.primary};
  margin-top: 5px;
`;

export const BonusText = styled.div`
  font-size: ${themes.primary.font.size.secondary};
  line-height: 160%;

  @media ${themes.primary.media.maxPCFullHD} {
    font-size: 1.9em;
  }
  @media ${themes.primary.media.maxLaptop} {
    font-size: 1.7em;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.linkText};
  }
`;

export const MainPhotoDescription = styled.div`
  text-transform: uppercase;
  font-size: 15.8px;
  margin-top: 22px;
  span {
    color: ${themes.primary.colors.darkBlue};
  }
  &.main {
    font-size: 20.5px;
    margin-top: 32px;
  }
  @media ${themes.primary.media.minPC} {
    font-size: 1.1vw;
    &.main {
      font-size: 1.5vw;
    }
  }
  @media ${themes.primary.media.maxLaptop} {
    font-size: 1.3vw;
    &.main {
      font-size: 1.45vw;
    }
  }
`;

export const RelativeContainerPhotoBlock = styled.div`
  position: relative;
  width: 100%;
`;

export const MainPhotoContainer = styled.div<IPadding>`
  width: auto;
  height: auto;
  border: 2px solid ${themes.primary.colors.primary};
  position: relative;
  z-index: 2;
  background-color: ${themes.primary.colors.blogBackground};
  padding: ${({ padding }) => padding};
`;

export const RotateBlock = styled.div<IRotate>`
  width: auto;
  height: auto;
  display: flex;
  transform: rotate(${({ rotate }) => rotate});
  max-width: 22vw;
  position: absolute;
  left: 100px;
  top: -1%;
  &.main {
    max-width: 25vw;
    top: 13%;
    left: 0;
  }
  @media ${themes.primary.media.minPC} {
    max-width: 18vw;

    &.main {
      max-width: 23vw;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    left: 9vw;
    top: -2%;
  }
  @media ${themes.primary.media.maxPCFullHD} {
    left: 9vw;
    top: -4%;
  }
  @media ${themes.primary.media.maxLaptop} {
    left: 7vw;
    top: -7%;
  }
`;

export const BackgroundContainer = styled.div<IBackground>`
  position: absolute;
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  border: ${({ border }) =>
    border
      ? `${border} solid ${themes.primary.colors.primary}`
      : `2px solid ${themes.primary.colors.primary}`};
`;

export const HalfBlackBlock = styled.div`
  width: 100%;
  height: 50%;
  background-color: ${themes.primary.colors.primary};
  outline: 1px solid ${themes.primary.colors.primary};
`;

export const BlackBlock = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${themes.primary.colors.primary};
  outline: 1px solid ${themes.primary.colors.primary};
`;

export const Pin = styled.img<IPin & IRotate>`
  position: absolute;
  width: 18.7px;
  height: 38px;
  right: ${({ right }) => right};
  transform: rotate(${({ rotate }) => rotate});
  top: -25px;
  z-index: 3;
  &.main {
    width: 23px;
    height: 46px;
    top: -32px;
  }
`;

export const MainImage = styled.img`
  border: 2px solid ${themes.primary.colors.primary};
  position: relative;
  width: 100%;
  height: auto;
  z-index: 2;
`;

export const EmptyBg = styled.div<{
  background: string;
  width: string;
  height: string;
}>`
  border: 2px solid ${themes.primary.colors.primary};
  position: relative;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  z-index: 2;
  background: ${({ background }) => background};
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 52%;
  grid-template-rows: 1fr 1.3fr;
  row-gap: 180px;
  position: relative;
  padding-left: 3.5%;
  margin: 100px 0 208px;
  overflow: hidden;

  @media ${themes.primary.media.minPCFullHD} {
    row-gap: 12vw;
  }
`;

export const RightLine = styled.img`
  position: absolute;
  right: -130px;
  top: 60px;
  width: 130%;

  /* @media ${themes.primary.media.minPC} {
    right: -1px;
  } */
`;

export const LeftLine = styled.img`
  position: absolute;
  left: -160px;
  top: -130px;
  width: 50vw;
  @media ${themes.primary.media.maxTabletLandScape} {
    left: -120px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    left: -200px;
  }
`;

export const RowContainer = styled.div`
  padding-left: 30px;
  display: flex;
  column-gap: 5vw;
  height: 150%;
  position: relative;
  @media ${themes.primary.media.minPC} {
    column-gap: 6.5vw;
  }
`;

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 83%;
  &.first {
    margin-top: 50px;
  }
`;

export const ProvideBlock = styled.div`
  margin-top: 77px;
  position: relative;
  width: 100%;
  height: 650px;
  @media ${themes.primary.media.minPC} {
    height: 700px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    height: 750px;
  }
  @media (min-width: 2000px) {
    height: 800px;
  }
`;

export const ProvideMainText = styled.div`
  width: 45%;
  padding: 0 3.5%;
`;

export const MediumLine = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  @media (max-width: 1190px) {
    top: 50px;
  }
  @media (max-width: 1100px) {
    top: 70px;
  }
`;

export const SmallPhotoContainer = styled.div`
  width: auto;
  height: auto;
  padding: 8px 14px 20px 8px;
  border: 1px solid ${themes.primary.colors.primary};
  position: relative;
  z-index: 2;
  background-color: ${themes.primary.colors.blogBackground};
`;

export const BlackBackground = styled.div`
  position: absolute;
  right: -3px;
  bottom: -6px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  background-color: ${themes.primary.colors.primary};
`;

export const RotateContainer = styled.div<IRotate>`
  max-width: 272px;
  transform: rotate(${({ rotate }) => rotate});
`;

export const SmallImage = styled.img`
  border: 1px solid ${themes.primary.colors.primary};
  position: relative;
  background-color: ${themes.primary.colors.blogBackground};
  z-index: 2;
  width: 251px;
  height: 189px;
`;

export const PositionFirstImage = styled.div`
  position: absolute;
  top: 280px;
  left: 7%;
  @media (max-width: 2560px) and (min-width: 2460px) {
    top: 500px;
  }
  @media (max-width: 2460px) and (min-width: 2360px) {
    top: 480px;
  }
  @media (max-width: 2360px) and (min-width: 2260px) {
    top: 460px;
  }
  @media (max-width: 2260px) and (min-width: 2160px) {
    top: 440px;
  }
  @media (max-width: 2160px) and (min-width: 2060px) {
    top: 420px;
  }
  @media (max-width: 2060px) and (min-width: 1960px) {
    top: 400px;
  }
  @media (max-width: 1960px) and (min-width: 1860px) {
    top: 380px;
  }
  @media (max-width: 1860px) and (min-width: 1760px) {
    top: 360px;
  }
  @media (max-width: 1760px) and (min-width: 1660px) {
    top: 340px;
  }
  @media (max-width: 1660px) and (min-width: 1560px) {
    top: 320px;
  }
  @media (max-width: 1560px) and (min-width: 1460px) {
    top: 300px;
  }
  @media (max-width: 1460px) and (min-width: 1360px) {
    top: 280px;
  }
  @media (max-width: 1360px) and (min-width: 1260px) {
    top: 260px;
  }
  @media (max-width: 1260px) and (min-width: 1190px) {
    top: 240px;
  }
`;

export const PositionSecondImage = styled.div`
  position: absolute;
  top: 260px;
  left: 40%;
  @media (max-width: 2560px) and (min-width: 2460px) {
    top: 480px;
  }
  @media (max-width: 2460px) and (min-width: 2360px) {
    top: 460px;
  }
  @media (max-width: 2360px) and (min-width: 2260px) {
    top: 440px;
  }
  @media (max-width: 2260px) and (min-width: 2160px) {
    top: 420px;
  }
  @media (max-width: 2160px) and (min-width: 2060px) {
    top: 400px;
  }
  @media (max-width: 2060px) and (min-width: 1960px) {
    top: 380px;
  }
  @media (max-width: 1960px) and (min-width: 1860px) {
    top: 360px;
  }
  @media (max-width: 1860px) and (min-width: 1760px) {
    top: 340px;
  }
  @media (max-width: 1760px) and (min-width: 1660px) {
    top: 320px;
  }
  @media (max-width: 1660px) and (min-width: 1560px) {
    top: 300px;
  }
  @media (max-width: 1560px) and (min-width: 1460px) {
    top: 280px;
  }
  @media (max-width: 1460px) and (min-width: 1360px) {
    top: 260px;
  }
  @media (max-width: 1360px) and (min-width: 1260px) {
    top: 240px;
  }
  @media (max-width: 1260px) and (min-width: 1190px) {
    top: 220px;
  }
`;

export const PositionThirdImage = styled.div`
  position: absolute;
  top: 20px;
  right: 7%;
  @media (max-width: 1200px) {
    top: 60px;
  }
`;

export const SmallImageText = styled.div`
  text-transform: lowercase;
  font-size: 22px;
  display: flex;
  justify-content: center;
  margin-top: 12px;
  span {
    color: ${themes.primary.colors.darkBlue};
  }
`;

export const OurBonuses = styled.div`
  padding: 115px 3.5% 350px;
`;

export const BonusesContainer = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 52.5% 43%;
  column-gap: 50px;
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${themes.primary.colors.comment};
`;
