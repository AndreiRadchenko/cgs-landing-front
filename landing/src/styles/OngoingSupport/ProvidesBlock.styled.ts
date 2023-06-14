import styled from "styled-components";
import themes from "../../utils/themes";

interface MarioJump {
  isJumping: boolean
}

interface Moving {
  isMoving: boolean
}

export const Container = styled.section`
  margin-block: 3em 10.625em;
  position: relative;
  width: 100%;

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 9.6875em;
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
  margin-top: -2em;
  margin-bottom: 3em;
  column-gap: 3em;

  & > div:nth-child(3) {
    p {
      margin-left: -1.2em;
    }
    }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
    flex-direction: column;
    margin-top: -2.5em;
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
        left: -3em;
        p {
          margin-left: 2.7rem;

          &:nth-child(1) {
            margin-right: -2rem;
          }
        }
      }

      &:nth-child(2) {
        margin-top: 0rem;
        right: -1.4em;
        p {
          margin-left: 1.4rem;
          margin-right: 4em;
        }
      }

      &:nth-child(4) {
        right: -1.5em;
        p {
          margin-left: 0.6rem;
          margin-right: 1.5em;

          &:nth-child(2) {
            margin-right: 5em;
          }
        }
      }
    }
  }
`;

export const Mario = styled.img<MarioJump>`
  position: absolute;
  z-index: 3;
  transition: transform 0.2s ease-out;
  transform: ${(props) => (props.isJumping == true ? 'translateY(-140px)' : 'none')};

  @media (min-width: 2200px) {
    height: 25%;
    margin-bottom: 1.5%;
  }

  @media ${themes.primary.media.minPCTwoThousand} {
    margin-bottom: 0.8%;
  }

   @media (min-width: 3300px) {
    bottom: -48%;
  }

  @media (min-width: 3900px) {
    bottom: -53%;
  }

  @media (max-width: 2560px) {
    bottom: -43.5%;
  }

  @media (max-width: 2559px) {
    bottom: -45.5%;
  }

  @media (max-width: 2199px) {
    bottom: -37%;
  }

  @media (max-width: 1920px) {
    height: 24%;
    bottom: -36%;
  }

  @media (max-width: 1560px) {
    bottom: -33%;
  }

  @media ${themes.primary.media.maxLaptop} {
    bottom: -32%;
  }

  @media (max-width: 1440px) {
    bottom: -31.5%;
  }

  @media (max-width: 1320px) {
    bottom: -27%;
  }

  @media (max-width: 1209px) {
    height: 15%;
    bottom: -18%;
  }

  @media (max-width: 1200px) {
    bottom: -20%;
  }

  @media (max-width: 1000px) {
    bottom: -18%;
  }

  @media (max-width: 992px) {
    bottom: -18%;
  }

  @media (max-width: 858px) {
    height: 10%;
    bottom: -7.5%;
  }

  @media (max-width: 839px) {
    bottom: -8.6%;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 8%;
    height: 10%;
    bottom: -10%;

    transition: transform 0.2s ease-out;
    transform: ${(props) => (props.isJumping == true ? 'translateY(-80px)' : 'none')};
  }

  @media (max-width: 710px) {
    bottom: -10%;
  }

  @media (max-width: 600px) {
    bottom: -9.5%;
  }

  @media (max-width: 600px) {
    bottom: -9%;
  }

  @media (max-width: 475px) {
    width: 53px;
    height: 100px;
    bottom: -1.2%;
  }

  @media (max-width: 375px) {
    width: 45.5px;
    height: 85px;
    bottom: 0%;

    transition: transform 0.2s ease-out;
    transform: ${(props) => (props.isJumping == true ? 'translateY(-70px)' : 'none')};
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
  margin-block: 0.3em 1em;
  padding-right: 2.8rem;

  @media screen and (min-width: 1723px) and (max-width: 1799px){
    padding-right: 7rem;
  }

  @media screen and (min-width: 1800px) and (max-width: 1871px){
    padding-right: 0rem;
  }

  @media screen and (min-width: 1872px) and (max-width: 1943px){
    padding-right: 1.5rem;
  }

  @media (max-width: 1700px) {
    padding-right: 3.8em;
  }

  @media (max-width: 1540px) {
    padding-right: 2.5em;
  }

  @media (max-width: 1200px) {
    padding-right: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    line-height: 132%;
    margin-block: 0.38em 1.3em;
  }

  @media (max-width: 400px) {
    font-size: 16px;
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
`;

export const BlockSrc = styled.img`
  @media (min-width: 1800px) {
    width: 95%;
  }

  @media (min-width: 2500px) {
    width: 85%;
  }

  @media ${themes.primary.media.maxMobile} {
    max-height: 45px;
    max-width: 350px;
  }
`;

export const RoadMove = styled.div<Moving>`
  display: flex;
  width: 400%;
  animation: ${props => (props.isMoving ? "moveRoad 10s linear" : "none")};

  @keyframes moveRoad {
    0% {
    -webkit-transform: translateX(0%);
  }
  100% {
    -webkit-transform: translateX(-50%);
  }
  }

  @media ${themes.primary.media.maxMobile} {
   width: 600%;
  }

  @media (max-width: 475px) {
    width: 1020%;
  }
`;

export const RoadImage = styled.img`
  width: 100%;
  float: left;
  position: relative;
  z-index: 1;

  @media (max-width: 475px) {
    width: 105%;
  }
`;

export const FooterContainer = styled.div`
  margin-top: 1%;

  @media (max-width: 858px) {
    padding-top: 3em;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-top: 3em;
  }

  @media (max-width: 475px) {
    padding-bottom: 5em;
  }

  @media (max-width: 475px) {
    padding-top: 2em;
  }
`;

export const RoadImages = styled.div`
  width: 100%;
  float: left;
`;

export const MushroomsImages = styled.div`
  position: absolute;
  z-index: 2;
  top: 10px;
  padding-left: 500px;

  @media (min-width: 2200px) {
    top: 13%;
  }

  @media ${themes.primary.media.minPCTwoThousand} {
    top: 15.5%;
  }

  @media (min-width: 3300px) {
    top: 22%;
  }

  @media (min-width: 3900px) {
    top: 25%;
  }

  @media (max-width: 2560px) {
    padding-left: 900px;
    top: 15.5%;
  }

  @media (max-width: 2199px) {
    padding-left: 700px;
    top: 18%;
  }

  @media (max-width: 1920px) {
    padding-left: 600px;
    top: 13.5%;
  }

  @media (max-width: 1800px) {
    padding-left: 300px;
  }

  @media (max-width: 1560px) {
    padding-left: 600px;
    top: 8%;
  }

  @media ${themes.primary.media.maxLaptop} {
    top: 9%;
  }

  @media (max-width: 1440px) {
    top: 6%;
  }

  @media (max-width: 1420px) {
    padding-left: 400px;
  }

  @media (max-width: 1209px) {
    padding-left: 300px;
    top: 1%; 
  }

  @media (max-width: 1000px) {
    top: 2%; 
  }

  @media (max-width: 992px) {
    padding-left: 250px;
  }

  @media (max-width: 858px) {
    top: -4%; 
  }

  @media ${themes.primary.media.maxMobile} {
    padding-left: 150px;
    top: 7%;
  }

  @media (max-width: 680px) {
    padding-left: 100px;
    top: 3%;
  }

  @media (max-width: 580px) {
    padding-left: 70px;
    top: -4%;
  }
  
  @media (max-width: 475px) {
    padding-left: 80px;
    top: 1%;
  }

  @media (max-width: 375px) {
    top: -1%;
  }
`;

export const MushroomsImage = styled.img`
  width: 58px;
  height: 57px;
  margin: 0 300px;
  z-index: 2;

  @media (min-width: 2200px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 1560px) {
    margin: 0 200px;
  }

  @media (max-width: 1209px) {
    margin: 0 150px;
  }

  @media (max-width: 1000px) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: 867px) {
    margin: 0 80px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 0 100px;
  }

  @media (max-width: 515px) {
    margin: 0 50px;
  }

  @media (max-width: 475px) {
    width: 53px;
    height: 53px;
    margin: 0 70px;
  }

  @media (max-width: 440px) {
    margin: 0 50px;
  }

  @media (max-width: 400px) {
    width: 46px;
    height: 46px;
    margin: 0 50px;
  }
`;

export const Hint = styled.div<Moving>`
  display: ${props => props.isMoving ? 'none' : ''};
  position: absolute;
  margin-top: 1.8em;
  left: 6em;
  width: 200px;
  font-family: ${themes.primary.font.family.pressStart};
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: darkgray;
  animation: blinker 1s linear infinite;

  @keyframes blinker {
  50% {
    opacity: 0;
    }
  }

  @media (min-width: 1920px) {
    left: 9em;
    margin-top: 4em;
  }

  @media (min-width: 2560px) {
    width: 240px;
    font-size: 16px;
    left: 11em;
    margin-top: 5em;
  }

  @media (max-width: 992px) {
    width: 150px;
    margin-top: 1em;
    font-size: 12px;
    left: 6em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: -5.5em;
    font-size: 12px;
    left: 0;
  }
`;
