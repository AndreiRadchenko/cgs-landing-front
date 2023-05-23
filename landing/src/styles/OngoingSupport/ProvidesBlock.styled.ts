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
  z-index: 2;
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
    width: 11%;
    height: 13%;
    bottom: -3%;
  }

  @media (max-width: 375px) {
    width: 15%;
    height: 17%;
    bottom: -4%;

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

export const RoadMove = styled.div`
  display: flex;
  width: 200%;
  animation: move-animation 5s linear infinite;
  backface-visibility: hidden;

  @keyframes move-animation {
    0% {
    -webkit-transform: translateX(0%);
  }
  100% {
    -webkit-transform: translateX(-50%);
  }
  }

  @media ${themes.primary.media.maxMobile} {
   width: 300%;
  }

  @media (max-width: 475px) {
    width: 500%;
  }
`;

export const RoadImage = styled.img`
  width: 100%;
  float: left;
  position: relative;
  z-index: 2;
  transform: translateZ(0);

  @media (max-width: 475px) {
    width: 100%;
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
  z-index: 1;
  top: 10px;

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
    top: 15.5%;
  }

  @media (max-width: 2199px) {
    top: 18%;
  }

  @media (max-width: 1920px) {
    top: 13.5%;
  }

  @media (max-width: 1560px) {
    top: 8%;
  }

  @media ${themes.primary.media.maxLaptop} {
    top: 9%;
  }

  @media (max-width: 1440px) {
    top: 6%;
  }

  @media (max-width: 1209px) {
    top: 1%; 
  }

  @media (max-width: 1000px) {
    top: 5%; 
  }

  @media (max-width: 858px) {
    top: -3%; 
  }

  @media ${themes.primary.media.maxMobile} {
    top: 9%;
  }

  @media (max-width: 580px) {
    top: -2%;
  }
  
  @media (max-width: 475px) {
    top: 10%;
  }

  @media (max-width: 375px) {
    top: 3%;
  }
`;

export const MushroomsImage = styled.img`
  width: 58px;
  height: 57px;
  margin: 0 300px;
  z-index: 1000;

  @media (min-width: 2200px) {
    width: 70px;
    height: 70px;
  }

  @media ${themes.primary.media.maxLaptop} {
    margin: 0 200px;
  }

  @media (max-width: 1000px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 858px) {
    margin: 0 50px;
  }

  @media (max-width: 475px) {
    margin: 0 90px;
  }
`;
