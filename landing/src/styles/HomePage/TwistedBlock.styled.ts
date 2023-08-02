import styled from "styled-components";

import themes from "../../utils/themes";

interface IContainerProps {
  animate: boolean;
}

export const TwistedBlockContainer = styled.div`
  margin: 67px auto 138px;

  @media (max-width: 1200px) {
    margin: 80px auto 60px;
  }

  @media (max-width: 768px) {
    margin: 32px auto 45px;
  }
`;

export const TextContainer = styled.div<IContainerProps>`
  position: relative;
  width: 100%;
  height: 210px;
  border: 1px solid black;
  box-shadow: 7px 2px 0px 0px #000;
  background-color: #f1efed;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 32px;
  }
`;

export const TwistedText = styled.div`
  position: absolute;
  text-align: center;
  font-size: 3.33em;
  padding: 32px;
  line-height: normal;
  z-index: 2;
  & p {
    margin: 0;
    span {
      color: inherit;
      transition: color 1.5s cubic-bezier(0.97, 0, 0.395, 0.995);
      transition-delay: 200ms;
    }
  }
  &.black-span p span {
    color: black !important;
  }
`;

export const TwistedDiv = styled.div`
  display: block;
  height: 100%;
  width: 16.6667%;
  position: relative;
  float: left;
  margin-left: 0px;
  z-index: 1;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: #c2bfbc;
    bottom: 100%;
    position: absolute;
    transform-origin: center bottom;
    transform: matrix3d(1, 0, 0, 0, 0, 0, -1, -0.003, 0, 1, 0, 0, 0, 0, 0, 1);
    transition: all 1s cubic-bezier(0.97, 0, 0.395, 0.995);
  }
  & .gradient {
    position: absolute;
    width: 100%;
    top: 100%;
    height: 100%;
    /* background-image: linear-gradient(
      90deg,
      rgba(199, 236, 192, 1) 0%,
      rgba(137, 163, 209, 1) 100%
    ); */
    z-index: 2;
    transform-origin: center top;
    opacity: 1;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.003, 0, -208, 0, 1);
    transition: all 1s cubic-bezier(0.97, 0, 0.395, 0.995);
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    top: 100%;
    height: 100%;
    background: #9f7f5e;
    transform-origin: center top;
    z-index: 1;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.003, 0, -208, 0, 1);
    transition: all 1s cubic-bezier(0.97, 0, 0.395, 0.995);
  }
  &.scrolled {
    &::before {
      background: #f1efed;
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0.003, 0, 208, 0, 1);
    }
    & .gradient {
      opacity: 0;
      transform: matrix3d(1, 0, 0, 0, 0, 0, -1, 0.003, 0, 1, 0, 0, 0, 0, 0, 1);
    }
    &::after {
      background: #dedae1;
      transform: matrix3d(1, 0, 0, 0, 0, 0, -1, 0.003, 0, 1, 0, 0, 0, 0, 0, 1);
    }
  }
  &:nth-of-type(2):before,
  &:nth-of-type(2):after,
  &:nth-of-type(2) .gradient {
    transition-delay: 0.2s;
  }
  &:nth-of-type(3):before,
  &:nth-of-type(3):after,
  &:nth-of-type(3) .gradient {
    transition-delay: 0.3s;
  }
  &:nth-of-type(4):before,
  &:nth-of-type(4):after,
  &:nth-of-type(4) .gradient {
    transition-delay: 0.4s;
  }
  &:nth-of-type(5):before,
  &:nth-of-type(5):after,
  &:nth-of-type(5) .gradient {
    transition-delay: 0.5s;
  }
  &:nth-of-type(6):before,
  &:nth-of-type(6):after,
  &:nth-of-type(6) .gradient {
    transition-delay: 0.6s;
  }
  &:nth-of-type(7):before,
  &:nth-of-type(7):after,
  &:nth-of-type(7) .gradient {
    transition-delay: 0.7s;
  }
  &:nth-of-type(2) .gradient {
    background-image: linear-gradient(
      90deg,
      rgba(199, 236, 192, 1) 0%,
      rgba(189, 224, 195, 1) 100%
    );
  }
  &:nth-of-type(3) .gradient {
    background-image: linear-gradient(
      90deg,
      rgba(189, 224, 195, 1) 0%,
      rgba(178, 212, 198, 1) 100%
    );
  }
  &:nth-of-type(4) .gradient {
    background-image: linear-gradient(
      90deg,
      rgba(178, 212, 198, 1) 0%,
      rgba(168, 200, 201, 1) 100%
    );
  }
  &:nth-of-type(5) .gradient {
    background-image: linear-gradient(
      90deg,
      rgba(168, 200, 201, 1) 0%,
      rgba(158, 187, 203, 1) 100%
    );
  }
  &:nth-of-type(6) .gradient {
    background-image: linear-gradient(
      90deg,
      rgba(158, 187, 203, 1) 0%,
      rgba(147, 175, 206, 1) 100%
    );
  }
  &:nth-of-type(7) .gradient {
    background-image: linear-gradient(
      90deg,
      rgba(147, 175, 206, 1) 0%,
      rgba(137, 163, 209, 1) 100%
    );
  }
`;
