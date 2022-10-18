import styled from "styled-components";
import themes from "../../utils/themes";

type PropsWithId = {
  idx: number;
};

export const TechnologyContainer = styled.section`
  position: relative;
  user-select: none;
  font-family: ${themes.primary.font.family.namu};
  margin-bottom: 12.9em;

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

export const InvisibleTitle = styled.div`
  align-items: center;
  justify-content: space-between;
  > h2 {
    font-size: 1em;
  }
  opacity: 0;
  display: flex;
`;

export const TitleInnerWrapper = styled.div<PropsWithId>`
  display: flex;
  position: absolute;
  left: ${(props) =>
    props.idx === 0
      ? `${0.5 + 4.3}em`
      : props.idx === 3
      ? `${4 + 4.3}em`
      : `${props.idx + 4.3}em`};
  top: 0.5em;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2em;
  column-gap: 5px;
  @media (min-width: 475px) {
    left: ${(props) =>
      props.idx === 0
        ? `${0.5 + 4.3}em`
        : props.idx === 3
        ? `${5.8 + 4.3}em`
        : `${props.idx + 5.8}em`};
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
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  display: none;
  z-index: 5;
  position: relative;
  &.open-catrgory {
    margin-bottom: 2em;
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: fit-content;
    &:nth-child(n) {
      justify-self: center;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    display: flex;
    width: 100%;
    margin-top: -10em;
    &:nth-child(n) {
      justify-self: center;
    }
    &:last-child img {
      margin-bottom: 0;
    }

    /*     &:last-child h2 {
      border-bottom: solid 3.5px ${themes.primary.colors.primary};
    } */
  }
`;

export const CategoryDescriptionWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
`;

export const TitleContent = styled.div`
  transform-style: preserve-3d;
`;

export const CategoryTitleWrapper = styled.div<PropsWithId>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
  padding: 0.5em 1em;
  height: 3em;
  border: solid 3.5px ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.blogBackground};
  border-bottom: solid 3.5px ${themes.primary.colors.blogBackground};
  border-top-width: 4px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-width: 0px;
  -webkit-transform: perspective(200px) rotateX(40deg);
  font-size: ${themes.primary.font.size.oneAndNine};
  font-weight: ${themes.primary.font.weight.heavy};
  text-transform: uppercase;
  margin-left: ${(props) => `${props.idx + 2}em`};

  ::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 15px;
    background-color: ${themes.primary.colors.blogBackground};
    width: 100.2%;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-left: ${(props) =>
      props.idx === 0 ? `${1 + 1}em` : `${props.idx + 1}em`};
  }
`;

export const CategoryTitle = styled.h2`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: ${themes.primary.font.weight.heavy};
  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 1.5em;
  }
`;

export const InvisibleCategoryTitle = styled.h2`
  opacity: 0;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: ${themes.primary.font.weight.heavy};
  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 1.5em;
  }
`;

export const FolderBody = styled.div`
  height: 12em;
  width: 100%;
  border-radius: 8px;
  border: solid 3.5px ${themes.primary.colors.primary};
  margin-top: -0.6em;
  background-color: ${themes.primary.colors.blogBackground};
  z-index: -10;
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

export const CategoryTechnology = styled.span`
  display: block;
  line-height: 175%;
  font-size: 1.125em;
  font-weight: ${themes.primary.font.weight.light};

  &:first-child {
    margin-top: 1em;
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
