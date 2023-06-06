import styled, { css } from "styled-components";
import themes from "../../../../utils/themes";
import { slideRight, slideDownText } from "../../../../styles/Animations.styled";
import { ISlide } from "../../../../types/Decoration.types";

interface IsFirst {
  isFirst: boolean
}

export const Wrapper = styled.div`
  margin-top: 100px;
  width: 100%;
`;

export const Title = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.serviceSubtitle};
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 56px;
  text-transform: uppercase;
  margin-bottom: 65px;

  @media (max-width: 768px) {
    font-size: 34px;
  }

  @media (max-width: 475px) {
    font-size: 24px;
    margin-bottom: 30px;
    line-height: 32px;
  }
`;

export const Content = styled.div`
  @media (max-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 5fr;
  }

  @media (max-width: 475px) {
    grid-template-columns: 1fr 7fr;
  }
`;

export const Numbers = styled.div`
  display: flex;
  position: relative;

  div{
      p{
        font-family: ${themes.primary.font.family.namu};
        font-size: ${themes.primary.font.size.secondary};
        font-weight: ${themes.primary.font.weight.heavy};
        position: absolute;
        bottom: 0em;
        margin-left: 1.5em;
      }

      img{
        vertical-align: middle;
      }
  }

  @media (max-width: 2560px) {
    width: 100px;
    div{
      p{
        margin-left: 1.2em;
        bottom: -0.2em;
      }
    }
  }

  @media (max-width: 1560px) {
    div{
      p{
        margin-left: 1.5em;
        bottom: 0;
      }
    }
  }

  @media (max-width: 992px) {
    flex-direction: column;
    div{
      p{
        position: relative;
        margin: 0;
        margin-left: 1.3em;
        bottom: 0.1em;
      }
    }
  }

  @media (max-width: 768px) {
    width: 50px;

    div{
      p{
        margin: 0;
        margin-left: 8px;
      }
    }
  }

  @media (max-width: 475px) {
    margin-left: -15px;
    div{
      p{
        font-size: 14px;
        margin-left: 16px;
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 475px) {
    img:first-child{
      width: 22px;
    }

    img:last-of-type{
      width: 4px;
    }
  }
`;

export const BlockContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const BeforeBlock = styled.div<IsFirst>`
  display: ${({ isFirst }) => (isFirst ? "none" : "block")};
  content: "";
  height: 1px;
  background-color: #8F8E93;
  top: 50%;
  margin: 0 17px;

  @media (max-width: 2560px) {
    width: 10vw;
  }

  @media (max-width: 1920px) {
    width: 9vw;
  }

  @media (max-width: 1560px) {
    width: 8vw;
  }

  @media (max-width: 1200px) {
    width: 7vw;
  }

  @media (max-width: 1050px) {
    width: 6vw;
  }

  @media (max-width: 992px) {
    width: 2px;
    height: 4em;
    margin: 6px 0;
  }

  @media (max-width: 475px) {
    width: 1px;
    height: 24px;
  }
`;

export const AfterBlock = styled.div`
  content: "";
  height: 1px;
  background-color: #8F8E93;
  top: 50%;
  margin: 0 17px;

  @media (max-width: 2560px) {
    width: 10vw;
  }

  @media (max-width: 1920px) {
    width: 9vw;
  }

  @media (max-width: 1560px) {
    width: 8vw;
  }

  @media (max-width: 1200px) {
    width: 7vw;
  }

  @media (max-width: 1050px) {
    width: 6vw;
  }

  @media (max-width: 992px) {
    width: 2px;
    height: 4em;
    margin: 6px 0;
  }

  @media (max-width: 475px) {
    width: 1px;
    height: 24px;
  }
`;

export const ContentItems = styled.div<ISlide>`
  width: 21vw;

  &.scrolled {
      transform-origin: left center;
      animation: ${({ ind }) =>
      css`
          ${slideRight} 700ms ${ind * 100}ms ease-in forwards
      `};
  }

  @media (max-width: 2560px) {
      &:not(:first-child) {
      margin-left: 4.7vw;
      }
  }

  @media (max-width: 1920px) {
      &:not(:first-child) {
      margin-left: 5vw;
      }
  }

  @media (max-width: 1560px) {
      &:not(:first-child) {
      margin-left: 3vw;
      }
  }

  @media (max-width: 1440px) {
      &:not(:first-child) {
      margin-left: 5.4vw;
      }
  }

  @media (max-width: 992px) {
    width: 100%;
    margin-bottom: 6em;

    &.scrolled {
      transform-origin: left center;
      animation: ${({ ind }) =>
      css`
          ${slideDownText} 700ms ${ind * 100}ms ease-in forwards
      `};
    }

    &:not(:first-child) {
    margin-left: 0;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 6em;
  }

  @media (max-width: 475px) {
    margin-bottom: 2.6em;
  }
`;

export const TextContent = styled.div`
  display: flex;
  position: relative;
  margin-top: 22px;

  @media (max-width: 992px) {
    flex-direction: column;
    margin-top: 0px;
  }
`;

export const Subtitle = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.buttonText};
  font-weight: ${themes.primary.font.weight.heavy};
  margin-bottom: 8px;

  @media (max-width: 992px) {
    margin-bottom: 30px;
    font-size: 30px;
  }

  @media (max-width: 475px) {
    margin-bottom: 12px;
    font-size: 18px;
  }
`;

export const Text = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.primary};
  font-weight: ${themes.primary.font.weight.heavy};

  @media (max-width: 992px) {
    font-size: 28px;
  }
  @media (max-width: 475px) {
    font-size: 16px;
  }
`;