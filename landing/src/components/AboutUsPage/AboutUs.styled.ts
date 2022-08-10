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
  padding-top: 107px;
  margin: 0 3.6458333%;
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
  font-size: ${themes.primary.font.size.aboutUsBelieveText};
  line-height: 160%;
  margin-top: 20px;
  width: 87%;

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
  width: 54.1%;
  bottom: 80px;
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
  margin-top: 16px;
  span {
    color: ${themes.primary.colors.darkBlue};
  }
  &.main {
    font-size: 20.5px;
    margin-top: 28px;
  }
  @media ${themes.primary.media.minPC} {
    font-size: 1.1vw;
    &.main {
      font-size: 1.5vw;
    }
  }
  @media ${themes.primary.media.maxLaptop} {
    font-size: 1.11vw;
    &.main {
      font-size: 1.47vw;
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
  max-width: 17.1vw;
  position: absolute;
  left: 100px;
  top: -1%;
  &.main {
    max-width: 22.5vw;
    top: 15%;
    left: 2%;
  }
  @media (min-width: 1400px) {
    &.main {
      top: 20%;
      left: 1%;
    }
  }
  @media ${themes.primary.media.minPC} {
    max-width: 18vw;
    &.main {
      max-width: 23vw;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    left: 9vw;
    top: -9%;
  }
  @media ${themes.primary.media.maxPCFullHD} {
    left: 9vw;
    top: -12%;
  }
  @media ${themes.primary.media.maxLaptop} {
    left: 9.3vw;
    top: -19%;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    left: 9.3vw;
    top: -17%;
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
  height: 41px;
  right: ${({ right }) => right};
  transform: rotate(${({ rotate }) => rotate});
  top: -26px;
  z-index: 3;
  &.main {
    width: 27px;
    height: 50px;
    top: -36px;
  }
`;

export const MainImage = styled.img`
  border: 2px solid ${themes.primary.colors.primary};
  position: relative;
  width: 100%;
  height: auto;
  z-index: 2;
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 52%;
  grid-template-rows: 1fr 1.17fr;
  row-gap: 180px;
  position: relative;
  padding-left: 3.5%;
  padding-bottom: 2.57%;
  margin-top: 50px;
  overflow: hidden;

  @media ${themes.primary.media.minPCFullHD} {
    row-gap: 12vw;
  }
`;

export const RightLine = styled.img`
  position: absolute;
  right: -130px;
  top: 50px;
  width: 130%;
`;

export const LeftLine = styled.img`
  position: absolute;
  left: -135px;
  top: -160px;
  width: 48vw;
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
    margin-left: 10px;
    margin-top: 80px;
  }
`;

export const OurBonuses = styled.div`
  padding: 115px 3.5% 370px;
`;

export const BonusesContainer = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 52.5% 43%;
  column-gap: 30px;

  @media ${themes.primary.media.minPCFullHD} {
    grid-template-columns: 53.5% 43%;
  }
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${themes.primary.colors.comment};
`;
