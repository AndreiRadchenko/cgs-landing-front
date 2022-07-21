import styled from "styled-components";
import themes from "../../utils/themes";

interface IMainPhoto {
  isMain?: boolean;
}

interface IBackground {
  right: string;
  bottom: string;
}

export const AboutUsContainer = styled.div`
  font-family: ${themes.primary.font.family.namu};
  background-color: ${themes.primary.colors.blogBackground};
  padding: 70px 3.5% 250px;
  min-height: 88vh;
  position: relative;
`;

export const MainTitle = styled.div`
  font-size: 5.15vw;
  text-transform: uppercase;
  line-height: 120%;
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
  border: 2px solid ${themes.primary.colors.primary};
`;

export const BackgroundBlackBlock = styled.div`
  width: 100%;
  height: 50%;
  background-color: ${themes.primary.colors.primary};
  outline: 1px solid ${themes.primary.colors.primary};
`;

export const Pin = styled.img`
  position: absolute;
  width: 34px;
  height: 70px;
  right: 10%;
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
`;

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const ProvideBlock = styled.div`
  margin-top: 50px;
  position: relative;
`;

export const ProvideMainText = styled.div`
  width: 45%;
`;

export const MediumLine = styled.img`
  width: 105vw;
  position: absolute;
  height: auto;
  top: 0;
  left: -40px;
`;
