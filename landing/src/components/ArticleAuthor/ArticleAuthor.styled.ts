import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
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
  height: 100%;
  font-size: ${themes.primary.font.size.aboutUsCardText};
`;

export const AuthorNameWrapper = styled.div`
  font-family: ${themes.primary.font.family.namu};
  display: flex;
`;

export const AuthorName = styled.div`
  display: flex;
  align-items: flex-start;
  font-weight: ${themes.primary.font.weight.bold};
  margin-right: 4px;
`;

export const AuthorType = styled.div`
  font-weight: ${themes.primary.font.weight.normal};
`;

export const AuthorDate = styled.div`
  font-size: ${themes.primary.font.size.vistaco};
  color: ${themes.primary.colors.lightGrey};
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.primary};
`;

export const TimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 110px;
`;

export const TimerImage = styled.img``;

export const Time = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.aboutUsCardText};
  font-weight: ${themes.primary.font.weight.medium};
  color: ${themes.primary.colors.blogDarkText};
`;
