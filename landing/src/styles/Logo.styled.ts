import styled from "styled-components";
import themes from "../utils/themes";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 106px;
  height: 100%;

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
  width: 34px;
  height: 32px;

  @media (max-width: 1280px) {
    width: 28px;
    height: 26px;
  }

  @media (max-width: 1110px) {
    width: 23px;
    height: 22px;
    font-size: 12px;
  }
`;
