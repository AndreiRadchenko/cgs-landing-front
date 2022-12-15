import styled from "styled-components";
import themes from "../../utils/themes";
import LoaderImg from "../../../public/Calculator/calculatorLoader.gif";

export const CalculatorPreviewWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 60%;
  height: 18.833em;
  z-index: 5;
  &:hover > div > div > div + div {
    left: 0;
  }
`;

export const CalculatorPreview = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: row-reverse;
  position: relative;
`;

export const CalculatorPreviewCube = styled.div`
  height: 18.66em;
`;

export const CalculatorButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  background-color: ${themes.primary.colors.blogBackground};
  font-family: ${themes.primary.font.family.namu};
  line-height: 99%;
  border: 1.8px solid ${themes.primary.colors.primary};
  text-transform: uppercase;
  font-size: 1.8333em;
  padding: 1.54em 0.72em;
  height: 100%;
  z-index: 2;
  transition: all 0.2s;
  position: relative;

  &::after {
    content: "";
    width: 60px;
    height: 3px;
    border: 1.8px solid ${themes.primary.colors.primary};
    position: absolute;
    bottom: -5px;
    left: 0px;
    background: ${themes.primary.colors.mainGradientColor2};

    -webkit-transform: skew(-40deg);
    -webkit-transform-origin: top;

    -moz-transform: skew(-40deg);
    -moz-transform-origin: top;

    -ms-transform: skew(-40deg);
    -ms-transform-origin: top;

    -o-transform: skew(-40deg);
    -o-transform-origin: top;

    transform: skew(-40deg);
    transform-origin: top;
  }
`;

export const CalculatorPreviewContentWrapper = styled.div`
  font-size: ${themes.primary.font.size.oneAndHalf};
  width: 19.83em;
  height: 100%;
  padding: 1.625em 3.1875em 1.625em 1.3125em;
  line-height: 160%;
  font-family: ${themes.primary.font.family.namu};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${themes.primary.colors.blogBackground};
  position: relative;
  left: 86.2%;
  transition: all 0.3s;
  border-width: 1.8px 0 0 1.8px;
  border-style: solid;
  border-color: ${themes.primary.colors.primary};

  &::after {
    content: "";
    width: 101%;
    height: 3px;
    border: 1.8px solid ${themes.primary.colors.primary};
    position: absolute;
    bottom: -3px;
    left: -3px;
    background: ${themes.primary.colors.mainGradientColor2};

    -webkit-transform: skew(-40deg);
    -webkit-transform-origin: top;

    -moz-transform: skew(-40deg);
    -moz-transform-origin: top;

    -ms-transform: skew(-40deg);
    -ms-transform-origin: top;

    -o-transform: skew(-40deg);
    -o-transform-origin: top;

    transform: skew(-40deg);
    transform-origin: top;
  }

  &::before {
    content: "";
    width: 5px;
    height: 98.1%;
    position: absolute;
    top: 0.2px;
    left: -9px;
    border: 1.8px solid ${themes.primary.colors.primary};
    border-right: 0;

    background: linear-gradient(180deg, #d6ffbb 8%, #5869dd 110.45%);
    -webkit-transform: skewY(-40deg);
    -webkit-transform-origin: top;

    -moz-transform: skewY(-30deg);
    -moz-transform-origin: top;

    -ms-transform: skewY(-30deg);
    -ms-transform-origin: top;

    -o-transform: skewY(-30deg);
    -o-transform-origin: top;

    transform: skewY(-30deg);
    transform-origin: top;
  }

  @media ${themes.primary.media.minPC} {
    padding-right: 1em;
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  z-index: 36;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: linear-gradient(
    180deg,
    rgba(241, 239, 237, 0.8) 100%,
    rgba(241, 239, 237, 0) 114.26%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ForeignObjectWrapper = styled.div`
  width: 97%;
  height: 96%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &.steps {
    align-items: flex-start;
    height: 97%;
  }
`;

export const CalculatorHeaderWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 34px;

  &.steps {
    top: 0;
    position: relative;
    margin-top: 34px;
  }
`;

export const CalculatorHeaderInner = styled.div`
  width: 100%;
  padding-inline: 2.72em;
  display: flex;
  justify-content: space-between;
`;

export const CloseButton = styled.div`
  position: relative;
  width: 23px;
  height: 23px;
  cursor: pointer;
  &:before,
  &:after {
    position: absolute;
    top: 4px;
    left: 11px;
    content: " ";
    height: 22px;
    width: 3.5px;
    background-color: ${themes.primary.colors.primary};
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export const ImageWrapper = styled.div`
  width: 581px;
  height: 213px;
`;

export const PagerBackgroundImageWrapper = styled.div`
  width: 669px;
  height: 391px;
`;

export const StepsBackgroundImage = styled.div`
  width: 669px;
  height: 647px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImageWrapper = styled.div``;

export const LogoText = styled.span`
  font-family: ${themes.primary.font.family.namu};
  -webkit-text-stroke: 0.1px solid ${themes.primary.colors.primary};
  font-size: 12px;
  margin-left: 9px;
`;

export const StartButton = styled.button`
  position: absolute;
  right: 39px;
  bottom: 35px;
  cursor: pointer;
  padding: 1.105em 2.05em;
  border-radius: 0.52em;
  font-size: 1.5833em;
  text-transform: uppercase;
  border: 1.8px solid ${themes.primary.colors.primary};
  box-shadow: 7px 2px 0px ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.headerBorderHover};
  font-family: ${themes.primary.font.family.namu};

  &.steps {
    position: relative;
    right: auto;
    bottom: auto;
    width: fit-content;
    height: fit-content;
    margin-left: 1.5em;
  }
`;

export const StepsMainButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const StepButtonWrapper = styled.div`
  margin-top: 3em;
  padding-left: 2.8333em;
  display: flex;
  /* justify-content: flex-end; */
  flex-wrap: wrap;
  width: fit-content;
  /* display: grid;
  grid-template-columns: repeat(5, auto); */
  row-gap: 1.7em;
  column-gap: 1.6em;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 2.9em;
`;

export const StepButton = styled.button`
  border: 1.8px solid ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 132%;
  color: ${themes.primary.colors.calculatorButtonBorderBg};
  background-color: ${themes.primary.colors.blogBackground};
  box-shadow: 6.29934px 2.51974px 0px ${themes.primary.colors.primary};
  height: 45px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.67em;
  cursor: pointer;
  letter-spacing: 0.05em;

  &.checked {
    color: ${themes.primary.colors.primary};
  }

  &.active {
    width: 103px;
    &::before {
      content: "STEP ";
      white-space: pre;
    }
  }
`;

export const GridButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ContentWrapper = styled.div`
  margin-top: 8px;
  margin-left: 8px;
  height: 92%;
  width: 97%;
  overflow: auto;
`;

export const PagerText = styled.div`
  padding: 20px 0 20px 18px;
  font-size: ${themes.primary.font.size.oneAndHalf};
  font-family: ${themes.primary.font.family.namu};
  line-height: 160%;
`;

export const CalculatorPagerLeftButton = styled.g`
  cursor: pointer;
`;
export const CalculatorPagerRightButton = styled.g`
  cursor: pointer;
`;

export const LoaderWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  width: 64.41px;
  height: 64.41px;
  background: url(${LoaderImg.src});
  background-repeat: no-repeat;
  background-size: cover;
  mix-blend-mode: multiply;
`;

export const PressButtonWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const PressButtonText = styled.div`
  font-family: ${themes.primary.font.family.pressStart};
  font-size: 20px;
`;

export const PressButtonImageWrapper = styled.div`
  position: absolute;
  bottom: 0.833em;
  right: 5.5em;
  width: 48.62px;
  height: 38.81px;
`;

export const ChooseModalWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 1.1em;
  top: 7em;
  padding-inline: 2.666em;
`;

export const ChooseText = styled.div`
  margin-top: 0.42em;
  text-transform: uppercase;
  height: 83.5%;
  width: 97.3%;
  display: flex;
  margin-left: 0.38em;
  padding-left: 0.72em;
  align-items: center;
  font-size: 1.666em;
  font-family: ${themes.primary.font.family.namu};
  line-height: 160%;
  cursor: pointer;

  &:hover {
    color: ${themes.primary.colors.darkBlue};
  }

  &:active {
    background-color: ${themes.primary.colors.darkBlue};
    color: ${themes.primary.colors.secondary};
  }
`;

export const BackButton = styled.div`
  position: absolute;
  right: 80px;
  top: -8px;
  cursor: pointer;
  font-size: 32.25px;
  line-height: 132%;
  font-family: ${themes.primary.font.family.namu};
`;

export const CalculatorFieldWrapper = styled.div`
  margin: 22px 32px 13px;
  border: 1.8px solid ${themes.primary.colors.primary};
  border-radius: 8px;
  position: relative;
  font-size: 1em;
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.mainGradientColor1} 0%,
    ${themes.primary.colors.mainGradientColor2} 100%
  );

  &::before,
  &::after {
    right: 0;
    content: " ";
    position: absolute;
    width: 11px;
    height: 1.2px;
    background-color: ${themes.primary.colors.primary};
  }

  &::before {
    top: 2px;
    right: 4px;
    transform: rotate(-45deg);
  }

  &::after {
    top: 8px;
    right: -1.77px;
    transform: rotate(-45deg);
  }

  /* & p {
    margin: 0;
  } */

  &.title {
    max-height: 80px;
  }

  &.input {
    margin-top: 0;
    height: 254px;
  }
`;

export const LeftBlackBorder = styled.div`
  position: absolute;
  left: 0;
  width: 5px;
  height: 100%;
  background: ${themes.primary.colors.primary};
  border-radius: 6px 0 0 6px;
  z-index: 2;
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CalculatorField = styled.div`
  width: 98.05%;
  height: 91.9%;
  border-style: solid;
  border-color: ${themes.primary.colors.primary};
  border-width: 1.8px 1.8px 0 0;
  border-radius: 0 8px 0 0;
  font-size: 1.666em;
  font-family: ${themes.primary.font.family.namu};
  display: flex;
  align-items: center;
  padding-inline: 0.75em;
  line-height: 132%;
  margin: 6px 0px 0 4px;
  background-color: ${themes.primary.colors.blogBackground};
  overflow-y: auto;
  max-height: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &::before {
    content: "";
    display: inline-block;
    height: 0.53em;
    width: 100%;
  }

  &::after {
    content: "";
    display: inline-block;
    height: 0.53em;
    width: 100%;
  }

  & .__se__t-upper {
    text-transform: uppercase;
  }

  & .__se__t-lower {
    text-transform: lowercase;
  }

  & .__se__t-first-letter-capitalize {
    display: block;

    &:first-letter {
      text-transform: uppercase;
    }
  }

  &.text {
    margin-top: 16px;
  }
`;

export const CalculatorInputFields = styled.div`
  width: 98.05%;
  height: 97.35%;
  border-style: solid;
  border-color: ${themes.primary.colors.primary};
  border-width: 1.8px 1.8px 0 0;
  border-radius: 0 8px 0 0;
  font-size: 1.333em;
  line-height: 160%;
  margin: 6px 0px 0 4px;
  background-color: ${themes.primary.colors.blogBackground};
  font-family: ${themes.primary.font.family.namu};
  overflow-y: auto;
  padding: 1.875em 1em 0 1em;
`;
