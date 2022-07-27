import styled from "styled-components";
import Decoration from "../../components/Decoration/Decoration";
import themes from "../../utils/themes";

export const TechnologyContainer = styled.section`
  position: relative;
  user-select: none;
  font-family: ${themes.primary.font.family.namu};
  margin-bottom: 8.5em;
`;

export const TechTitle = styled.h2`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 140%;
  font-size: 2.5em;
  margin: 0;
  padding-bottom: 50px;
  text-transform: uppercase;
`;

export const TechnologyRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 60px;

  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    margin: 3em auto 3em auto;
    width: auto;

    .web {
      order: 1;
      margin-right: 0;
    }

    .mobile {
      order: 3;
    }

    .server {
      order: 2;
      margin-right: 0;
    }

    .blockchain {
      margin-left: 0;
      order: 4;
    }
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
  width: 80%;

  &:nth-child(2n) {
    justify-self: flex-end;
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
  text-decoration-thickness: 2px ${themes.primary.colors.primary};
  text-underline-offset: 0.3em;
  font-size: ${themes.primary.font.size.techCategory};
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const CategorySubtitle = styled.p`
  margin-top: 0;
  font-size: ${themes.primary.font.size.tertiary};
  line-height: 160%;
  &.blockchain {
    margin-bottom: 50px;
  }
`;

export const CategoryImage = styled.img`
  width: 80%;
  height: auto;
`;
export const CategoryLine = styled.div`
  border: 1px solid #000;
  width: 56px;
`;

export const ArrowContainer = styled.div`
  position: absolute;
  left: 50%;
  top: calc(50% + 25px);
  transform: translate(-50%, -50%);
  width: 61px;
  height: 61px;
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

export const DecorationTitle = styled(Decoration)`
  position: absolute;
  z-index: -1;
  height: 0.9em;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);

  &.web {
    width: 4ch;
    left: 55%;
  }

  &.mobile {
    width: 6ch;
    left: 40%;
  }

  &.server {
    width: 6ch;
  }

  &.blockchain {
    left: 48%;
    width: 9.5ch;
  }
`;
