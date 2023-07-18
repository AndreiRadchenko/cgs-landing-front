import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 149px;
  height: 38px;

  @media (max-width: 1799px) {
    width: 126px;
    height: 32px;
  }

  @media (max-width: 1200px) {
    width: 102px;
    height: 26px;
  }

  @media (max-width: 768px) {
    width: 126px;
    height: 32px;
  }

  &.calculator {
    width: 106px !important;
    height: 100% !important;
  }

  &.footer {
    width: 149px;
    height: 38px;
    @media (max-width: 1799px) {
      width: 126px;
      height: 32px;
    }
    @media (max-width: 1280px) {
      width: 102px;
      height: 26px;
    }
    @media (max-width: 1110px) {
      width: 89.7px;
      height: 23px;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
