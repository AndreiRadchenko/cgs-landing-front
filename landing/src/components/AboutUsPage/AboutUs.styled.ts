import styled from "styled-components";
import themes from "../../utils/themes";
import { de } from "suneditor/src/lang";

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

interface IAbsolutePosition {
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
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
  column-gap: 16px;
`;

export const BonusPoint = styled.div`
  height: 10px;
  width: 10px;
  background-color: ${themes.primary.colors.primary};
  margin-top: 5px;
`;

export const BonusText = styled.div`
  font-size: ${themes.primary.font.size.faqQuestion};
  line-height: 160%;
`;

export const MainPhotoDescription = styled.div`
  text-transform: uppercase;
  font-size: 30.5px;
  span {
    color: ${themes.primary.colors.darkBlue};
  }
`;

export const RelativeContainerPhotoBlock = styled.div<IMainPhoto>`
  position: relative;
  transform: ${({ isMain }) => isMain && "rotate(-1.26deg)"};
  margin-bottom: ${({ isMain }) => !isMain && "35px"};
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
  height: 800px;
`;

export const ProvideMainText = styled.div`
  width: 45%;
  padding: 0 3.5%;
`;

export const MediumLine = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
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
  @media (min-width: 2300px) {
    top: 280px;
  }
  @media (max-width: 1340px) {
    top: 255px;
  }
  @media (max-width: 1230px) {
    top: 245px;
  }
  @media (max-width: 1150px) {
    top: 220px;
  }
  @media (min-width: 1550px) {
    top: 300px;
  }
  @media (min-width: 1550px) {
    top: 300px;
  }
`;

export const PositionSecondImage = styled.div`
  position: absolute;
  top: 260px;
  left: 40%;
  @media (min-width: 1430px) {
    top: 280px;
  }
  @media (min-width: 2300px) {
    top: 280px;
  }
  @media (max-width: 1340px) {
    top: 235px;
  }
  @media (max-width: 1230px) {
    top: 200px;
  }
  @media (max-width: 1150px) {
    top: 190px;
  }
`;

export const PositionThirdImage = styled.div`
  position: absolute;
  top: 20px;
  right: 7%;
`;
