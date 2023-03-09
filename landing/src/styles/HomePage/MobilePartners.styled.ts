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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Image = styled.img`
  @media ${themes.primary.media.maxMobile} {
    width: 75%;
    max-height: 85%;
    object-fit: contain;
  }
  @media ${themes.primary.media.maxLowestScreenMobile} {
    width: 95%;
    object-fit: contain;
  }
`;
