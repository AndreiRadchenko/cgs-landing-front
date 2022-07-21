import styled from "styled-components";
import themes from "../../utils/themes";

interface IMainPhoto {
  isMain?: boolean;
}

interface IBackground {
  right: string;
  bottom: string;
  border?: string;
}

interface IRotate {
  degrees: string;
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
  padding: 70px 3.5% 0;
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
`;

export const Text = styled.div`
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;
  margin-top: 20px;
`;

export const BottomImage = styled.img`
  position: absolute;
  width: 55%;
  bottom: 20px;
  right: 0;
`;

export const BonusContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 11px;
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
`;

export const MainPhotoDescription = styled.div`
  text-transform: uppercase;
  font-size: 30.5px;
  margin-top: 37px;
  span {
    color: ${themes.primary.colors.darkBlue};
  }
`;

export const RelativeContainerPhotoBlock = styled.div<IMainPhoto>`
  position: relative;
  transform: ${({ isMain }) => isMain && "rotate(-1.26deg)"};
  width: 100%;
`;

export const MainPhotoContainer = styled.div`
  width: auto;
  height: auto;
  padding: 25px 36px 48px 20px;
  border: 2px solid ${themes.primary.colors.primary};
  position: relative;
  z-index: 2;
  background-color: ${themes.primary.colors.blogBackground};
`;

export const CenterBlock = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const BackgroundBlackBlock = styled.div`
  width: 100%;
  height: 50%;
  background-color: ${themes.primary.colors.primary};
  outline: 1px solid ${themes.primary.colors.primary};
`;

export const Pin = styled.img<IPin>`
  position: absolute;
  width: 34px;
  height: 70px;
  right: ${({ right }) => right};
  top: -48px;
  z-index: 3;
`;

export const MainImage = styled.img`
  border: 2px solid ${themes.primary.colors.primary};
  position: relative;
  width: 100%;
  height: auto;
  z-index: 2;
`;

export const MainRowContainer = styled.div`
  display: flex;
  column-gap: 75px;
  margin-top: 50px;
  padding: 0 3.5%;
`;

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const ProvideBlock = styled.div`
  margin-top: 50px;
  position: relative;
  width: 100%;
  height: 650px;
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
  transform: rotate(${({ degrees }) => degrees});
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
  padding: 0 3.5% 310px;
`;

export const BonusesContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 55% 45%;
  column-gap: 50px;
`;
