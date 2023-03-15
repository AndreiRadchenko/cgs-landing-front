import styled from "styled-components";
import themes from "../../utils/themes";

type PropsWithId = {
  idx: number;
};

export const InvisibleTitle = styled.div`
  align-items: center;
  justify-content: space-between;
  > h2 {
    font-size: 1em;
  }
  opacity: 0;
  display: flex;
`;

const getOffsetByInd = (idx: number, smallPhones?: boolean) => {
  if (idx === 0) return smallPhones ? "3.2" : "4.8";
  if (idx === 1) return smallPhones ? "5" : "6.5";
  if (idx === 3) return smallPhones ? "8" : "9.6";
  return smallPhones ? `${idx + 4.3}` : `${idx + 6}`;
};

export const TitleInnerWrapper = styled.div<PropsWithId>`
  display: flex;
  position: absolute;
  left: ${({ idx }) => `${getOffsetByInd(idx, true)}em`};
  top: 0.5em;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2em;
  column-gap: 5px;
  -webkit-tap-highlight-color: transparent;

  @media (min-width: 475px) {
    left: ${({ idx }) => `${getOffsetByInd(idx)}em`};
  }
`;

export const CategoryContainer = styled.article`
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
  }
`;

export const CategoryTitleWrapper = styled.div<PropsWithId>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
  padding: 0.5em 1em;
  height: 3em;
  border: solid 2.4px ${themes.primary.colors.primary};
  border-bottom: solid 2.4px ${themes.primary.colors.blogBackground};
  border-top-width: 3.5px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-width: 0px;
  transform: perspective(200px) rotateX(40deg);
  -webkit-transform: perspective(200px) rotateX(40deg);
  font-size: ${themes.primary.font.size.oneAndNine};
  font-weight: ${themes.primary.font.weight.heavy};
  text-transform: uppercase;
  margin-left: ${(props) => `${props.idx + 2}em`};

  ::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: -0.2px;
    height: 15px;
    right: 0px;
    background-color: ${themes.primary.colors.blogBackground};
  }

  &.blockchain {
    transform: perspective(400px) rotateX(40deg);
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-left: ${(props) => `${props.idx + 1}em`};
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

export const FolderBody = styled.div`
  height: 12em;
  width: 100%;
  border-radius: 8px;
  border: solid 2.4px ${themes.primary.colors.primary};
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
