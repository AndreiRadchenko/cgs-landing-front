import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-right: 12px;
`;

export const AuthorInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 6px;
  height: 100%;
  font-size: ${themes.primary.font.size.aboutUsCardText};
`;

export const AuthorNameWrapper = styled.div`
  font-family: ${themes.primary.font.family.openSans};
  display: flex;
`;

export const AuthorName = styled.div`
  display: flex;
  align-items: flex-start;
  font-weight: ${themes.primary.font.weight.semiBold};
  margin-right: 4px;
`;

export const AuthorType = styled.div`
  font-weight: ${themes.primary.font.weight.semiBold};
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
