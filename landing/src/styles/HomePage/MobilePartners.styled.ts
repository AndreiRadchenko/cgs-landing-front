import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.section`
  display: none;
  @media ${themes.primary.media.maxMobile} {
    z-index: 12;
    display: flex;
    margin-bottom: 22px;
    position: relative;
  }

  ::before {
    content: "";
    height: 1px;
    position: absolute;
    background-color: ${themes.primary.colors.headerBorder};
    width: 130%;
    top: -12%;
    left: -10%;
  }
`;

export const PartnerImageWrapper = styled.div`
  position: relative;
  width: calc(clamp(98px, calc(98px + (100vw - 375px) * 0.31), 220px));
  height: calc(
    clamp(71px, 71px + (100vw - 375px) * ((160 - 71) / (768 - 375)), 160px)
  );
`;
