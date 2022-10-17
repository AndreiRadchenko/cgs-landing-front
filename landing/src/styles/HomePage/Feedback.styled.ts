import styled from "styled-components";
import themes from "../../utils/themes";

export const Navigationwrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 3.125rem;

  & .swiper-button-prev {
    margin-right: 2.5rem;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: 1.25rem;
  }
  @media ${themes.primary.media.maxMobile} {
    margin-top: 0;
    margin-bottom: 0.25rem;
  }
  @media ${themes.primary.media.minTablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 10px;

  @media ${themes.primary.media.minTablet} {
    column-gap: 7px;
  }
`;

export const ButtonWrapper = styled.div`
  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 18px;
    display: none;
  }
`;

export const LeftArrowWrapper = styled.div`
  position: relative;
  width: 36px;
  height: 36px;

  @media ${themes.primary.media.minTablet} {
    width: 20px;
    height: 20px;
  }
`;

export const RightArrowWrapper = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
  @media ${themes.primary.media.minTablet} {
    width: 36px;
    height: 36px;
  }
`;
