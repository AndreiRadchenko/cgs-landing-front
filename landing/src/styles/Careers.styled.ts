import styled from "styled-components";
import theme from "../utils/themes";

export const CareersContainer = styled.div`
  font-family: ${theme.primary.font.family.namu};
  font-weight: ${theme.primary.font.weight.normal};
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.primary.colors.careerBackground};
`;

export const Title = styled.div`
  margin: 115px 50px 90px 50px;
  font-weight: ${theme.primary.font.weight.heavy};
  font-size: 74px;
  line-height: 88px;

  text-transform: uppercase;

  span:last-child {
    color: ${theme.primary.colors.darkBlue};
  }
`;

export const TitleArrow = styled.img`
  width: 175px;
  height: 25px;
  margin: 0 15px 15px 15px;
`;

export const TitleText = styled.span`
  margin: 0;
  color: #000000;
`;

export const Separator = styled.hr`
  width: 100%;
  height: 1px;
  color: #000000;
`;

export const TicketsContainer = styled.div`
  width: 100%;
  margin: 0 50px 115px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  gap: 76px;
`;

export const FormTitle = styled.span`
  font-size: 50px;
  font-weight: ${theme.primary.font.weight.heavy};
  margin: 0;
  color: #000000;
  align-self: normal;
  margin: 115px 0 0 50px;
  text-transform: uppercase;
`;

export const FormContainer = styled.div`
  display: flex;
  align-self: normal;
  margin: 65px 0 115px 120px;
  position: relative;
`;

export const Form = styled.div`
  width: 456px;
  height: 416px;
  position: absolute;
  background-color: ${theme.primary.colors.careerBackground};
`;

export const FormImage = styled.img`
  width: 645px;
  height: 515px;
  margin: 0 0 0 561px;
`;

export const FormContainer3D = styled.div`
  width: 456px;
  height: 416px;
  position: absolute;
  background: black;
  margin-left: 10px;
`;
