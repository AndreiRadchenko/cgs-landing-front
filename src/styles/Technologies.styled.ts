import styled from 'styled-components';
import Decoration from '../components/Decoration/Decoration';
import themes from '../utils/themes';

export const TechnologyContainer = styled.section`
  user-select: none;
  font-family: ${themes.primary.font.family.roboto};
  margin-bottom: 200px;
`;

export const TechnologyRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 3em 0 3em auto;

  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    margin: 3em auto 3em auto;
    width: auto;

    .web {
      order: 1;
    }

    .mobile {
      order: 3;
    }

    .server {
      order: 2;
    }

    .blockchain {
      order: 4;
    }
  }
`;

export const CategoryImgWrapper = styled.div`
  width: 323px;
  display: inline-block;
  text-align: center;
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  width: 45%;

  &:nth-child(-n + 2) {
    flex-direction: row;
    justify-content: flex-end;

    .descriptionWrapper {
      margin-left: 2em;
    }
  }
  &:nth-child(n + 3) {
    flex-direction: row-reverse;
    justify-content: flex-end;

    .descriptionWrapper {
      margin-right: 2em;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 400px;

    &:nth-child(odd),
    &:nth-child(even) {
      justify-content: center;
    }
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 17.5rem;
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
  font-size: 1.8em;
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const CategoryLine = styled.div`
  border: 1px solid #000;
  width: 56px;
`;

export const CategoryTechnology = styled.span`
  display: block;
  line-height: 175%;
  font-size: 1.125em;

  &:first-child {
    margin-top: 1em;
  }
`;

export const DecorationTitle = styled(Decoration)`
  position: absolute;
  z-index: -1;
  height: 0.9em;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);

  &.web {
    width: 4ch;
  }

  &.mobile {
    width: 6ch;
  }

  &.server {
    width: 6ch;
  }

  &.blockchain {
    width: 9.5ch;
  }
`;
