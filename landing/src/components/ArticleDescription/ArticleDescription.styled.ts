import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  font-family: ${themes.primary.font.family.openSans};
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SubtitleTag = styled.div`
  font-weight: ${themes.primary.font.weight.bold};
  font-size: ${themes.primary.font.size.articleTagDescription};
  color: ${themes.primary.colors.quinary};
  margin-right: 12px;
`;

export const Title = styled.div`
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: ${themes.primary.font.size.quaternary};
`;

export const Description = styled.p`
  margin-top: 14px;
  font-weight: ${themes.primary.font.weight.light};
  font-size: ${themes.primary.font.size.articleSubtitle};
  font-family: ${themes.primary.font.family.openSans};
`;
