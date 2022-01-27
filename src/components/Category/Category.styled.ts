import styled from "styled-components";
import themes from "../../utils/themes";

export const CategoryContainer = styled.div`
  height: 26em;
  margin: 0 27px 27px 0;
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

    @media ${themes.primary.media.maxMobile} {
      display: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    flex: 0 1 17em;
    margin: 20px 0;
  }
`;

export const WrapperDescription = styled.div`
  padding: ${themes.primary.spacing.septenary}
    ${themes.primary.spacing.tertiary};
  height: 100%;
`;

export const TitleSpecialization = styled.h2`
  margin: 0 0 0.7em 0;
`;

export const DescriptionSpecialization = styled.span`
  font-size: ${themes.primary.font.size.vistaco};

  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.tertiary};
  }
`;

export const IconWrapperSpecialization = styled.div`
  position: absolute;
  bottom: 5%;
  right: 5%;
`;
