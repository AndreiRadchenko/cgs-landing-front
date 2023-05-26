import styled from "styled-components";
import themes from "../utils/themes";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 127px;
  height: 38px;

  &.calculator {
    width: 106px !important;
    height: 100% !important;
  }

  @media ${themes.primary.media.maxPCFullHD} {
    width: 106px;
    height: 32px;
  }

  @media (max-width: 1280px) {
    width: 95px;
    height: 26px;
  }

  @media (max-width: 1110px) {
    width: 85px;
    height: 22px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 142px;
    height: 29px;
  }
`;

export const LogoText = styled.p`
  margin: 0;
  margin-left: 9px;
  font-size: 0.75rem;
  line-height: 0.75rem;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  text-shadow: -0.15px -0.15px 0 ${themes.primary.colors.primary},
    0.15px -0.15px 0 ${themes.primary.colors.primary},
    -0.15px 0.15px 0 ${themes.primary.colors.primary},
    0.15px 0.15px 0 ${themes.primary.colors.primary};

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 16px;
    margin-left: 5px;
  }

  @media (max-width: 1280px) {
    font-size: 10px;
    text-shadow: none;
  }

  @media (max-width: 1110px) {
    font-size: 8.5px;
    margin-left: 6px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.125rem;
    line-height: 22px;
    text-shadow: none;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
