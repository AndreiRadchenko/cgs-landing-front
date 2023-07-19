import styled from "styled-components";
import themes from "../../utils/themes";

export const Navigationwrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 3.125rem;
  margin-right: 10px;

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
