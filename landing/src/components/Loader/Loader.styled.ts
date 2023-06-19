import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay-ts";
import themes from "../../utils/themes";

export const PortfolioStyledLoader = styled(LoadingOverlay)`
  .MyLoader_overlay {
    position: absolute;
    z-index: 1;
    background: ${themes.primary.colors.blogBackground};
    width: 100%;
    min-height: 2130px;
  }

  &.MyLoader_wrapper--active {
    overflow: hidden;
    width: 100%;
    min-height: 2130px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    .MyLoader_overlay {
      min-height: 2200px;
    }

    &.MyLoader_wrapper--active {
      min-height: 2200px;
    }
  }
`;

export const StyledLoader = styled(LoadingOverlay)`
  &.showCase {
    .MyLoader_overlay {
      background: transparent;
      height: 200px;
      width: 200px;
      margin-top: -200px;
      margin-left: 250px;
    }
  }

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
  & .MyLoader_content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    height: 100vh;
    width: 100%;
  }

  @media ${themes.primary.media.maxMobile} {
    & .MyLoader_content {
      position: fixed;
    }

    &.showCase {
      .MyLoader_overlay {
        margin-top: -250px;
        margin-left: 80px;
      }
    }
  }
`;

export const ComponentStyledLoader = styled(LoadingOverlay)`
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
  .MyLoader_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    color: black;
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
