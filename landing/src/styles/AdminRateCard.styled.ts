import styled from "styled-components";
import themes from "../utils/themes";
import { Field } from "formik";

export const AdminRateCardTitle = styled.h4`
  margin: 0 0 10px 0;
  padding: 0;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 18px;
  line-height: 22px;
`;

export const AdminRateCardTitleInput = styled.input`
  width: 100%;
  margin-bottom: 50px;
  padding: 18px 14px;
  background: transparent;
  outline: none;
  border: 1px solid ${themes.primary.colors.headerBorder};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
`;

export const AdminAddServiceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  margin-bottom: 26px;
`;

export const ServiceInputLabel = styled.p`
  margin: 0 0 5px 0;
  padding: 0;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 12px;
  line-height: 14px;
`;

export const ServiceInput = styled(Field)`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  color: ${themes.primary.colors.primary};
  font-size: 16px;
  line-height: 19px;
  background: transparent;
  border: 1px solid ${themes.primary.colors.headerBorder};
  padding: 15px 10px;
  width: 350px;

  &::placeholder {
    color: ${themes.primary.colors.headerBorder};
  }
`;

export const RateCartLevel = styled(Field)`
  padding: 10px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  color: ${themes.primary.colors.primary};
  font-size: 16px;
  line-height: 160%;
  letter-spacing: 0.05em;
  border: 1px solid ${themes.primary.colors.headerBorder};
  background: transparent;
  width: 20%;

  &::placeholder {
    color: ${themes.primary.colors.headerBorder};
  }
`;

export const RateCardTechnology = styled(Field)`
  padding: 10px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  color: ${themes.primary.colors.primary};
  font-size: 16px;
  line-height: 160%;
  letter-spacing: 0.05em;
  border: 1px solid ${themes.primary.colors.headerBorder};
  background: transparent;
  width: 70%;

  &::placeholder {
    color: ${themes.primary.colors.headerBorder};
  }
`;

export const RateCardCost = styled(Field)`
  padding: 10px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  color: ${themes.primary.colors.primary};
  font-size: 16px;
  line-height: 160%;
  letter-spacing: 0.05em;
  border: 1px solid ${themes.primary.colors.headerBorder};
  background: transparent;
  width: 30%;

  &::placeholder {
    color: ${themes.primary.colors.headerBorder};
  }
`;

export const AddRateCardInfo = styled.div`
  display: flex;
  align-items: center;
  max-width: 320px;
  border: 2px dashed ${themes.primary.colors.mainGradientColor2};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 16px;
  line-height: 132%;
  color: ${themes.primary.colors.mainGradientColor2};
  cursor: pointer;
  padding: 17px;
  gap: 10px;
  margin-bottom: 35px;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    background: ${themes.primary.colors.mainGradientColor2};
    color: ${themes.primary.colors.secondary};
    svg path {
      fill: ${themes.primary.colors.secondary};
    }
  }
`;

export const RateCardBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 91%;
  margin-bottom: 50px;
`;

export const DeleteBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 14.1958px;
  line-height: 132%;
  background: #ff0000;
  color: ${themes.primary.colors.secondary};
  border: 2px dashed #ff0000;
  text-transform: uppercase;
  padding: 10px 15px;
`;

export const RateCardLevelWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 85px;
  position: relative;
`;

export const RateCardTechCostWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 71%;
  position: relative;
`;

export const AddNextLevel = styled.div`
  position: absolute;
  top: 55px;
  display: flex;
  align-items: center;
  gap: 7px;
  background: ${themes.primary.colors.darkBlue};
  color: ${themes.primary.colors.blogBackground};
  padding: 9px 15px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};

  svg path {
    fill: ${themes.primary.colors.blogBackground};
  }
  svg {
    width: 15px;
  }
`;

export const AddNextTechCost = styled.div`
  position: absolute;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  font-family: ${themes.primary.font.family.inter};
  color: ${themes.primary.colors.darkBlue};
  top: 55px;
  right: 0;
`;
