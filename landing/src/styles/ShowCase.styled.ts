import styled from "styled-components";
import themes from "../utils/themes";

export const SliderWrapper = styled.div`
  position: relative;
  margin-top: 14.583em;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  overflow: hidden;
  & .mySwiper {
    margin-left: 28px;
  }

  @media ${themes.primary.media.maxMobile} {
    & .mySwiper {
      margin-left: 7px;
    }
    margin-top: 0;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    & .mySwiper {
      margin-left: 10px;
    }
  }
`;

export const SliderHeader = styled.h1`
  position: relative;
  left: -3%;
  white-space: nowrap;
  font-size: 2.777vw;
  margin-bottom: 1em;

  & span {
    margin-right: 37px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 6.4516vw;
    left: 0;

    & span {
      margin-right: 22px;
    }
  }
`;

export const SlideContainer = styled.div`
  width: 36.166em;
  height: 33.916em;
  border: 1px solid ${themes.primary.colors.comment};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${themes.primary.media.minPC} {
    width: 34.166em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 30.288em;
    height: 32.5em;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 20.916em;
  margin-bottom: 0.5em;

  padding: 2.33em 1.833em 0;

  &.text {
    border-bottom: 1px solid ${themes.primary.colors.comment};
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 0;
  }
`;

export const ContentWrapper = styled.div`
  padding: 0 1.833em 2.33em;

  @media ${themes.primary.media.maxMobile} {
    padding: 0 1.153em 1.923em;
  }
`;

export const ProjectTitle = styled.h2`
  margin: 0;
  margin-bottom: 0.25em;
  font-size: 2em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.538em;
  }
`;
export const ProjectScope = styled.div`
  font-size: 1.333em;
  color: ${themes.primary.colors.comment};
  line-height: 130%;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.153em;
  }
`;
export const ProjectRating = styled.div``;

export const Star = styled.img`
  width: 20px;
  height: 18px;
  @media (max-width: 1250px) {
    width: 15px;
  }
  @media ${themes.primary.media.minPC} {
    width: 1.668em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 17px;
    height: 16px;
  }
`;
export const ProjectLinkButton = styled.a`
  text-decoration: none;
  color: ${themes.primary.colors.secondary};
  letter-spacing: 0.03em;
  padding: 7px 15px;
  font-size: 1.166em;
  background-color: ${themes.primary.colors.primary};

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.346em;
  }
`;

export const BottomContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HoverText = styled.div`
  font-size: 1.5em;
  line-height: 160%;

  @media ${themes.primary.media.maxMobile} {
    padding: 1.089em 1.025em;
  }
`;
