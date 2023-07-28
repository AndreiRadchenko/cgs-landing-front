import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.section`
  display: flex;
  column-gap: 24px;
  align-items: center;
  width: 356px;

  &.mobile {
    display: none;
  }

  @media ${themes.primary.media.minPCFullHD} {
    column-gap: 30px;
    width: 430px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    align-items: center;
    justify-content: center;
  }

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    row-gap: 1.375rem;
    align-items: flex-start;

    &.web {
      display: none;
    }

    &.mobile {
      margin-top: 10px;
      display: flex;
    }
  }
`;

export const Text = styled.div`
  font-size: ${themes.primary.font.size.articleTagDescription};
  font-weight: ${themes.primary.font.weight.semiBold};
  font-family: ${themes.primary.font.family.openSans};
  min-width: 125px;
  margin-right: 5px;
  color: #272C2F;

  &.articleShare {
    font-size: 2.1em;
  }

  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.articleTagDescription};

    &.articleShare {
      font-size: 1.8em;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: ${themes.primary.font.size.articleSubtitle};

    &.articleShare {
      font-size: 1.615em;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    &.articleShare {
      font-size: 1.8em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 20px;
  }
`;

export const IconImage = styled.img`
  max-width: 26px;
  max-height: 26px;
  object-fit: contain;
`;

export const IconBlock = styled.div`
  border: 0.6px solid rgba(0, 0, 0, 0.25);
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${themes.primary.colors.primary};
    cursor: pointer;
  }
  &:hover ${IconImage} {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(205deg)
      brightness(111%) contrast(101%);
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  column-gap: 16px;

  @media ${themes.primary.media.minPCFullHD} {
    column-gap: 20px;
  }
`;
