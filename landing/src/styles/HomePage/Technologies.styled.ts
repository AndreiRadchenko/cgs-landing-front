import styled from "styled-components";
import themes from "../../utils/themes";

type PropsWithId = {
  idx: number;
};

export const TechnologyContainer = styled.section`
  position: relative;
  user-select: none;
  font-family: ${themes.primary.font.family.namu};
  margin-bottom: 10em;

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 4.375rem;
    margin-top: 2.3em;
  }
`;

export const TechTitle = styled.h2`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 140%;
  font-size: ${themes.primary.font.size.aboutUsSubtitle};
  margin: 0;
  padding-bottom: 20px;
  text-transform: uppercase;
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.reviewTitle};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5rem;
    padding-bottom: 0;
    line-height: 233%;
    display: none;
  }
`;

export const TitleWrapper = styled.div<PropsWithId>`
  @media ${themes.primary.media.maxMobile} {
    position: absolute;

    top: 0;
    top: -2em;
    display: flex;
    align-items: center;
    left: ${(props) =>
      props.idx === 0 ? `${0.8 + 3.2}em` : `${props.idx + 3.2}em`};
  }
`;

export const TechnologyRow = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 40px;
  column-gap: 260px;

  @media ${themes.primary.media.maxTabletPortrait} {
    column-gap: 60px;
  }
  @media ${themes.primary.media.maxMobile} {
    grid-template-columns: 1fr;
    row-gap: 0;
    column-gap: 0;
    margin-top: 14em;

    & > article:last-child > div:nth-child(5) {
      padding-bottom: 0;
    }
  }
`;

export const CategoryContainer = styled.article`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media ${themes.primary.media.minPCFullHD} {
    width: fit-content;
    &:nth-child(n) {
      justify-self: center;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    display: none;
    width: 100%;
    &:nth-child(n) {
      justify-self: center;
    }
    &:last-child img {
      margin-bottom: 0;
    }

    &:last-child h2 {
      border-bottom: solid 3.5px ${themes.primary.colors.primary};
    }
    margin-top: -8em;
  }
`;

export const CategoryTitle = styled.h2<PropsWithId>`
  font-weight: ${themes.primary.font.weight.heavy};
  text-transform: uppercase;
  text-decoration: underline;
  text-decoration-thickness: 2.5px;
  text-decoration-color: ${themes.primary.colors.primary};
  text-underline-offset: 0.3em;
  font-size: 2.84em;
  text-align: center;
  position: relative;
  margin-bottom: 20px;
  z-index: 10;
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.oneAndNine};
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    border: none;
    background-color: ${themes.primary.colors.blogBackground};
    border-radius: 8px;
    border: solid 3.5px ${themes.primary.colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-inline: 1rem;
    text-decoration: none;
    margin: 0;
    ::before {
      content: "";
      width: 7em;
      position: absolute;
      height: 3em;
      border: solid 3.5px ${themes.primary.colors.primary};
      background-color: ${themes.primary.colors.blogBackground};
      border-bottom: solid 3.5px ${themes.primary.colors.blogBackground};
      border-top-width: 4px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom-width: 0px;
      transform: perspective(200px) rotateX(40deg);
      -webkit-transform: perspective(200px) rotateX(40deg);
      left: ${(props) => `${props.idx + 2}em`};
      top: -2.952em;
      z-index: -10;
    }
    padding-left: 2em;
    margin-top: 2.5em;
    height: 6em;
    &.open-title {
      height: 1.5em;
      &.blockchain-title::before {
        width: 10em;
      }
    }
    &.blockchain-title::before {
      width: 10em;
      left: ${(props) => `${props.idx + 1.75}em`};
    }
  }
`;

export const CategorySubtitle = styled.p`
  margin-top: 0;
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;
  margin-bottom: 0.2em;
  &.blockchain {
    margin-bottom: 50px;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.vistaco};
  }

  @media (max-width: 1260px) {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const CategoryImgWrapper = styled.div`
  max-width: 98.9%;
  width: 100%;
  height: 25.4vw;

  position: relative;

  @media ${themes.primary.media.maxMobile} {
    display: none;
    max-width: none;
    width: 98.9%;
    margin-bottom: 3.375rem;
    height: 300px;

    &.open {
      display: block;
      padding: 50px 0;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 200px;
  }
`;

export const ArrowContainer = styled.div`
  position: absolute;
  left: 47%;
  top: calc(50% + 40px);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  width: 75px;
  height: 75px;

  @media ${themes.primary.media.minPC} {
    left: 50%;
  }

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const Arrow = styled.svg`
  display: none;
  @media ${themes.primary.media.maxMobile} {
    display: block;
    transition: 0.3s;

    &.open {
      transform: rotate(180deg);
    }
  }
`;
