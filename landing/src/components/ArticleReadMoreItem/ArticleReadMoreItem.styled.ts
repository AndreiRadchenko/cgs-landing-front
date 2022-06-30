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
    margin-bottom: 79px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  @media ${themes.primary.media.maxTabletPortrait} {
    margin-bottom: 15px;
  }
`;

export const Title = styled.p`
  font-size: ${themes.primary.font.size.quaternary};
  font-weight: ${themes.primary.font.weight.semiBold};
  width: 100%;
  &:hover {
    cursor: pointer;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    margin: 0;
    margin-top: 10px;
  }
`;

export const Description = styled.p`
  font-size: ${themes.primary.font.size.linkText};
  font-weight: ${themes.primary.font.weight.normal};
  line-height: 160%;
  @media ${themes.primary.media.maxTabletPortrait} {
    margin: 0;
    margin-top: 10px;
  }
`;
