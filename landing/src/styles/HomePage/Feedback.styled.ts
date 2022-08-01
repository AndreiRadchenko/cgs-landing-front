import styled from "styled-components";
import themes from "../../utils/themes";

export const Navigationwrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 3.125rem;
  margin-top: 40px;
  & div :after {
    content: none;
  }
  & div {
    position: static;
  }
  & .swiper-button-prev {
    margin-right: 2.5rem;
  }
  @media ${themes.primary.media.minTablet} {
    flex-direction: column;
    align-items: baseline;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: 20px;
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 10px;

  @media ${themes.primary.media.minTablet} {
    margin: 3rem 0 0 0.53rem;
  }
`;
