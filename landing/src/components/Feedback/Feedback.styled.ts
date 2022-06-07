import styled from "styled-components";
import themes from "../../utils/themes";

export const Navigationwrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 3.125rem;
  margin-top: 3rem;
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
`;

export const ArrowContainer = styled.div`
  display: flex;
  margin-right: 0.625rem;
  @media ${themes.primary.media.minTablet} {
    margin: 3rem 0 0 0.53rem;
  }

  &.blog {
    justify-content: space-between;
    width: 90px;
    @media ${themes.primary.media.minTablet} {
      margin: 0;
    }
  }
`;
