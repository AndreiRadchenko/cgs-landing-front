import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.article`
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding-inline: 51px;
  overflow: hidden;
  font-family: ${themes.primary.font.family.namu};

  @media ${themes.primary.media.maxMobile} {
    padding-inline: 12px;
  }
`;

export const CareersContainer = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.normal};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${themes.primary.colors.careerBackground};
`;

export const TopRightImageText = styled.img`
  position: absolute;
  right: 0;
  top: 20%;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const BottomRightImageText = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;

  @media (max-width: 768px) {
    right: 3em;
  }

  @media (max-width: 475px) {
    width: 322px;
    height: 197px;
    right: -4em;
    bottom: 3em;
  }
`;
export const BottomLeftImageText = styled.img`
  position: absolute;
  height: 40em;
  bottom: 500px;
  left: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const BottomRightImageGlass = styled.img`
  position: absolute;
  width: 330px;
  height: 330px;
  bottom: -2%;
  right: 0;

  @media (max-width: 475px) {
    width: 230px;
    height: 260px;
  }
`;
export const BottomLeftImageGlass = styled.img`
  position: absolute;
  bottom: 335px;
  left: 20em;

  @media (max-width: 2560px) {
    left: 48em;
  }

  @media (max-width: 2500px) {
    left: 44em;
  }

  @media (max-width: 2300px) {
    left: 38em;
  }

  @media (max-width: 2300px) {
    left: 32em;
  }

  @media (max-width: 1920px) {
    left: 26em;
  }

  @media (max-width: 1560px) {
    left: 22em;
  }

  @media (max-width: 1300px) {
    left: 15em;
  }

  @media (max-width: 1200px) {
    bottom: 360px;
    left: 12em;
  }

  @media (max-width: 1112px) {
    left: 4em;
  }


  @media (max-width: 1024px) {
    left: 2em;
  }

  @media (max-width: 1000px) {
    left: 2em;
  }

  @media (max-width: 992px) {
    left: 2em;
  }

  @media (max-width: 815px) {
    left: -2em;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;


export const Title = styled.header`
  font-weight: ${themes.primary.font.weight.heavy};
  text-transform: uppercase;
  font-size: 6.167em;
  margin-top: 75px;
  margin-bottom: 75px;

  p{
    margin: 0;
  }

  @media (min-width: 2561px) {
    width: 80vw;
    margin-left: 11vw;
  }

  @media (max-width: 2560px) {
    width: 80vw;
    margin-left: 3em;
  }

  @media (max-width: 1920px) {
    width: 100%;
    margin-left: 1em;
  }

  @media (max-width: 1560px) {
    margin-left: 0.2em;
    font-size: 6em;
  }

  @media (max-width: 1440px) {
    margin-left: 1em;
    font-size: 6.167em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 5em;
  }

  @media (max-width: 874px) {
    margin-left: 0.5em;
  }

  @media (max-width: 814px) {
    margin-left: 0em;
  }

  @media (max-width: 768px) {
    margin-left: 0.9em;
    font-size: 55px;
    line-height: 60px;
    margin: 30px 0 30px 0.9em;
  }

  @media (max-width: 475px) {
    margin-left: 0.7em;
    font-size: 35px;
    line-height: 42px;
  }

  @media (max-width: 400px) {
    font-size: 28px;
    line-height: 39px;
    margin-left: 0;
    width: 335px;
    margin-top: 0.5em;
    margin-bottom: 0.7em;

    span:last-child{
      font-size: 30px;
    }
  }
`;

export const ArrowContainer = styled.div`
  display: inline-block;
  margin: auto;
  height: 100%;

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 0;
  }
`;

export const FormTitleArrow = styled.img`
  width: 107px;
  height: 24px;
  margin: 0 0 5px 15px;
`;


export const TitleArrow = styled.img`
  width: 175px;
  height: 25px;
  margin: 0 15px 8% 15px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 220px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-bottom: 4%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-bottom: 1%;
    width: 95px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 0;
    width: 85px;
    height: 18px;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    margin: 0 0 0 3px;
    width: 47px;
    height: 18px;
  }
`;

export const TitleText = styled.span`
  margin: 0;
  font-size: 5vw;
  line-height: 124%;
  color: ${themes.primary.colors.primary};

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 94px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 4.8vw;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 4.5vw;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 4.3vw;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    display: inline-block;
    font-size: 1.75rem;
    line-height: 140%;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    font-size: 1.5rem;
  }
`;

export const Separator = styled.hr`
  width: calc(100% + 102px);
  height: 1px;
  color: ${themes.primary.colors.primary};
  margin: 0;
`;

export const TitleTextRow = styled.div`
  @media ${themes.primary.media.maxLowScreenMobile} {
    display: inline;
  }
`;

export const TicketsWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;

  @media (max-width: 474px) {
    margin-bottom: 90px;
  }
`;

export const TicketsContainer = styled.div`
  width: 91.9%;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    margin-left: -1em;
  }

  @media (max-width: 475px) {
    margin-left: 1.3em;
  }
`;

export const FormAndImageContainer = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 0 30px 0;
  align-self: normal;
  min-height: 550px;
  overflow: hidden;

  @media ${themes.primary.media.maxTabletLandScape} {
    flex-direction: column;
    margin-top: -50px;
  }
  @media ${themes.primary.media.maxMobile} {
    margin: 0;
  }
`;

export const FormTitle = styled.span`
  font-size: 4.2em;
  font-weight: ${themes.primary.font.weight.heavy};
  margin: 0 auto;
  line-height: 132%;
  letter-spacing: 0.05em;
  color: ${themes.primary.colors.primary};
  align-self: normal;
  text-transform: uppercase;

  p{
    margin: 0;
    margin-bottom: 30px;
    @media (max-width: 475px) {
      margin-bottom: 14px;
    }

    @media (max-width: 400px) {
      margin-bottom: 4px;
    }
  }

  @media (max-width: 768px) {
    font-size: 45px;
  }

  @media (max-width: 475px) {
    font-size: 28px;
    line-height: 29px;
  }

  @media (max-width: 474px) {
    font-size: 29.5px;
  }

  @media (max-width: 469px) {
    font-size: 28px;
  }

  @media (max-width: 446px) {
    font-size: 26px;
  }

  @media (max-width: 416px) {
    font-size: 24px;
  }

  @media (max-width: 386px) {
    font-size: 21px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: normal;
  position: relative;

  @media ${themes.primary.media.maxTabletPortrait} {
    align-items: center;
    flex-direction: column;
  }

  @media ${themes.primary.media.maxMobile} {
    display: inline-block;
    margin-bottom: 40em;
  }

  @media (max-width: 475px) {
    margin-bottom: 28em;
  }
`;

export const Form = styled.div`
  margin-top: 20px;

  @media ${themes.primary.media.maxTabletPortrait} {
    position: relative;
  }
`;

export const FormImage = styled.img`
  width: 645px;
  height: 515px;
  margin-left: 39.73vw;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 435px;

    margin-left: 524px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: auto;
    height: auto;
    margin: 69px auto 0;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    right: -15%;
    width: 100%;
    margin-top: 29px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    right: -1%;
    top: 25px;
    width: 130%;
  }
`;

export const FormContainer3D = styled.div`
  width: 443px;
  height: 418px;
  position: absolute;
  background: black;
  margin-top: 20px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;

  @media ${themes.primary.media.maxMobile} {
    width: 400px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 361px;
    width: 345px;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    width: 300px;
  }
`;

export const TopCorner = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 14px 8px 0;
  border-color: transparent ${themes.primary.colors.grayBack} transparent
    transparent;
  right: 0;
  top: 0;
  position: absolute;
  z-index: 5;
`;

export const BottomCorner = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 5px 13px;
  border-color: transparent transparent ${themes.primary.colors.grayBack}
    transparent;
  position: absolute;
  right: 0;
  bottom: 0;
`;
