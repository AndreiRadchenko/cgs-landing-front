import styled from "styled-components";
import themes from "../../utils/themes";

export const TechnologyContainer = styled.section`
  position: relative;
  user-select: none;
  font-family: ${themes.primary.font.family.namu};
  margin-bottom: 12.9em;

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 11.25rem;
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
  }
`;

export const TechnologyRow = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 40px;
  column-gap: 260px;

  @media ${themes.primary.media.maxMobile} {
    grid-template-columns: 1fr;
    row-gap: 0;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    column-gap: 60px;
  }
`;

export const CategoryImgWrapper = styled.div`
  width: 20.188em;
  height: 250px;
  position: relative;
  display: inline-block;
  text-align: center;
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    &:nth-child(n) {
      justify-self: center;
    }
  }
`;

export const CategoryDescriptionWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
`;

export const CategoryTechnologiesWrapper = styled.div``;

export const CategoryTitle = styled.h2`
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
    border: 1px solid ${themes.primary.colors.headerBorder};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-inline: 1rem;
    height: 95px;
    text-decoration: none;
    margin: 0;
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

  @media ${themes.primary.media.maxTabletPortrait} {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const CategoryImage = styled.img<{ isOpen?: boolean }>`
  max-width: 98.9%;
  height: auto;

  @media ${themes.primary.media.maxMobile} {
    display: none;
    max-width: none;
    width: 98.9%;
    margin-bottom: 3.375rem;

    &.open {
      display: block;
    }
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
