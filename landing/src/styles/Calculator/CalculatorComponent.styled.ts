import styled from "styled-components";
import themes from "../../utils/themes";
import LoaderImg from "../../../public/Calculator/calculatorLoader.gif";
import { glow } from "../Animations.styled";

export const CalculatorPreviewWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 60%;
  height: 18.833em;
  z-index: 11;

  @media ${themes.primary.media.maxMobile} {
    position: fixed;
    height: auto;
    top: auto;
    bottom: 0;
  }
`;

export const CalculatorPreview = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    height: 60px;
  }
`;

export const CalculatorPreviewCube = styled.div`
  height: 18.66em;

  @media ${themes.primary.media.maxMobile} {
    width: 100vw;
    height: 60px;
  }
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
  background: linear-gradient(
    180deg,
    ${themes.primary.colors.mainGradientColor1},
    ${themes.primary.colors.mainGradientColor2},
    ${themes.primary.colors.mainGradientColor1}
  );
  background-size: auto 400%;
  animation: ${glow} 12s linear infinite;

  &::after {
    content: "";
    width: 61px;
    height: 3px;
    border: 1.8px solid ${themes.primary.colors.primary};
    position: absolute;
    bottom: -5px;
    left: 0;
    background: ${themes.primary.colors.mainGradientColor2};
    transform: skew(-50deg);
    transform-origin: top;
  }

  &:hover + div,
  .active + div {
    left: -19.83em;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 0.54em 0 1em;
    writing-mode: horizontal-tb;
    height: 60px;
    border-width: 1.8px 0 1.8px 0;
    font-size: 2.11em;

    &:hover + div,
    .active + div {
      left: auto;
      top: -188px;
    }

    &::after {
      content: none;
    }
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
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s;
  border-top: 1.8px solid ${themes.primary.colors.primary};

  &::after {
    content: "";
    width: 100.5%;
    height: 3px;
    border: 1.8px solid ${themes.primary.colors.primary};
    position: absolute;
    bottom: -3px;
    left: 0px;
    background: ${themes.primary.colors.mainGradientColor2};
    transform: skew(-45deg);
    transform-origin: top;
  }

  &::before {
    content: "";
    width: 5px;
    height: 99%;
    position: absolute;
    top: 0.1px;
    left: -7px;
    border: 1.8px solid ${themes.primary.colors.primary};
    background: ${themes.primary.colors.mainGradientColor2};
    transform: skewY(-30deg);
    transform-origin: top;
  }

  &.active,
  &:hover {
    left: -19.83em;
  }

  @media ${themes.primary.media.minPC} {
    padding-right: 1em;
    &::before {
      height: 98.6%;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    height: 192px;
    left: 0;
    top: 0;
    border-width: 1.8px 0 0 0;
    font-size: 1.54em;
    line-height: 160%;
    padding-inline: 1.2em 2.1875em;
    row-gap: 10px;

    &::before {
      content: none;
    }

    &::after {
      height: 4px;
      top: -7.5px;
      border: 0;
      border-top: 1.8px solid ${themes.primary.colors.primary};
      transform: none;
      background: linear-gradient(270deg, #d6ffbb 8%, #5869dd 90.45%);
    }

    &:hover,
    &.active {
      left: 0;
      top: -188px;
    }

    & > div {
      display: flex;
      justify-content: flex-end;

      & > a {
        padding: 1.3em 2.2em !important;
      }
    }
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

  @media ${themes.primary.media.maxMobile} {
    &.mobile {
      width: 356px;
      height: 637px;
    }
  }
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

  @media ${themes.primary.media.maxMobile} {
    padding-inline: 2.12em;

    &.steps {
      padding-inline: 2em;
    }
  }
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

  @media ${themes.primary.media.maxMobile} {
    width: 15px;
    height: 15px;
    &:before,
    &:after {
      height: 15px;
      width: 2px;
      top: 9px;
      left: 7px;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 581px;
  height: 213px;

  @media ${themes.primary.media.maxMobile} {
    width: 308px;
    height: 194px;
  }
`;

export const PagerBackgroundImageWrapper = styled.div`
  width: 669px;
  height: 391px;

  @media ${themes.primary.media.maxMobile} {
    width: 356px;
    height: 382px;

    &.mobileChoose {
      width: 356px;
      height: 335px;
    }
  }
`;

export const StepsBackgroundImage = styled.div`
  width: 669px;
  height: 647px;

  @media ${themes.primary.media.maxMobile} {
    width: 356px;
    height: 637px;
  }
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
  color: ${themes.primary.colors.primary};
  z-index: 2;

  &.steps {
    position: relative;
    right: auto;
    bottom: auto;
  }

  &.invalid + div {
    opacity: 1;
    z-index: 3;
  }

  &.hide {
    display: none;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 1.175em 1.52em;
    right: 20px;
    bottom: 15px;
    font-size: 1.346em;
    line-height: 99%;
    box-shadow: 5.52438px 1.57839px 0px ${themes.primary.colors.primary};
    &.quit {
      padding: 1.27em 0.81em;
    }
    &.steps {
      margin-left: 0;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.3em;
    padding: 0.8em 1.9em;

    &.steps {
      font-size: 1.3em;
      padding: 0.8em 1.9em;
    }
  }
`;

export const StepsMainButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column-reverse;
  position: relative;
  margin-left: 1.5em;

  @media ${themes.primary.media.minPCFullHD} {
    margin-left: 1em;
  }

  @media ${themes.primary.media.maxMobile} {
    justify-content: flex-end;
  }
`;

export const StepButtonWrapper = styled.div`
  width: 67.5%;
  margin-top: 3em;
  padding-left: 2.8333em;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  row-gap: 1.7em;
  column-gap: 1.6em;

  &.last {
    margin-top: 1.2em;
    justify-content: flex-start;
  }

  @media ${themes.primary.media.minPC} {
    width: 78%;
    row-gap: 1.2em;
    column-gap: 1em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 90%;
    row-gap: 1.2em;
    column-gap: 0.8em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    column-gap: 1em;
    width: 100%;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    row-gap: 1.64em;
    column-gap: 1.45em;
    margin-top: 1.4em;
    padding-left: 1.8em;
    &.last {
      margin-top: 1.8em;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 2.9em;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    margin-right: 2.5em;
    row-gap: 20px;

    &.last {
      row-gap: 14px;
    }
  }
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
  transition: all 0.3s;
  z-index: 2;

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

  &.disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media ${themes.primary.media.minPC} {
    font-size: 18px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.176em;
  }

  @media ${themes.primary.media.maxMobile} {
    height: 35px;
    width: 39px;
    font-size: 14px;
    box-shadow: 4.97142px 1.98857px 0px ${themes.primary.colors.primary};

    &.active {
      width: 81px;
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
  width: 93.5%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-track-piece:end {
    background: transparent;
    margin-bottom: 20px;
  }

  &::-webkit-scrollbar-track-piece:start {
    background: transparent;
    margin-top: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${themes.primary.colors.primary};
    border-radius: 10px;
  }
`;

export const PagerText = styled.div`
  padding: 20px 0 20px 18px;
  font-size: ${themes.primary.font.size.oneAndHalf};
  font-family: ${themes.primary.font.family.openSans};
  font-weight: ${themes.primary.font.weight.bold};
  line-height: 160%;

  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 10px 0 10px 18px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    padding-top: 12px;
    font-size: 1.7em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.346em;
    padding-top: 16px;
    padding-left: 8px;

    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.minPC} {
    padding: 10px 0 10px 18px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-top: 0.8em;
    font-size: ${themes.primary.font.size.tertiary};
  }
`;

export const CalculatorPagerLeftButton = styled.g`
  cursor: pointer;

  &.disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
  /* &:hover,
  &:active {
    background: linear-gradient(
      90deg,
      ${themes.primary.colors.mainGradientColor1} 0%,
      ${themes.primary.colors.mainGradientColor2} 100%
    );
    border-radius: 0px 0px 0px 20px;
  } */
`;
export const CalculatorPagerRightButton = styled.g`
  cursor: pointer;
  &.disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
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

  @media ${themes.primary.media.maxMobile} {
    width: 50px;
    height: 50px;
  }
`;

export const PressButtonWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    align-items: flex-start;
  }
`;

export const PressButtonText = styled.div`
  font-family: ${themes.primary.font.family.pressStart};
  font-size: 20px;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 40px;
    width: 56%;
    font-size: 16px;
    line-height: 183%;
  }
`;

export const PressButtonImageWrapper = styled.div`
  position: absolute;
  bottom: 0.833em;
  right: 5.5em;
  width: 48.62px;
  height: 38.81px;

  @media ${themes.primary.media.maxMobile} {
    width: 34.26px;
    height: 27.35px;
    right: 3.5em;
    bottom: 1.1em;
  }
`;

export const ChooseModalWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 1.1em;
  top: 9.5em;
  padding-inline: 2.666em;

  @media ${themes.primary.media.maxMobile} {
    row-gap: 14px;
    top: 8.5em;
    padding-inline: 2.12em;
  }
`;

export const ChooseText = styled.div`
  text-transform: uppercase;
  height: 83.5%;
  width: 97.3%;
  margin-top: 0.42em;
  margin-left: 0.38em;
  padding-left: 0.72em;
  font-size: 1.666em;
  font-family: ${themes.primary.font.family.namu};
  line-height: 160%;
  cursor: pointer;
  font-family: ${themes.primary.font.family.openSans};
  font-weight: ${themes.primary.font.weight.bold};
  transition: color 0.15s, background-color 0.3s;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${themes.primary.colors.darkBlue};
    color: ${themes.primary.colors.secondary};
  }

  &:active {
    background-color: ${themes.primary.colors.calculatorDarkBlue};
    color: ${themes.primary.colors.secondary};
  }

  @media ${themes.primary.media.maxMobile} {
    display: block;
    transform: translateY(1.5em);
    margin-left: 0.3em;
    font-size: 1.346em;
    height: 87.5%;
    width: 97%;
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

  @media ${themes.primary.media.maxMobile} {
    right: 55px;
    top: 1px;
    font-size: 22px;
  }
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

  &.title {
    max-height: 80px;
  }

  &.last {
    font-size: 0.9em;
    line-height: 160%;
    height: 150px;
    max-height: 150px;
    font-family: ${themes.primary.font.family.namu};
    margin-top: 16px;
  }

  &.input {
    margin-top: 0;
    height: 254px;
  }

  &.email {
    margin-top: 16px;
    min-height: 80px;
  }

  &.quit {
    width: 100%;
    margin-top: -30px;
    min-height: 167px;
    height: 167px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-inline: 17px;
    border-radius: 5px;
    &.title {
      max-height: 64px;
    }

    &.last {
      height: 160px;
      max-height: 160px;

      &::before {
        width: 5px;
        top: 1px;
      }

      &::after {
        top: 6px;
        right: -0.5px;
      }
    }

    &.email {
      min-height: 64px;
      height: 64px;
    }

    &.quit {
      margin-top: 10px;
      min-height: 156px;
      height: 156px;
    }

    &::before,
    &::after {
      height: 1.2px;
      width: 5px;
    }

    &::before {
      width: 6px;
      top: 0px;
      right: 2px;
      transform: rotate(-45deg);
    }

    &::after {
      top: 5px;
      right: -1.3px;
      transform: rotate(-45deg);
    }

    &.input {
      margin-top: 0;
      max-height: 254px;
      height: 254px;
      &::before {
        width: 5px;
      }
    }
    &.email {
      margin-bottom: 0px;
    }
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

  @media ${themes.primary.media.maxMobile} {
    top: -0.5px;
    left: -0.5px;
    width: 3px;
    height: 104%;
    border-radius: 3px 0 0 3px;

    &.input {
      height: 101%;
    }

    &.last {
      height: 101%;
    }

    &.quit {
      height: 101%;
    }
  }
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Disabled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;

  & > div {
    font-size: 1.125em;
    max-width: 345px;

    & span {
      color: ${themes.primary.colors.darkBlue} !important;
    }
  }

  &.disabled {
    background-color: ${themes.primary.colors.blogBackground};
    z-index: 3;
    opacity: 0.8;
  }
`;

export const CalculatorField = styled.div`
  width: 98.05%;
  min-height: 91.9%;
  height: 91.9%;
  border-style: solid;
  border-color: ${themes.primary.colors.primary};
  border-width: 1.8px 1.8px 0 0;
  border-radius: 0 8px 0 0;
  font-size: 1.666em;
  font-family: ${themes.primary.font.family.namu};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 4px 0 0.75em;
  line-height: 132%;
  margin: 6px 0px 0 4px;
  background-color: ${themes.primary.colors.blogBackground};
  max-height: 70px;
  position: relative;

  & p {
    margin: 0;
  }

  & span[style] {
    font-size: 16px;
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

  &.last {
    line-height: 160%;
    margin-top: 5px;
    padding-top: 0.5em;
    height: 97%;
    min-height: 96%;
  }

  &.quit {
    padding-top: 0.8em;
    line-height: 160%;
    min-height: 96%;
    height: 96%;
    font-size: ${themes.primary.font.size.oneAndHalf};
  }

  @media ${themes.primary.media.minPC} {
    font-size: 20px;

    &.last {
      font-size: 18px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    &.quit {
      font-size: 1.3em;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    &.last {
      font-size: 1.58em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    max-height: 57px;
    font-size: 1.346em;
    width: 98.4%;
    margin: 3px 0 0 3px;

    &.quit {
      min-height: 98%;
      height: 98%;
      padding-right: 0;

      & br {
        display: none;
      }
    }

    &.last {
      min-height: 97%;
      height: 97%;
      font-size: 1.5em;
      line-height: 160%;
    }

    & span[style] {
      font-size: 12px;
      line-height: 160%;
    }
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
  padding-inline: 1em 4px;
  position: relative;
  &.email {
    padding-block: 1.5em;
  }

  &.disabled {
    overflow: hidden;
  }

  @media ${themes.primary.media.minPC} {
    font-size: 16px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.346em;
    height: 99.2%;
    width: 98.4%;
    margin: 2px 0 0 3px;
    padding: 0 4px 0 0.5em;

    &.email {
      height: 97%;
      padding-block: 0;
      padding-right: 0;
      display: flex;
      align-items: center;
    }

    &::before {
      height: 0.35em;
    }
  }
`;

export const SubStepWrapper = styled.div``;

export const HorizontalLine = styled.hr`
  width: 97%;
  margin-left: 0;
  margin-block: 1.375em 1.1875em;
  border-color: ${themes.primary.colors.calculatorHorizontalLine};
  border-width: 0 0 1px 0;
  border-style: solid;

  @media ${themes.primary.media.maxMobile} {
    margin-block: 1.143em 0.857em;
  }
`;

export const ResultImageWrapper = styled.div`
  width: 669px;
  height: 463px;

  @media ${themes.primary.media.maxMobile} {
    width: 356px;
    height: 481px;
  }
`;

export const LastStepBackButton = styled(StepButton)`
  color: ${themes.primary.colors.primary};
`;

export const ErrorMessage = styled.div`
  position: absolute;
  font-size: 14px;
  padding-left: 2.8em;
  font-family: ${themes.primary.font.family.namu};
  line-height: 150%;
  bottom: -1.5em;
  color: ${themes.primary.colors.adminRed};

  @media ${themes.primary.media.maxMobile} {
    bottom: -1.35em;
    padding-left: 1.6em;
  }
`;

export const EmailInputWrapper = styled.div`
  position: relative;
`;

export const FinishTextWrapper = styled.div`
  font-size: 1.6666em;
  line-height: 160%;
  font-family: ${themes.primary.font.family.namu};
  padding: 1.2em 1em;

  @media ${themes.primary.media.minPC} {
    font-size: 1.5em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.35em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.55em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1.666em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.346em;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-block: 0;
    & span:nth-child(2) br {
      display: none;
    }
  }
`;

export const QuitButton = styled.button`
  position: absolute;
  right: 290px;
  bottom: 35px;
  cursor: pointer;
  padding: 1.105em 2.05em;
  border-radius: 0.52em;
  font-size: 1.5833em;
  text-transform: uppercase;
  border: 1.8px solid ${themes.primary.colors.primary};
  box-shadow: 7px 2px 0px ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.blogBackground};
  font-family: ${themes.primary.font.family.namu};
  color: ${themes.primary.colors.primary};

  @media ${themes.primary.media.minPC} {
    right: 310px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    right: 290px;
    font-size: 1.3em;
    padding: 0.8em 1.9em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    right: 310px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    right: 290px;
  }

  @media ${themes.primary.media.maxMobile} {
    box-shadow: 5.52438px 1.57839px 0px ${themes.primary.colors.primary};
    font-size: 1.346em;
    padding: 1.17em 2.09em;
    right: 165px;
    bottom: 15px;
  }
`;

export const PopoverWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  top: -6px;
  left: -11px;
  transition: opacity 0.3s;
  opacity: 0;

  @media ${themes.primary.media.minPC} {
    top: -15px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    top: 3px;
  }

  @media ${themes.primary.media.maxMobile} {
    left: auto;
    right: -15px;
    top: -65px;
  }
`;

export const PopoverContent = styled.div`
  font-size: 13px;
  line-height: 150%;
  width: 199px;
  height: 74px;
  font-family: ${themes.primary.font.family.namu};
  color: ${themes.primary.colors.blogBackground};
  background-color: ${themes.primary.colors.primary};
  text-align: center;
  padding: 7px 6px;
  border-radius: 6px;

  @media ${themes.primary.media.maxMobile} {
    font-size: 10px;
    width: 137px;
    height: 55px;
    padding: 5px 6px;
  }
`;

export const PopoverTriangle = styled.div`
  border-left: 6.5px solid transparent;
  border-right: 6.5px solid transparent;
  border-top: 6.5px solid ${themes.primary.colors.primary};
  bottom: 0px;
`;

export const CalculatorInputsFieldsWrapper = styled.div`
  padding-block: 0.53em;
  height: 100%;
  width: 100%;
  z-index: 2;
  font-family: ${themes.primary.font.family.openSans};
  font-weight: ${themes.primary.font.weight.bold};
  overflow-y: scroll;

  &.last {
    padding-block: 0;
  }

  &.input {
    padding-top: 0;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${themes.primary.colors.primary};
    border-radius: 10px;
  }

  @media ${themes.primary.media.maxMobile} {
    &.last {
      padding-block: 0.53em;
    }

    &.quit {
      height: auto;
    }
  }
`;

export const SubStepTitle = styled.h3`
  font-size: 1em;
  margin: 0 0 1em 0;
  line-height: 118.75%;

  & p {
    margin: 0;

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
  }
`;

export const InputsWrapper = styled.div`
  padding-top: 1.125em;
`;
