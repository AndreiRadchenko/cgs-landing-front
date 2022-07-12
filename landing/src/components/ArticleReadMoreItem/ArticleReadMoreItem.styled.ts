import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 458px;
  margin-bottom: 50px;
  &:last-child {
    margin-right: 0;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    width: 100%;
  }
`;

export const NoImageArticleReadMore = styled.div`
  width: 100%;
  height: 230px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  min-height: 230px;
`;

export const TitleWrapper = styled.div`
  display: flex;
`;

export const TitleDiv = styled.div`
  width: 0px;
`;

export const Title = styled.p`
  font-size: ${themes.primary.font.size.quaternary};
  font-weight: ${themes.primary.font.weight.extraBold};
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 96px;
  &:hover {
    cursor: pointer;
    color: ${themes.primary.colors.darkBlue};
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin: 0;
    margin-top: 10px;
  }
`;

export const Description = styled.p`
  font-size: ${themes.primary.font.size.oneAndHalf};
  font-weight: ${themes.primary.font.weight.normal};
  line-height: 160%;
  margin-bottom: 0;
  overflow: hidden;
  width: 100%;
  min-height: 100px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media ${themes.primary.media.maxTabletPortrait} {
    margin: 0;
    margin-top: 10px;
  }
`;

export const ArticleWatchIcon = styled.img`
  width: 22px;
  height: 14px;
`;

export const ViewsWrapper = styled.div`
  width: 58px;
  display: flex;
  align-items: center;
  margin: 20px 0 12px 0;
`;

export const AmountViews = styled.span`
  font-size: ${themes.primary.font.size.tertiary};
  font-family: ${themes.primary.font.family.openSans};
  margin-left: 9px;
`;

export const ReadMoreButton = styled.button`
  margin-top: 30px;
  border: 0;
  outline: 0;
  padding: 8px 15px;
  background-color: ${themes.primary.colors.primary};
  color: ${themes.primary.colors.secondary};
  font-weight: ${themes.primary.font.weight.extraBold};
  letter-spacing: 0.7px;
  cursor: pointer;

  max-width: 115px;

  &:hover (Title) {
    color: ${themes.primary.colors.darkBlue};
  }
`;
