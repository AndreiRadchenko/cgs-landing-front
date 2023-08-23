import styled from "styled-components";
import themes from "../../utils/themes";

import { slideUpProjector, projectorLoader } from "../Animations.styled";
import screen from "../../../public/HomePageDecoration/ProjectorBlock/screen.svg";
import mobileScreen from "../../../public/HomePageDecoration/ProjectorBlock/mobileScreen.svg";


export const ProjectorBlockWrapper = styled.div`
  margin-block: 120px;
  display: flex;
  justify-content: space-between;
  min-height: 390px;

  @media (max-width: 1250px) {
    min-height: 0;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-block: 90px;
  }
`;

export const ScrollContent = styled.div`
  width: 100%;
  height: 434px;
  display: flex;
  justify-content: center;

  @media ${themes.primary.media.minPCFullHD} {
    height: 560px;
  }

  @media (max-width: 1400px) {
    height: 380px;
  }

  @media (max-width: 1250px) {
    height: 360px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    height: 300px;
  }

  @media ${themes.primary.media.maxMobile} {
    height: 400px;
  }
`;

export const TextContent = styled.div`
  margin-right: 21px;
  max-width: 660px;
  width: 103%;
  height: 100%;
  margin-left: 240px;
  text-align: start;
  animation: ${slideUpProjector} .4s ease;

  @media ${themes.primary.media.minPC} {
    margin-left: 258px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 850px;
    margin-left: 210px;
  }

  @media (min-width: 1900px) {
    margin-left: 340px;
  }

  @media (max-width: 1400px) {
    margin-left: 160px;
  }

  @media (max-width: 1199px) {
    max-width: 430px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    max-width: 360px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    margin-left: 0;
    max-width: none;
    height: 300px;
  }

  @media (max-width: 474px) {
    height: 270px;
  }
`;

export const Title = styled.div`
  color: #000;
  font-family: ${themes.primary.font.family.namu};
  font-size: 3.35em;
  font-style: normal;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 140%; /* 56px */
  text-transform: uppercase;
  margin-bottom: 8px;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 50px;
  }

  @media (max-width: 1199px) {
    font-size: 2.8em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 2.2em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 24px;
    margin-bottom: 18px;
  }
`;

export const Text = styled.div`
  color: #000;
  font-family: ${themes.primary.font.family.namu};
  font-size: 1.85em;
  font-style: normal;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 160%; /* 35.2px */
  margin-bottom: 38px;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 27.5px;
  }

  @media (max-width: 1199px) {
    font-size: 1.4em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1.35em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    margin-bottom: 28px;
  }
`;

export const ProjectorIcon = styled.img`
    position: relative;
    z-index: 3;
    margin-top: 5em;
    width: 35.4em;
    height: 32.5em;

    @media ${themes.primary.media.minPC} {
        width: 32em;
        height: 32.5em;
        margin-top: 3em;
    }

    @media ${themes.primary.media.minPCFullHD} {
        width: 540px;
        height: 480px;
        margin-top: 3em;
    }

    @media (min-width: 1900px) {
        width: 586px;
        height: 520px;
        margin-top: 3.8em;

        &.visibleText {
            /* left: -10px; */
        }
    }

    @media (min-width: 2200px) {
        margin-top: 3.6em;
        &.visibleText {
            left: 0;
        }
    }

    @media (max-width: 1400px) {
        width: 30em;
        height: 28em;
    }

    @media (max-width: 1250px) {
        width: 28em;
        height: 26em;
        margin-top: 3.8em;
    }

    @media (max-width: 1199px) {
        width: 24em;
        height: 22em;
        margin-top: 1.8em;
    }

    @media ${themes.primary.media.maxTabletPortrait} {
        &.visibleText {
            left: -2.9em;
        }
    }

    @media (max-width: 860px) {
        width: 22em;
        height: 20em;
        margin-top: 1em;
        &.visibleText {
            left: 1.5em;
        }
    }
`;

export const ScreenBlock = styled.div`
  background: transparent url(${screen.src});
  background-repeat: no-repeat;
  width: 58em;
  height: 32.59em;
  background-size: contain;

  @media ${themes.primary.media.minPC} {
    width: 53em;
    height: 30em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 840px;
    height: 460px;
  }

  @media (min-width: 1900px) {
    width: 927px;
    height: 521px;
  }

  @media (max-width: 1400px) {
    width: 53em;
    height: 30em;
  }

  @media (max-width: 1250px) {
    width: 46em;
    height: 26em;
  }
  @media (max-width: 1199px) {
    width: 35.5em;
    height: 20em;
   }
  @media (max-width: 860px) {
    width: 30em;
    height: 17em;
  }
  &.mobile {
    @media ${themes.primary.media.maxMobile} {
      width: 100%;
      background: transparent url(${mobileScreen.src}) no-repeat;
      background-size: cover;
      background-position: center;
      height: 300px;
    }
    @media (max-width: 474px) {
      width: 100vw;
      margin-left: -20px;
      height: 320px;
    }

    @media (max-width: 400px) {
        height: 270px;
    }
  }
`;

export const TimerNumber = styled.div`
  color: #B5B3B5;
  margin-bottom: 20px;
  margin-right: 5px;
  font-family: ${themes.primary.font.family.namu};
  font-size: 13em;
  font-style: normal;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 140%; /* 219.622px */
  z-index: 2000;
  opacity: 1;
  transition: opacity 0.3s linear;

  &.visibleText {
    opacity: 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 209px;
    margin-right: 10px;
  }

  @media (max-width: 1250px) {
    font-size: 140px;
  }

  @media (max-width: 1199px) {
    font-size: 120px;
  }

  @media (max-width: 474px) {
    font-size: 85px;
    margin-right: 0;
  }
`;

export const projectorLoaderBg = styled.div`
  width: 100%;
  height: 100%;
  background: #8f8e931a;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  opacity: 1;
  
  &.isScrolled {
    animation: ${projectorLoader} 2.3s linear;
  }
`;

export const Light = styled.img`
  width: 24.1em;
  height: 32.59em;
  position: relative;

  @media ${themes.primary.media.minPC} {
    width: 22em;
    height: 30em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 340px;
    height: 460px;
  }

  @media (min-width: 1900px) {
    width: 385px;
    height: 521px;
  }

  @media (max-width: 1400px) {
    width: 22em;
    height: 30em;
   }

   @media (max-width: 1250px) {
     width: 19em;
     height: 26em;
    }

    @media (max-width: 1199px) {
      width: 14.7em;
      height: 20em;
    }
    @media (max-width: 860px) {
      width: 12.5em;
      height: 17em;
    }
`;

export const ScreenWithLight = styled.div`
  display: flex;
  margin-left: -6em;

  @media ${themes.primary.media.minPCFullHD} {
    margin-left: -5.2em;
  }

  @media (min-width: 1900px) {
    margin-left: -6em;
  }

  @media (min-width: 2200px) {
    margin-left: -4.5em;
  }

  @media (max-width: 1400px) {
    margin-left: -5em;
  }

  @media (max-width: 1199px) {
    margin-left: -4.7em;
  }

  @media (max-width: 860px) {
    margin-left: -4.3em;
  }
`;

export const MobileWrapper = styled.div`
    width: 100%;
    height: 510px;

    @media (max-width: 474px) {
        height: 430px;
    }
`;

export const MobileCamera = styled.img`
    position: absolute;
    width: 430px;
    height: 452.5px;
    right: -30px;
    margin-top: -150px;

    @media (max-width: 474px) {
        width: 430px;
        height: 392.5px;
        right: -110px;
        margin-top: -110px;
    }
`;


