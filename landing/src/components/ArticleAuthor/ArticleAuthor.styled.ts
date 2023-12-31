import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 32px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 40px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 0;
    align-items: center;
    width: 105%;
  }
`;

export const AuthorImage = styled.img`
  max-width: 5em;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 62px;
    height: 62px;
    margin-right: 15px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }
`;

export const AuthorInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media ${themes.primary.media.minPCFullHD} {
    justify-content: center;
  }
`;

export const AuthorName = styled.div`
  font-family: ${themes.primary.font.family.openSans};
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: 1.333em;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.05em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DatesContainer = styled.div``;

export const StatisticWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 16px;

  @media ${themes.primary.media.maxMobile} {
    width: 115px;
    column-gap: 8px;
  }
`;

export const SpaceBetween = styled.div`
  font-family: ${themes.primary.font.family.openSans};
  display: flex;
  justify-content: flex-start;
  column-gap: 16px;
  align-items: center;
  flex-wrap: wrap;
  width: 325px;
  margin-top: 6px;

  & > div:not(:first-child) div {
    font-weight: 600;
  }

  @media ${themes.primary.media.minPC} {
    width: 370px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 400px;
    column-gap: 20px;
    margin-top: 8px;
  }

  @media (min-width: 2400px) {
    width: 500px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 285px;
    column-gap: 8px;
    margin-top: 5.5px;
    & > div:first-child {
      div {
        font-size: 12px;
        font-weight: 400;
        white-space: nowrap;
      }
    }
    & > div:not(:first-child) div {
      font-size: 14px;
    }
  }

  @media (max-width: 374px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const AuthorMetaInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AuthorViewsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 62px;
`;

export const AuthorViewsImage = styled.img``;

export const AuthorViews = styled.p`
  font-family: ${themes.primary.font.family.openSans};
  font-size: ${themes.primary.font.size.authorDate};
  font-weight: ${themes.primary.font.weight.normal};
  color: ${themes.primary.colors.authorGrey};
  margin: 0;
  margin-left: 3px;
  @media ${themes.primary.media.minPCFullHD} {
    font-size: ${themes.primary.font.size.quinary};
  }
`;

export const AuthorDate = styled.div`
  font-weight: ${themes.primary.font.weight.normal};
  color: ${themes.primary.colors.authorGrey};
  font-family: ${themes.primary.font.family.openSans};
  font-size: ${themes.primary.font.size.authorDate};
  @media ${themes.primary.media.minPCFullHD} {
    font-size: ${themes.primary.font.size.quinary};
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 110px;
`;

export const TimerImage = styled.img``;

export const Time = styled.p`
  font-family: ${themes.primary.font.family.openSans};
  font-size: ${themes.primary.font.size.authorDate};
  font-weight: ${themes.primary.font.weight.normal};
  color: ${themes.primary.colors.authorGrey};
  margin: 0;
  @media ${themes.primary.media.minPCFullHD} {
    font-size: ${themes.primary.font.size.quinary};
  }
`;
