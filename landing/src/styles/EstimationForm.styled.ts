import { Field } from "formik";
import styled from "styled-components";
import themes from "../utils/themes";

interface IBlockErrorSplit {
  readonly error?: boolean;
  readonly split?: boolean;
}

interface IWrapperInput {
  type: string;
}

export const AddQuestionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${themes.primary.font.size.projectLink};
  font-family: ${themes.primary.font.family.namu};
  padding: 10px 26px;
  border: 2px dashed ${themes.primary.colors.mainGradientColor2};
  background-color: transparent;
  outline: none;
  border-radius: 0;
  cursor: pointer;
  color: ${themes.primary.colors.mainGradientColor2};
  transition: background-color 0.3s, color 0.3s;
  margin-bottom: ${themes.primary.spacing.septenary};

  &:hover {
    background-color: ${themes.primary.colors.mainGradientColor2};
    color: ${themes.primary.colors.secondary};
  }

  span {
    font-size: 35px;
    margin: 0 10px 0 0;
  }
`;

export const QuestionBlockHeader = styled.h3`
  font-size: ${themes.primary.font.size.headerLinkText};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  margin: 0 0 7px 0;
`;

export const QuestionBlock = styled.div`
  width: 100%;
  font-family: ${themes.primary.font.family.namu};
  padding: 20px;
  border: 2px solid ${themes.primary.colors.headerBorder};
  margin-bottom: ${themes.primary.spacing.tertiary};
`;

export const EstimationFormInputHeader = styled.h3`
  font-size: ${themes.primary.font.size.mainBlogDescription};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  margin: 0 0 10px 0;
`;

export const EstimationFormDropDownWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 3;
`;

export const AdditinalAttributesBlock = styled.div`
  margin-bottom: 15px;
`;

export const EstimationDeleteQuestion = styled.p`
  color: ${themes.primary.colors.errorText};
  margin: 10px;
  font-size: 16px;
  line-height: 132%;
  cursor: pointer;
`;

export const AdditinalAttributesInput = styled(Field)`
  margin: 0 5px 0 0;
`;

export const StyledConditionsForAppearanceBlock = styled.div`
  border: 1px solid ${themes.primary.colors.dropdownBorder};
  padding: 10px;
  margin: 10px 0 5px 0;
`;

export const AddOptionInputWrapper = styled.div<IWrapperInput>`
  margin: 0 0 15px 0;
  border: none;
  margin-left: 11px;
  button {
    background: none;
    border: none;
    color: #8f8e93;
    position: relative;
    font-size: 16px;
    font-family: ${themes.primary.font.family.namu};
    &::before {
      display: inline-block;
      content: " ";
      margin-right: ${({ type }) => (type === "TEXT" ? 0 : "8px")};
      -ms-transform: translateY(10%);
      transform: translateY(10%);
      width: 13px;
      height: 13px;
      border-radius: ${({ type }) => (type === "RADIO_BUTTON" ? "50%" : 0)};
      border: 1px solid ${themes.primary.colors.primary};
    }
  }

  &::before {
    border: 1px solid ${themes.primary.colors.primary};
  }
`;

export const ContainerEstimationForm = styled.div`
  padding: 58px 282px 34px;

  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 28px 100px 34px;
  }
  @media ${themes.primary.media.maxMobile} {
    padding: 0px 20px 34px;
  }
`;
export const EstimationConditionsForAppearanceHeader = styled.p`
  font-size: 16px;
  line-height: 132%;
`;

export const EstimationFieldBox = styled.div<IBlockErrorSplit>`
  position: relative;
  background-color: ${({ error }) =>
    error
      ? `${themes.primary.colors.mainGradientColor2}`
      : `${themes.primary.colors.blogBackground}`};
  color: ${({ error }) =>
    error ? "rgba(241, 239, 237, 1)" : `${themes.primary.colors.black}`};
  z-index: 1;
  border: 2px solid ${themes.primary.colors.black};
  padding: 16px 18px;
  margin-bottom: 34px;
  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 30px;
  }
`;

export const EstimationFieldLabel = styled.p<IBlockErrorSplit>`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 22px;
  border-bottom: ${(props) =>
    props.split
      ? props.error
        ? " 1px solid rgba(241, 239, 237, 0.5)"
        : "1px solid #8F8E93"
      : "none"};
  line-height: 26px;
  padding: ${(props) => (props.split ? "0 0 14px 0" : "0 0 20px 0")};
  margin: ${(props) => (props.split ? "0 0 19px 0" : "0")};
  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const EstimationFieldOption = styled.label<IBlockErrorSplit>`
  margin: 0;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 18px;
  line-height: 22px;
  @media ${themes.primary.media.maxMobile} {
    font-size: 14px;
    line-height: 17px;
  }
  p {
    margin: 0;
    span {
      color: ${(props) => props.error && "rgba(241, 239, 237, 0.5) !important"};
    }
  }
`;

export const EstimationTextInput = styled.input<IBlockErrorSplit>`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 18px;
  line-height: 22px;
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  &::placeholder {
    color: ${(props) => props.error && "rgba(241, 239, 237, 0.5)"};
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const EstimationInputFlex = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const EstimationInputRadio = styled.input`
  appearance: none;
  /* Safari support */
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  cursor: pointer;
  flex: 0 0 auto;
  border: 2px solid ${themes.primary.colors.black};
  border-radius: 50%;
  box-shadow: 2px 0px 0px 0px ${themes.primary.colors.black};
  display: grid;
  place-items: center;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 11px;
    height: 11px;
  }

  &:checked {
    ::after {
      background: linear-gradient(
        90deg,
        ${themes.primary.colors.mainGradientColor1} 0%,
        ${themes.primary.colors.mainGradientColor2} 100%
      );
      border: 2px solid ${themes.primary.colors.black};
    }
  }

  &:checked + ${EstimationFieldOption} {
    color: ${themes.primary.colors.mainGradientColor2};
  }

  @media ${themes.primary.media.maxMobile} {
    width: 17px;
    height: 17px;

    &::after {
      content: "";
      width: 7px;
      height: 7px;
    }
  }
`;

export const EstimationInputCheckbox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  flex: 0 0 auto;
  width: 22px;
  height: 22px;
  cursor: pointer;
  border: 2px solid ${themes.primary.colors.black};
  box-shadow: 2px 2px 0px 0px ${themes.primary.colors.black};
  display: grid;
  place-items: center;
  &::before {
    content: "";
    width: 26px;
    height: 21px;
    position: absolute;
    left: 1px;
    top: -5px;
  }
  &:checked {
    ::before {
      background-image: url("/markerEstimation.svg");
    }
  }
  &:checked + ${EstimationFieldOption} {
    color: ${themes.primary.colors.mainGradientColor2};
  }
`;

export const EstimationTooltipText = styled.span`
  visibility: hidden;
  background-color: black;
  color: #fff;
  width: 240px;
  height: 85px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 6px;
  padding: 10px;
  position: absolute;
  top: -95px;
  left: -107px;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 200px;
    height: 70px;
    left: -177px;
    top: -75px;
    &:after {
      content: "";
      left: 95%;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    width: 200px;
    height: 70px;
    left: -177px;
    top: -75px;
    &:after {
      content: "";
      left: 95%;
    }
  }
`;
export const EstimationTooltip = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${themes.primary.colors.black};
  background-image: url("/questionMark.svg");
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  &:hover ${EstimationTooltipText} {
    visibility: visible;
  }
`;

export const EstimationQuestionAdditional = styled.div`
  position: absolute;
  top: 5px;
  right: -35px;

  @media ${themes.primary.media.maxMobile} {
    right: -12px;
  }
`;

export const EstimationImageContainer = styled.div`
  position: absolute;

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const EstimationPaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 16px;
  @media ${themes.primary.media.maxMobile} {
    justify-content: center;
    margin-top: 40px;
  }
`;

export const EstimationPaginationPage = styled.div`
  width: 26px;
  height: 26px;
  display: grid;
  place-items: center;
  cursor: pointer;
`;

export const EstimateNavigation = styled.div`
  display: flex;
  flex-direction: column;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column-reverse;
  }
`;

export const EstimateOptionContainer = styled.div<IBlockErrorSplit>`
  display: grid;
  gap: 5px;
  grid-template-columns: ${(props) => (props.split ? "50% 50%" : "100%")};

  @media ${themes.primary.media.maxMobile} {
    grid-template-columns: 100%;
  }
`;

export const EstimationButtonHelperText = styled.div`
  background-color: black;
  color: #fff;
  width: 240px;
  height: 85px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 6px;
  padding: 10px;
  position: absolute;
  top: -95px;
  left: 7px;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
  @media ${themes.primary.media.maxMobile} {
    width: 200px;
    height: 70px;
    left: -2px;
    top: -75px;
  }
`;

export const EstimateModalWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(241, 239, 237, 0.8);
  z-index: 100;
  display: grid;
  place-items: center;
`;

export const EstimateModalContainer = styled.div`
  position: relative;
  padding: 58px 27px 34px 36px;
  margin: 10px 18px 10px 12px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 24px;
  line-height: 29px;
  max-width: 620px;
  height: 270px;

  color: ${themes.primary.colors.black};
  background: ${themes.primary.colors.portfolioBg};
  border: 1.5px solid ${themes.primary.colors.black};

  @media ${themes.primary.media.maxMobile} {
    font-size: 20px;
    height: 330px;
  }
`;

export const EstimateModalButton = styled.a`
  position: absolute;
  bottom: 47px;
  right: 50px;
  padding: 10px 42px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 14px;
  background: ${themes.primary.colors.black};
  border: 2px solid #000000;
  color: ${themes.primary.colors.secondary};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${themes.primary.colors.portfolioBg};
    color: ${themes.primary.colors.black};
  }
`;

export const EstimateModalCross = styled.a`
  position: absolute;
  top: 20px;
  right: 28px;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const EstimateModalShadowContainer = styled.div`
  position: relative;
`;

export const EstimateModalBlock = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  right: -10px;
  bottom: -10px;
  border: 1.5px solid ${themes.primary.colors.primary};
  z-index: -10;
  display: flex;
  align-items: flex-end;

  @media ${themes.primary.media.maxMobile} {
    right: -4px;
    bottom: -4px;
  }
`;

export const EstimateModalBlackBlock = styled.div`
  height: 50%;
  width: 100%;
  outline: 1.5px solid ${themes.primary.colors.primary};
  background-color: black;
`;

export const EstimateFileAttachInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const EstimateFileAttachInputLabel = styled.label`
  flex: 0 0 auto;
  width: 100px;
  cursor: pointer;
  display: inline-flex;
  gap: 4px;
  align-items: center;
  background: #8f8e93;
  border-radius: 6px;
  color: #fff;
  padding: 7px 18px 7px 12px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 12px;
  line-height: 14px;
  transition: 0.3s;
  &:hover {
    background: ${themes.primary.colors.mainGradientColor2};
  }
`;

export const EstimateFileType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background: rgba(88, 105, 221, 1);
  border-radius: 5px;
  color: #fff;
  text-transform: uppercase;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 10px;
`;

export const EstimateFileName = styled.p`
  color: #8f8e93;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 12px;
  line-height: 14px;
  width: 136px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const EstimateFileCross = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const EstimateFileContainerWithInput = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media ${themes.primary.media.maxMobile} {
    align-items: start;
    flex-direction: column;
  }
`;
