import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding-inline: 51px;
  overflow: hidden;
  font-family: ${themes.primary.font.family.namu};

  /* @media ${themes.primary.media.minPCFullHD} {
    width: 1800px;
  } */
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

export const Title = styled.div`
  margin-block: 115px 89px;
  font-weight: ${themes.primary.font.weight.heavy};
  text-transform: uppercase;

  .blue {
    color: ${themes.primary.colors.darkBlue};
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-block: 55px 1px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-bottom: 30px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-block: 14px 40px;
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

export const TitleArrow = styled.img`
  width: 12vw;
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

export const TicketsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 115px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 1800px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-bottom: 50px;
  }
`;

export const TicketsContainer = styled.div`
  width: 91.9%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  position: relative;
  column-gap: 5.25vw;
  row-gap: 50px;

  @media (max-width: 1400px) {
    column-gap: 50px;
  }

  @media (max-width: 1320px) {
    column-gap: 30px;
  }

  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
    column-gap: 20px;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    row-gap: 20px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    row-gap: 50px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    display: flex;
    flex-direction: column;
    row-gap: 34px;
    column-gap: 0;
  }
`;

export const FormAndImageContainer = styled.div`
  display: flex;
  margin: 45px 0 115px 120px;
  align-self: normal;
  min-height: 446px;
  overflow: hidden;

  @media ${themes.primary.media.maxTabletLandScape} {
    flex-direction: column;
    margin-left: 50px;
  }
  @media ${themes.primary.media.maxMobile} {
    margin: 0;
  }
`;

export const FormTitle = styled.span`
  font-size: 51px;
  font-weight: ${themes.primary.font.weight.heavy};
  margin: 0;
  line-height: 132%;
  letter-spacing: 0.05em;
  color: ${themes.primary.colors.primary};
  align-self: normal;
  margin: 115px 0 0 50px;
  text-transform: uppercase;

  @media ${themes.primary.media.maxTabletPortrait} {
    margin: 100px auto 40px;
    font-size: 2.63rem;
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 100px auto 40px;
    font-size: 6vw;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-block: 50px 20px;
    font-size: 21px;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    margin-bottom: 10px;
    font-size: 1.125rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  align-self: normal;
  position: relative;

  @media ${themes.primary.media.maxTabletPortrait} {
    align-items: center;
    flex-direction: column;
  }
`;

export const Form = styled.div`
  position: absolute;
  background-color: ${themes.primary.colors.careerBackground};
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
