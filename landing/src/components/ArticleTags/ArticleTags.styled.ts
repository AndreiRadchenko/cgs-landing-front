import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 356px;
  flex-wrap: wrap;
  gap: 12px;
  column-gap: 8px;
  row-gap: 10px;
  margin-top: 16px;

  @media ${themes.primary.media.minPCFullHD} {
    max-width: none;
    column-gap: 10px;
    margin-top: 20px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-block: 1.75rem 2rem;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;

export const TagItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 3px 10px;
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
    padding: 3.75px 12.5px;
    font-size: 1.05em;
    height: 32.5px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 14px;
    padding: 4px 12px;
    height: 24px;
  }
`;
