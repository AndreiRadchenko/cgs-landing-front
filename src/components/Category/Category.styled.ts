import styled from "styled-components";
import themes from "../../utils/themes";

export const CategoryContainer = styled.div`
  height: 26em;
  margin: 0 1.688rem 1.688rem 0;
  border-radius: 6px;
  flex: 0 1 20em;
  position: relative;
  transition: 300ms;
  cursor: pointer;

  @media ${themes.primary.media.maxMobile} {
    flex: 0 1 20em;
    justify-content: center;
  }

  &:nth-child(odd) {
    background-color: #a9cdf5;
    &:hover {
      background-color: ${themes.primary.colors.linkBlue};
    }
  }

  &:nth-child(2) {
    background-color: #c7fb9c;
    &:hover {
      background-color: ${themes.primary.colors.cardDarkGreen};
    }
  }

  &:last-child {
    background-color: #c7fb9c;
    &:hover {
      background-color: ${themes.primary.colors.cardDarkGreen};
    }
  }

  &:hover {
    transform: rotate(7deg);
  }

  &:not(:nth-child(2)):nth-child(2n + 2) {
    background-color: #ffefd8;
    border-radius: 60px;
    cursor: default;

    &:hover {
      transform: rotate(0deg);
    }

    @media ${themes.primary.media.maxTabletPortrait} {
      display: none;
    }
  }

  &:nth-child(4) {
    @media ${themes.primary.media.onlyTabletLandScape} {
      display: none;
    }
  }

  @media ${themes.primary.media.minPC} {
    flex: 0 1 21em;
    height: 28em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    flex: 0 1 19em;
    height: 23em;
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    flex: 0 1 16.5em;
    height: 22em;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    flex: 0 1 17em;
    height: 23em;
  }

  @media ${themes.primary.media.maxMobile} {
    flex: 0 1 19em;
    height: 27em;
    margin: 0.625rem;
  }

  @media (max-width: 543px) {
    flex: 0 1 40%;
    height: 23em;
  }
`;

export const WrapperDescription = styled.div`
  padding: ${themes.primary.spacing.septenary}
    ${themes.primary.spacing.tertiary};
  height: 100%;
`;

export const TitleSpecialization = styled.h2`
  margin: 0 0 0.7em 0;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.extraBold};
`;

export const DescriptionSpecialization = styled.span`
  font-family: ${themes.primary.font.family.gilroy};
  font-size: ${themes.primary.font.size.aboutUsCardText};

  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.tertiary};
  }
`;

export const IconWrapperSpecialization = styled.div`
  position: absolute;
  bottom: 3%;
  right: 5%;
`;
