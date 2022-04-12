import styled from "styled-components";

export const Navigationwrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 3rem;
  & div :after {
    content: none;
  }
  & div {
    position: static;
    width: auto;
  }
  & .swiper-button-prev {
    margin-right: 2.5rem;
  }
`;
