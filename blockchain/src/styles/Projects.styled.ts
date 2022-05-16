﻿import styled from "styled-components";
import themes from "../utils/themes";

export const CarouselWrapper = styled.div`
  position: relative;
  margin-top: ${themes.primary.spacing.primaryMarginTop};
`;

export const ProjectItemWrapper = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  height: fit-content;
`;

export const HoverBlock = styled.div``;

interface IVisibleProps {
  isVisible: number;
}

export const ImageWrapper = styled("div")<IVisibleProps>`
  &::after {
    content: "";
    background: rgba(256, 256, 256, 0.8);
    position: absolute;
    transition: all 0.3s;
    width: 90%;
    height: 80%;
    top: 5%;
    left: 6%;
    margin-left: -5px;
    border-radius: 0.5rem;
    filter: blur(5px);
    opacity: ${({ isVisible }: IVisibleProps) => (isVisible ? isVisible : 0)};
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
`;

export const BottomTitle = styled.h3`
  color: white;
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
`;
