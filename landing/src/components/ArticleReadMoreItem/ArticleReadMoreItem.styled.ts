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
  a {
    background-color: inherit;
    text-decoration: none;
    color: ${themes.primary.colors.blogBackground};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.p`
  font-size: ${themes.primary.font.size.quaternary};
  font-weight: ${themes.primary.font.weight.semiBold};
  width: 100%;
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  @media ${themes.primary.media.maxTabletPortrait} {
    margin: 0;
    margin-top: 10px;
  }
`;

export const ViewsWrapper = styled.div`
  width: 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 12px 0;
`;

export const AmountViews = styled.span`
  font-size: ${themes.primary.font.size.tertiary};
  font-family: ${themes.primary.font.family.openSans};
`;

export const ReadMoreButton = styled.button`
  margin-top: 30px;
  border: 0;
  outline: 0;
  padding: 8px 15px;
  background-color: ${themes.primary.colors.primary};
  color: ${themes.primary.colors.secondary};
  font-weight: ${themes.primary.font.weight.semiBold};
  letter-spacing: 0.7px;
  cursor: pointer;
`;
