import styled from "styled-components";
import themes from "../utils/themes";
import { cubeScale, propeller } from "./Animations.styled";

export const LoaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${themes.primary.colors.blogBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Cube = styled.div`
  background-color: ${themes.primary.colors.darkedGrayBack};
  width: 20px;
  height: 20px;

  &.middle {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    transform-origin: center;
    background-color: ${themes.primary.colors.comment};
    animation: ${cubeScale} 2.5s ease-in infinite;
    z-index: 2;
  }
`;

export const LoaderRow = styled.div`
  width: 72px;
  padding-block: 10px;
  position: relative;
  display: flex;
`;

export const EdgeCubeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  animation: ${propeller} 1.25s ease-in-out infinite;
`;
