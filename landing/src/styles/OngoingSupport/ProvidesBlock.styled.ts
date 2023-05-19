import styled from "styled-components";
import themes from "../../utils/themes";

interface MarioJump {
  isJumping: boolean
}

export const Container = styled.section`
  margin-block: 12.5em 10.625em;
  position: relative;
  width: 100%;

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 4.6875em;
    margin-top: 4.75em;

    &.withoutShowcase {
      margin-bottom: 4.25em;
    }
  }
`;

export const BlockContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin: 0 auto;
  justify-content: space-around;
  row-gap: 2em;
  margin-top: 4em;
  margin-bottom: 3em;
  column-gap: 3em;

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    font-size: 1rem;
    flex-direction: column;
    margin-top: 1em;
    row-gap: 2.5em;
  }

  @media ${themes.primary.media.minMiniTabletLandScape} {
    & > div:nth-child(2) {
      margin-top: 8rem;
    }
  }

  & > div {
    margin: 0;
    flex-basis: 29%;
    position: relative;

    @media ${themes.primary.media.maxMobile} {
      width: 100%;
      flex-basis: auto;

      &:nth-child(2n + 1) {
        left: -4em;
        p {
          margin-left: 3.94rem;

          &:nth-child(1) {
            margin-right: -2rem;
          }
        }
      }

      &:nth-child(2) {
        margin-top: 0rem;
        right: -0.7em;
        p {
          margin-left: 1.4rem;
          margin-right: 2em;
        }
      }

      &:nth-child(4) {
        right: -2.4em;
        p {
          margin-left: 0.6rem;
          margin-right: 1.5em;

          &:nth-child(2) {
            margin-right: 4em;
          }
        }
      }
    }
  }
`;

export const Mario = styled.div<MarioJump>`
  position: absolute;
  z-index: 2;
  transition: transform 0.2s ease-out;
  transform: ${(props) => (props.isJumping == true ? 'translateY(-140px)' : 'none')};

  @media (min-width: 2200px) {
    bottom: -43%;
  }

  @media ${themes.primary.media.minPCTwoThousand} {
    bottom: -48%;
  }

  @media (min-width: 3300px) {
    bottom: -52%;
  }

  @media (min-width: 3900px) {
    bottom: -55%;
  }

  @media (max-width: 2199px) {
    bottom: -39%;
  }

  @media (max-width: 1920px) {
    bottom: -35%;
  }

  @media ${themes.primary.media.maxLaptop} {
    bottom: -31%;
  }

  @media (max-width: 1320px) {
    bottom: -27%;
  }

  @media (max-width: 1209px) {
    bottom: -18%;
  }

  @media (max-width: 1200px) {
    bottom: -19%;
  }

  @media (max-width: 858px) {
    bottom: -15%;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 6%;
    height: 8%;
    bottom: -8.5%;
  }

  @media (max-width: 750px) {
    bottom: -10%;
  }

  @media (max-width: 480px) {
    bottom: -11.3%;
  }
`;

export const Title = styled.h2`
  font-weight: inherit;
  font-size: 2.5em;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    line-height: 233%;
    display: none;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25em;
  line-height: 160%;
  text-transform: uppercase;
  color: ${themes.primary.colors.darkBlue};
  margin: 0;
`;

export const Text = styled.p`
  font-size: 1.125em;
  line-height: 28.8px;
  margin-block: 0.em 2em;
  padding-right: 2.8rem;

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-right: 0;
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    line-height: 132%;
    margin-block: 0.38em 1.3em;
  }
  @media (max-width: 400px) {
    font-size: 0.95em;
  }
`;

export const ContentWrapper = styled.div`
  display: inline-block;
  margin-left: 1.2em;

  @media ${themes.primary.media.maxMobile} {
    margin-left: 0;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 105%;
  }
`;

export const MarioBlock = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 4em;
  margin-bottom: 30%;
`;

export const FooterMarioBlock = styled.div`
  width: 107vw;
  left: -60px;
  position: absolute;
  margin-top: 2.2em;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 0em;
  }
`;

export const BlockSrc = styled.img`
  @media ${themes.primary.media.maxMobile} {
    max-height: 45px;
    max-width: 350px;
  }
`;

export const RoadMove = styled.div`
  display: flex;
  width: 200%;
  animation: move-animation 5s linear infinite;

  @keyframes move-animation {
    0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
  }
`;

export const RoadImage = styled.img`
  width: 100%;
  float: left;
  position: relative;
  z-index: 1;
`;

export const FooterContainer = styled.div`
  margin-top: 1%;
`;

export const RoadImages = styled.div`
  width: 100%;
  float: left;
`;

export const MushroomsImages = styled.div`
  position: absolute;
  z-index: 2;
  top: 10px;

  @media (min-width: 2200px) {
    top: 24%;
  }

  @media (min-width: 3300px) {
    top: 28%;
  }

  @media (min-width: 3900px) {
    top: 30%;
  }

  @media (max-width: 2199px) {
    top: 18%;
  }

  @media ${themes.primary.media.maxLaptop} {
    top: 10%;
  }

  @media (max-width: 1209px) {
    top: 1%;
  }
`;

export const MushroomsImage = styled.img`
  width: 58px;
  height: 57px;
  margin: 0 300px;

  @media ${themes.primary.media.maxLaptop} {
    margin: 0 200px;
  }

  @media (max-width: 858px) {
    width: 40px;
    height: 40px;
    margin: 0 50px;
  }

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    margin: 0 20px;
  }

  @media (max-width: 450px) {
    width: 20px;
    height: 20px;
  }
`;
