import styled from "styled-components";
import themes from "../utils/themes";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 106px;
  height: 32px;
  position: relative;

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

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.125rem;
    line-height: 22px;
  }
`;
