import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 458px;
  margin-bottom: 50px;
  &:last-child {
    margin-right: 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 100%;
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
  height: 250px;

  @media ${themes.primary.media.minPCFullHD} {
    height: 307px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    height: auto;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  @media ${themes.primary.media.minPC} {
    height: 145px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    height: 170px;
  }
  @media ${themes.primary.media.onlyLaptop} {
    height: 90px;
    margin-bottom: 0;
  }
  @media ${themes.primary.media.onlyTabletLandScape} {
    height: 98px;
  }
  @media ${themes.primary.media.onlyTabletPortrait} {
    height: 90px;
  }
`;

export const Title = styled.p`
  & a {
    font-size: ${themes.primary.font.size.quaternary};
    font-weight: ${themes.primary.font.weight.extraBold};
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    height: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    border: 0;
    color: ${themes.primary.colors.blogDarkText};

    &:hover {
      cursor: pointer;
      color: ${themes.primary.colors.darkBlue};
    }

    @media ${themes.primary.media.maxLaptop} {
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
`;

export const Description = styled.p`
  font-size: ${themes.primary.font.size.oneAndHalf};
  font-weight: ${themes.primary.font.weight.normal};
  line-height: 160%;
  margin-bottom: 0;
  overflow: hidden;
  width: 100%;
  height: 105px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  & * {
    margin: 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 140px;
  }

  @media ${themes.primary.media.onlyLaptop} {
    height: 90px;
  }
  @media ${themes.primary.media.onlyTabletLandScape} {
    height: 98px;
  }
  @media ${themes.primary.media.onlyTabletPortrait} {
    height: 90px;
  }
`;

export const ArticleWatchIcon = styled.img`
  width: 22px;
  height: 14px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 1.58em;
    height: 1em;
  }
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
  font-family: ${themes.primary.font.family.openSans};
  font-weight: ${themes.primary.font.weight.semiBold};
  letter-spacing: 0.7px;
  cursor: pointer;
  max-width: 115px;
  font-size: 14px;
  a {
    border: 0;
    color: ${themes.primary.colors.secondary};
  }

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 8.5em;
    font-size: 1.166em;
    padding: 0.66em 1.25em;
  }
`;
