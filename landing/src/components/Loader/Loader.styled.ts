import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay-ts";
import themes from "../../utils/themes";

export const StyledLoader = styled(LoadingOverlay)`
  .MyLoader_overlay {
    background: ${themes.primary.colors.blogBackground};
    width: 100%;
    height: 100%;
  }
  &.MyLoader_wrapper--active {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
`;

export const StyledSpinner = styled.div`
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  width: 48px;
  height: 48px;
  border: 5px dotted ${themes.primary.colors.loaderSpinner};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
`;

export const LoaderStub = styled.div`
  background: ${themes.primary.colors.blogBackground};
  width: 100vw;
  height: 100vh;
`;
