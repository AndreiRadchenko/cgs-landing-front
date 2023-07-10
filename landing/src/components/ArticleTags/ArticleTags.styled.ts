import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 356px;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;

  @media ${themes.primary.media.minPCFullHD} {
    max-width: none;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-block: 1.75rem 2rem;
  }
`;

export const TagItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2px 14px;
  color: white;
  background-color: ${themes.primary.colors.darkBlue};
  font-family: ${themes.primary.font.family.openSans};
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: ${themes.primary.font.size.articleDesktopTag};
  height: 26px;
  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: ${themes.primary.colors.tagBg};
    cursor: pointer;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding: 4px 14px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
    padding: 4px 12px;
  }
`;
