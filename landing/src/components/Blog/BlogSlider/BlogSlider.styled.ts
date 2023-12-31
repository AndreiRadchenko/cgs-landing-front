import styled from "styled-components";
import themes from "../../../utils/themes";

export const SliderWrapper = styled("div")`
  position: relative;
  overflow: hidden;
  display: flex;
  padding: 40px 32px 30px 51px;
  width: 66.738vw;
  height: 100%;

  @media ${themes.primary.media.minPCFullHD} {
    padding: 50px 40px 40px 51px;
    width: 67.85vw;
    height: 100%;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    padding: 30px 12px 16px;
    width: 96vw;
  }

  .swiper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    @media ${themes.primary.media.maxMobile} {
      overflow: visible;
    }
  }

  .swiper-pagination {
    position: static;
    text-align: start;
    margin-top: 32px;
    line-height: 10px;

    @media ${themes.primary.media.minPCFullHD} {
      margin-top: 40px;
    }
    @media ${themes.primary.media.maxMobile} {
      display: none;
    }
  }

  .swiper-pagination-bullet {
    height: 10px;
    width: 10px;
    border: 1px solid #000;
    border-radius: 0;
    background-color: transparent;
    opacity: 10;
    :nth-child(1) {
      margin-left: 0;
    }
    @media ${themes.primary.media.minPCFullHD} {
      height: 12px;
      width: 12px;
    }
    @media ${themes.primary.media.maxTabletPortrait} {
      height: 8.5px;
      width: 8px;
    }
  }

  .swiper-pagination-bullet-active {
    color: #fff;
    background: #000;
  }
`;
