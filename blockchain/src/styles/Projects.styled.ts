import styled from "styled-components";
import themes from "../utils/themes";

export const CarouselWrapper = styled.div`
  position: relative;
  margin-top: ${themes.primary.spacing.logo};
`;

export const ProjectItemWrapper = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  height: fit-content;
  &.rightGradient {
    img {
      mask-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 1) 70%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  }
  &.leftGradient {
    img {
      mask-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 1) 70%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 39vh;
  }
`;

export const HoverBlock = styled.div``;

interface IVisibleProps {
  isVisible: number;
}

export const ImageWrapper = styled("div")<IVisibleProps>`
  position: relative;
  width: 100%;
  height: 342px;

  &::after {
    content: "";
    background: rgba(256, 256, 256, 0.95);
    position: absolute;
    transition: all 0.3s;
    width: 90%;
    height: 80%;
    top: 9%;
    left: 6%;
    margin-left: -5px;
    border-radius: 0.5rem;
    filter: blur(10px);
    opacity: ${({ isVisible }: IVisibleProps) => (isVisible ? isVisible : 0)};

    @media ${themes.primary.media.maxTabletLandScape} {
      top: 12%;
      height: 75%;
    }

    @media ${themes.primary.media.minTablet} {
      top: 22%;
      height: 55%;
    }
    @media ${themes.primary.media.maxLowScreenMobile} {
      top: 20%;
      height: 60%;
    }
  }

  @media ${themes.primary.media.maxLaptop} {
    height: 252px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    height: 242px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    height: 252px;
  }
  @media ${themes.primary.media.maxMobile} {
    height: 352px;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 252px;
  }
`;

export const PhotoText = styled("div")<IVisibleProps>`
  transition: all 0.3s;
  font-weight: ${themes.primary.font.weight.bold};
  font-size: ${themes.primary.font.size.tertiary};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80%;
  height: 80%;
  position: absolute;
  top: 5%;
  left: 9%;
  -webkit-filter: blur(0px);
  -moz-filter: blur(0px);
  -o-filter: blur(0px);
  -ms-filter: blur(13px);
  filter: blur(0px);
  opacity: ${({ isVisible }: IVisibleProps) => (isVisible ? isVisible : 0)};
  @media ${themes.primary.media.maxTabletLandScape} {
    height: 60%;
    left: 9%;
    top: 14%;
    font-size: ${themes.primary.font.size.tabletText};
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    width: 296px;
    height: 202px;
    left: 6%;
    top: 8%;
    font-size: ${themes.primary.font.size.vistaco};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.oneAndHalf};
    top: 8%;
    left: 9%;
    width: 80%;
    height: 80%;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    top: 5%;
    font-size: ${themes.primary.font.size.tertiary};
  }
`;

export const BottomTitle = styled.h3`
  cursor: pointer;
  color: ${themes.primary.colors.textColor};
  margin-top: 0.5rem;
  text-transform: uppercase;
`;

export const Arrow = styled.div`
  position: absolute;
  display: block;
  z-index: 10;
  top: 49%;
  line-height: 1;
  margin-top: -2em;
  cursor: pointer;

  &.prev {
    left: 0;
  }
  &.next {
    right: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const TitleLink = styled.a``;
