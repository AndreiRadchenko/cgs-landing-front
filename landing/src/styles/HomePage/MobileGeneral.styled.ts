import styled from "styled-components";
import themes from "../../utils/themes";
import buttonHoverBg from "../../../public/HomePageDecoration/buttonHoverBg.png";
import { buttonHover } from "../Animations.styled";

export interface IFontSize {
  size: string;
  padding: string;
}

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

    &.seeAll {
      padding: 17px 15px;
      width: 203px;
      height: 58px;
      font-size: 22px;
      line-height: 99%;
      text-align: center;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    &.seeAll {
      width: 178px;
      font-size: 16px;
      padding-top: 18px;
      height: 54px;
      text-align: center;
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
    row-gap: 0;
    margin-top: 30px;

    & u {
      text-decoration-thickness: 1px;
      text-underline-offset: 5px;
    }

    &.techMobile {
      br {
        display: none;
      }
      p {
        line-height: 111%;
        width: 500px;
        margin: 0;
        font-size: 56px;
        letter-spacing: 2.8px;
      }
    }

    &.mobileTextOnFilm {
      margin-top: 77px;
      margin-bottom: 30px;

      p {
        margin: 0;
        width: 100%;
        font-size: 56px;
        line-height: 132%;
        letter-spacing: 2.8px;

        & span:first-child > span {
          display: inline-block;
          min-width: 295px;
        }
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

      &.nextTechMobile {
        display: block;
      }

      &.blue {
        height: 5vw;
      }

      &.tech {
        width: 5.8em;
        height: 5vw;
      }
    }
  }

  @media ${themes.primary.media.minTablet} {
    &.techMobile {
      p {
        width: 340px;
        font-size: 32px;
        line-height: 111%; /* 35.52px */
        letter-spacing: 1.6px;
      }
    }

    &.mobileTextOnFilm {
      margin-top: 67px;
      margin-bottom: 27px;
      p {
        font-size: 32px;
        line-height: 132%; /* 35.52px */
        letter-spacing: 1.6px;

        & span:first-child > span {
          display: inline-block;
          min-width: 295px;
        }
      }
    }
  }

  @media (max-width: 500px) {
    &.techMobile {
      p {
        width: 320px;
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
      p {
        margin: 0;
        font-size: 32px;
        width: 353px;

        & span:first-child > span {
          display: inline;
        }
      }
    }

    &.techMobile {
      font-size: 32px;
      width: 100%;
      line-height: 113%;
      letter-spacing: 1.6px;
      p {
        margin: 0;
        width: 280px;
      }
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
    margin-top: 0;
    display: block;
  }

  @media ${themes.primary.media.minTablet} {
    margin-top: 11.25em;
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
