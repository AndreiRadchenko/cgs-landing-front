import styled from "styled-components";
import themes from "../../../utils/themes";

export const PersonalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 53px;
  gap: 20px;

  @media ${themes.primary.media.minMobile} {
    margin-top: 100px;
  }

  @media ${themes.primary.media.maxLaptop} {
    height: 341px;
    gap: 1vw;
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 336px;
    gap: 28px;
    margin-top: 140px;
  }

  @media ${themes.primary.media.maxMobile} {
    height: auto;
    margin-top: 8px;
  }
`;

export const PersonalContainerHeader = styled.div`
  display: flex;
  margin-left: 166px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  @media ${themes.primary.media.maxMobile} {
    margin-left: 0;
    align-items: center;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: 1237px) {
    gap: 0;
    justify-content: space-between;
  }

  @media ${themes.primary.media.minPCFullHD} {
    gap: 13em;
    margin-left: 230px;
  }
`;

export const NamePosition = styled.div`
  min-width: 34vw;

  @media (max-width: 1075px) {
    margin-top: 17px;
    margin-bottom: 0;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: auto;
    margin-bottom: 9px;
  }

  @media ${themes.primary.media.minLaptop} {
    margin-bottom: auto;
    padding-top: 51px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-top: 67px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 16px;
    margin-left: -45px;
  }
`;

export const Name = styled.h1`
  font-family: ${themes.primary.font.family.namu};
  font-size: 32px;
  position: relative;
  z-index: 6;
  line-height: 120%;
  text-transform: uppercase;
  margin: 0;

  @media (min-width: 769px) {
    font-size: 56px;
    letter-spacing: 2.8px;
    padding-top: 39px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-top: 58px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 75px;
    letter-spacing: 3.7px;
    padding-top: 47px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-top: 0;
  }
`;

export const Role = styled.h2`
  font-family: ${themes.primary.font.family.namu};
  font-size: 22px;
  line-height: normal;
  text-transform: uppercase;
  margin: 8px 0 0 0;
  color: ${themes.primary.colors.darkBlue};

  @media (min-width: 769px) {
    line-height: 160%;
    font-size: 26px;
    letter-spacing: 1.3px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 35px;
    letter-spacing: 1.733px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 6px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 215px;
  height: 215px;
  z-index: 5;
  margin-left: 18%;
  margin-top: 16px;

  @media ${themes.primary.media.maxMobile} {
    margin-left: 0;
    margin-top: 0;
  }

  @media ${themes.primary.media.minMobile} {
    max-width: 260px;
    max-height: 260px;
    min-width: 215px;
    min-height: 215px;
    width: 17.75vw;
    height: 17.75vw;
    margin-left: 0;
    margin-top: 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 340px;
    max-height: 340px;
    width: 340px;
    height: 340px;
    margin-right: 57px;
  }
`;

export const ImageBlockWrapper = styled.div`
  display: flex;
  width: 34%;
  justify-content: flex-end;

  @media ${themes.primary.media.maxPCFullHD} {
    justify-content: flex-end;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 215px;
    height: 215px;
    justify-content: center;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 97.6%;
  height: 97.6%;
  object-position: top left;

  @media ${themes.primary.media.minMobile} {
    width: 98%;
    height: 98%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 98%;
    height: 98%;
  }
`;

export const ImageBackground = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 97.6%;
  height: 97.6%;
  border: 1.56px solid ${themes.primary.colors.black};
  background-image: linear-gradient(
    180deg,
    ${themes.primary.colors.blogBackground},
    ${themes.primary.colors.blogBackground} 50%,
    black 50%,
    black 100%
  );

  @media ${themes.primary.media.minMobile} {
  }

  @media ${themes.primary.media.minPCFullHD} {
  }
`;

export const AvatarFrame = styled.div`
  position: absolute;
  width: 650px;
  height: 450px;
  left: -129px;
  bottom: -96px;
  z-index: 0;

  @media (max-width: 1440px) {
    transition: width 0.3s, height 0.3s, left 0.3s;

    width: calc(
      clamp(
        540px,
        540px + (100vw - 1200px) * ((650 - 540) / (1440 - 1200)),
        650px
      )
    );
    height: calc(
      clamp(
        405px,
        405px + (100vw - 1200px) * ((450 - 405) / (1440 - 1200)),
        450px
      )
    );
    left: calc(-107px + (100vw - 1200px) * (-22 / 240));
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    height: 405px;
    width: 540px;
    left: -107px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 600px;
    width: 860px;
    left: -171px;
    bottom: -129px;
  }
`;

export const Summary = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 0 32px;
  color: ${themes.primary.colors.primary};

  @media (min-width: 769px) {
    font-size: 18px;
    max-width: 720px;
    margin-left: 22.8em;
  }

  @media ${themes.primary.media.maxLaptop} {
    position: absolute;
    top: 280px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 24px;
    max-width: 1070px;
    width: 63%;
  }

  @media ${themes.primary.media.maxMobile} {
    top: 322px;
    line-height: 26.5px;
  }
`;

export const BgImageContainer = styled.div`
  position: absolute;
  bottom: -125px;
  width: 376px;
  height: 297px;
  left: -20px;

  @media (min-width: 769px) {
    width: 485px;
    height: 210px;
    left: -79px;
    top: 118px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 615px;
    height: 280px;
    left: -89px;
    top: 155px;
  }

  @media ${themes.primary.media.maxMobile} {
    bottom: 0;
    top: 280px;
  }
`;
