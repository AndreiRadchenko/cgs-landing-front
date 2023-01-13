import styled from "styled-components";
import themes from "../../utils/themes";

export const BookModal = styled.div`
  position: fixed;
  z-index: 36;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${themes.primary.colors.modalFormBackground};
  overflow: auto;
  background: linear-gradient(
    180deg,
    ${themes.primary.colors.careerBackground} 0.8 100%,
    ${themes.primary.colors.careerBackground} 0 114.26%
  );
  &.open {
    display: none;
  }
`;

export const BookModalContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
`;

export const BookModalContent = styled.div`
  width: 499px;
  height: 508px;
  background: ${themes.primary.colors.blogBackground};
  border: 2px solid ${themes.primary.colors.primary};
  position: relative;

  @media (max-width: 570px) {
    width: 345px;
    height: 380px;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    width: 300px;
    height: 380px;
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: -1;
  margin: 12px 0 0 12px;
  border: 2px solid ${themes.primary.colors.black};

  @media (max-width: 570px) {
    margin: 6px 0 0 6px;
  }
`;

export const BlackBox = styled.div`
  width: 100%;
  height: 50%;
  background: ${themes.primary.colors.black};
  outline: 1px solid ${themes.primary.colors.black};
`;

export const WhiteBox = styled.div`
  width: 100%;
  height: 50%;
  background: ${themes.primary.colors.careerBackground};
`;
