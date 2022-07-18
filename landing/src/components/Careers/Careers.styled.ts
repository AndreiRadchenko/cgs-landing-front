import styled from "styled-components";
import themes from "../../utils/themes";

export const CareersContainer = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.normal};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${themes.primary.colors.careerBackground};
`;

export const Title = styled.div`
  margin: 115px 50px 90px 50px;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 85px;
  text-transform: uppercase;

  .blue {
    color: ${themes.primary.colors.darkBlue};
  }
`;

export const ArrowContainer = styled.div`
  display: inline-block;
  margin: auto;
  height: 100%;
`;

export const TitleArrow = styled.img`
  width: 10vw;
  height: 25px;
  margin: 0 15px 8% 15px;
`;

export const TitleText = styled.span`
  margin: 0;
  font-size: 5vw;
  color: ${themes.primary.colors.primary};
`;

export const Separator = styled.hr`
  width: 100%;
  height: 1px;
  color: #000000;
`;

export const TitleTextRow = styled.div`
  //width: 100%;
  //white-space: nowrap;
`;

export const TicketsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 115px;
  padding: 0 50px;
`;

export const TicketsContainer = styled.div`
  width: 1308px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  column-gap: 5vw;
  row-gap: 50px;
`;

export const FormAndImageContainer = styled.div`
  display: flex;
  margin: 65px 0 115px 120px;
  align-self: normal;

  @media ${themes.primary.media.maxTabletLandScape} {
    flex-direction: column;
  }
  overflow: hidden;
`;

export const FormTitle = styled.span`
  font-size: 50px;
  font-weight: ${themes.primary.font.weight.heavy};
  margin: 0;
  color: #000000;
  align-self: normal;
  margin: 115px 0 0 50px;
  text-transform: uppercase;
`;

export const FormContainer = styled.div`
  display: flex;
  align-self: normal;
  position: relative;
`;

export const Form = styled.div`
  width: 456px;
  height: 416px;
  position: absolute;
  background-color: ${themes.primary.colors.careerBackground};
`;

export const FormImage = styled.img`
  width: 645px;
  height: 515px;
  margin-left: 45vw;
  padding-bottom: 50px;
`;

export const FormContainer3D = styled.div`
  width: 455px;
  height: 416px;
  position: absolute;
  background: black;
  margin-left: 13px;
  display: flex;
  flex-direction: column;
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
