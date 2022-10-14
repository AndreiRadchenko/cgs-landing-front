import styled, { keyframes } from "styled-components";
import themes from "../utils/themes";

export const LoaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Cube = styled.div`
  background-color: ${themes.primary.colors.portfolioLoaderCube};
  width: 16px;
  height: 16px;

  &.middle {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;

export const LoaderRow = styled.div`
  width: 57px;
  padding-block: 10px;
  position: relative;
  display: flex;
  justify-content: space-between;
`;
