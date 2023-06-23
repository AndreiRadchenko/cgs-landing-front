import styled from "styled-components";
import themes from "../../utils/themes";
import buttonHoverBg from "../../../public/HomePageDecoration/buttonHoverBg.png";
import { buttonHover, cursorBlinking } from "../Animations.styled";

export interface IFontSize {
  size: string;
  padding: string;
}

export const RowContainer = styled.div`
  display: flex;
  gap: 0.5em;
`;

export const BlackButton = styled.a<IFontSize>`
  font-family: inherit;
  font-size: ${({ size }) => size};
  padding: ${({ padding }) => padding};
  cursor: pointer;
  position: relative;
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.primary};
  line-height: 99%;
  display: inline-block;
  border: 2px solid ${themes.primary.colors.primary};
  transition: all 0.3s;
  &.footer {
    margin-top: 10px;
    height: 4vw;
    margin-left: 20px;
  }

  &.main {
    background: transparent;
    color: ${themes.primary.colors.primary};
    background-size: 229px;
    transition-delay: unset;
  }

  &.scrolled {
    background: ${themes.primary.colors.primary} url(${buttonHoverBg.src});
    color: ${themes.primary.colors.secondary};
    transition-delay: 0.8s;
    background-size: 229px;
    animation: ${buttonHover} 1s steps(8) forwards;

    &.removeBg {
      transition-delay: unset;
      background-image: none;
    }
  }

  &:hover {
    transition-delay: unset;
    background: none;
    color: ${themes.primary.colors.primary};
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding: 0.8em 1em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 14px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 1.25rem 1.375rem;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    &.seeAll {
      & > div {
        width: 25px;
        height: 25px;
      }
    }
  }

  & path {
    transition: transform 1s ease-in-out;
  }
  & path:nth-child(1) {
    transform: translate(-36px, 36px);
  }
  &:hover {
    & path:nth-child(1) {
      transform: translate(0px, 0px);
    }
    & path:nth-child(2) {
      transform: translate(36px, -36px);
    }
  }
`;

export const LongArrow = styled.img`
  display: inline-block;
  margin-left: auto;
  padding-top: 1%;
  width: 30vw;
  flex-grow: 1;

  @media ${themes.primary.media.minLaptop} {
    width: 20vw;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 524px;
  }

  @media (max-width: 1360px) {
    width: 35vw;
  }

  @media (max-width: 1370px) {
    width: 28vw;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 22vw;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-left: 0;
    width: 110px;
    flex-grow: 0;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    width: 28vw;
  }
`;

export const Subtitle = styled.div`
  text-transform: uppercase;
  font-size: 5.14vw;
  letter-spacing: 0.05em;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin: 32px 0 15px;

  & u {
    text-decoration-thickness: 3px;
    text-underline-offset: 7px;
  }

  &.footer {
    margin-top: ${themes.primary.spacing.tertiary};
    margin-bottom: 171px;
    line-height: 132%;
    display: inline-block;
    vertical-align: middle;

    & br {
      display: none;
    }
  }
  span {
    &.blue {
      color: ${themes.primary.colors.darkBlue};
      height: 5vw;
      white-space: nowrap;
    }

    &.tech {
      display: inline-block;
      width: 29.305vw;
      height: 5.5vw;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 5em;

    span {
      &.tech {
        width: 5.79166em;
        height: 1.3229em;
      }
    }
  }

  @media (max-width: 1370px) {
    &.small {
      font-size: 4.5vw;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 4.75vw;

    &.small {
      font-size: 4.4vw;
    }
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 4vw;

    &.small {
      font-size: 3.75vw;
    }

    span {
      &.tech {
        width: 24.305vw;
        height: 5vw;
      }
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 6.5vw;
    row-gap: 0px;

    & u {
      text-decoration-thickness: 1px;
      text-underline-offset: 5px;
    }

    &.mobileTextOnFilm {
      p{
        margin: 0;
        font-size: 5vw;
        width: 100%;
      }  
    }

    &.small {
      margin-top: 0;
      font-size: 5vw;
      margin-bottom: 14px;
    }

    &.footer {
      & br {
        display: block;
      }
    }

    & span {
      white-space: normal !important;

      &.blue {
        height: 5vw;
      }

      &.tech {
        width: 5.8em;
        height: 5vw;
      }
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 1.75rem;
    &.small {
      line-height: 132%;
      font-size: 2rem;
      display: inline-block;
      white-space: nowrap;
    }
    &.small div {
      flex-wrap: wrap;
    }

    &.mobileTextOnFilm {
      p{
        margin: 0;
        font-size: 32px;
        width: 353px;
      }  
    }

    &.techMobile {
      font-size: 32px;
      width: 100px;
    }

    span {
      &.range {
        display: inline-block;
        width: 70.805vw;
      }
    }
  }

  @media (max-width: 430px) {
    &.footer {
      margin-top: 110px;
      font-size: 2rem;
      margin-bottom: 100px;
    }
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    font-size: 1.475rem;
    &.small {
      line-height: 132%;
      font-size: 7.5vw;
    }
    &.small div {
      flex-wrap: nowrap;
    }
  }
`;

export const NextTech = styled.section`
  display: none;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 5.5em;
    display: block;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-top: 10.5em;
  }
`;

export const FilmText = styled.div`
  max-width: 42%;
  font-size: ${themes.primary.font.size.feedbackName};
  line-height: 160%;
  margin-bottom: 0.5em;

  @media ${themes.primary.media.maxMobile} {
    max-width: 98.5%;
    font-size: 1.6em;
  }
`;

export const SideOppositeContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 15px;
  @media ${themes.primary.media.maxMobile} {
    justify-content: left;
  }
`;
