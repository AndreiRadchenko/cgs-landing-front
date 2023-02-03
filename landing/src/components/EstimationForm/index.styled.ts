import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import themes from "../../utils/themes";

export const Box = styled.div<{
  margin?: string;
  padding?: string;
  justify?: string;
  align?: string;
  changeDirection?: boolean;
  wrap?: string;
  width?: string;
}>`
  display: flex;
  margin: ${({ margin }) => (margin ? margin : 0)};
  padding: ${({ padding }) => (padding ? padding : 0)};
  justify-content: ${({ justify }) => (justify ? justify : "normal")};
  align-items: ${({ align }) => (align ? align : "normal")};
  flex-direction: ${({ changeDirection }) =>
    !changeDirection ? "row" : "column"};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "wrap")};
  width: ${({ width }) => (width ? width : "auto")};
`;

export const WrapperStyledH = styled.div`
  margin-top: 77px;
  width: 100%;
  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const StyledH = styled.div`
  font-family: "NAMU";
  font-weight: 900;
  font-size: ${themes.primary.font.size.ourWorkText};
  line-height: 47px;
  text-transform: uppercase;
  color: #000000;
`;

export const Marquee = styled.div`
  gap: 20px;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: 20px;
  height: 60px;
`;
const scroll = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const MarqueeContent = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 100%;
  gap: 20px;
  animation: ${scroll} 80s infinite linear;
  text-align: center;
  white-space: nowrap;
`;

export const MobleTextWrapper = styled.div`
  font-size: 24px;
`;

export const StyledButton = styled.button`
  background: #f2ea86;
  position: relative;
  box-shadow: 0px 0px 0px #000000;
  padding: 0 36px;
  border: 1.8px solid #000000;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  height: 67px;
  align-items: center;
  font-family: "NAMU";
  font-weight: 900;
  font-size: 19px;
  transition: box-shadow 1s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 7px 2px 0px #000000;
  }
  &:active {
    box-shadow: 7px 2px 0px #000000;
  }
  &:focus {
    box-shadow: 7px 2px 0px #000000;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    padding: 0 20px;
  }
`;

export const Container = styled.div`
  height: 100vh;
`;

export const ContainerDate = styled.div`
  position: relative;
  min-height: calc(100vh - 57px - 56px);
  overflow: hidden;
  @media (max-width: 1280px) {
    min-height: calc(100vh - 57px - 46px);
  }

  @media (max-width: 1097px) {
    min-height: calc(100vh - 57px - 39px);
  }

  @media (max-width: 767px) {
    min-height: calc(100vh - 93px - 101px);
  }
`;

export const ImageBlock = styled.div`
  position: absolute;
  z-index: 1;

  &.plusFP {
    top: 310px;
  }
  &.playerFP {
    top: 162px;
    right: 0;
  }

  &.rouletteFP {
    top: 986px;
  }

  &.lineFP {
    top: 1364px;
    right: 0;
  }
  &.clockSP {
    top: 577px;
  }

  &.lineSP {
    right: 0;
  }

  &.cameraTP {
    top: 278px;
    right: 0;
  }
  &.speakerTP {
    top: 700px;
  }

  &.iconTBackgroundTP {
    top: 1300px;
    left: 34px;
  }

  &.lineTP {
    top: 1500px;
    right: 0;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    display: none;
  }
`;

export const PopoverWrapper = styled.div<{ isShow: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: opacity 0.3s;
  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  top: -81px;
`;

export const PopoverContent = styled.div`
  font-size: 13px;
  line-height: 150%;
  width: 230px;

  font-family: ${themes.primary.font.family.namu};
  color: ${themes.primary.colors.blogBackground};
  background-color: ${themes.primary.colors.primary};
  text-align: center;
  padding: 17px 6px;
  border-radius: 6px;
  font-size: 12px;
`;

export const PopoverTriangle = styled.div`
  border-left: 6.5px solid transparent;
  border-right: 6.5px solid transparent;
  border-top: 6.5px solid ${themes.primary.colors.primary};
  bottom: 0px;
`;

export const ButtonBlock = styled.div`
  position: relative;
`;
