import styled from "styled-components";
import themes from "../../utils/themes";

export const CalculatorPreviewWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 60%;
  height: 18.833em;
  z-index: 5;
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

  &:hover + div {
    left: 0;
  }

  &::after {
    content: "";
    width: 52px;
    height: 3px;
    border: 1.8px solid ${themes.primary.colors.primary};
    position: absolute;
    bottom: -4.5px;
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
