import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 36px;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 0;
    align-items: center;
  }
`;

export const AuthorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AuthorImage = styled.img`
  max-width: 60px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
`;

export const AuthorInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const AuthorName = styled.div`
  font-family: ${themes.primary.font.family.openSans};
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: 1rem;
  margin-top: 6px;

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DatesContainer = styled.div`
  margin-top: 16px;

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
  }
`;

export const StatisticWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  @media ${themes.primary.media.maxMobile} {
    width: 115px;
  }
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
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
