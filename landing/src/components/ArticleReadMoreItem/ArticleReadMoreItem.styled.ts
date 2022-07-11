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

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  @media ${themes.primary.media.maxTabletPortrait} {
    margin-bottom: 15px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.p`
  font-size: ${themes.primary.font.size.quaternary};
  font-weight: ${themes.primary.font.weight.semiBold};
  width: 100%;
  margin: 0;
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
  margin: 18px 0;
`;

export const AmountViews = styled.span`
  font-size: 0.95em;
  font-family: ${themes.primary.font.family.openSans};
`;
