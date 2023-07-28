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
  }
  @media ${themes.primary.media.minPCFullHD} {
  }
  @media ${themes.primary.media.onlyLaptop} {
    margin-bottom: 0;
  }
  @media ${themes.primary.media.onlyTabletLandScape} {
  }
  @media ${themes.primary.media.onlyTabletPortrait} {
  }
`;

export const Title = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
  & a {
    font-size: 2.5em;
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

    @media ${themes.primary.media.minPCFullHD} {
      font-size: 1.98em;
    }

    @media ${themes.primary.media.maxLaptop} {
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

export const Description = styled.p`
  font-size: 1.7em;
  font-weight: ${themes.primary.font.weight.normal};
  line-height: 160%;
  margin: 0;
  overflow: hidden;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  & * {
    margin: 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.31em;
  }
`;

export const ArticleWatchIcon = styled.img`
  width: 22px;
  height: 14px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 26px;
    height: 23px;
  }
`;

export const ViewsWrapper = styled.div`
  width: 58px;
  display: flex;
  align-items: center;
  margin: 24px 0 8px 0;

  @media ${themes.primary.media.minPCFullHD} {
    margin: 30px 0 10px 0;
  }
`;

export const AmountViews = styled.span`
  font-size: ${themes.primary.font.size.tertiary};
  font-family: ${themes.primary.font.family.openSans};
  margin-left: 9px;
  color: #8F8E93;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 0.9em;
  }
`;

export const ReadMoreButton = styled.button`
  margin-top: 32px;
  border: 2px solid ${themes.primary.colors.primary};
  outline: 0;
  padding: 3.3px 16px;
  background-color: ${themes.primary.colors.primary};
  color: ${themes.primary.colors.secondary} !important;
  font-family: ${themes.primary.font.family.openSans};
  font-weight: ${themes.primary.font.weight.semiBold};
  letter-spacing: 0.7px;
  cursor: pointer;
  max-width: 128px;
  font-size: 1.335em;
  transition: all 0.3s;

  a {
    border: 0;
    color: ${themes.primary.colors.secondary};
  }

  &:hover {
    background-color: transparent;
    a {
      color: ${themes.primary.colors.primary};
    }
  }

  @media ${themes.primary.media.minPC} {
    font-size: 1.18em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 160px;
    line-height: 100%;
    font-size: 1.05em;
    padding: 8px 20px;
    margin-top: 40px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    max-width: 140px;
  }

  @media ${themes.primary.media.maxMobile} {
    a {
      color: #fff !important;
    }
  }
`;
