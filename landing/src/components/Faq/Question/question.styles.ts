import styled from "styled-components";
import themes from "../../../utils/themes";

interface IIsOpen {
  isOpen: boolean;
  isImage?: boolean;
}

export const QuestionImage = styled.img`
  width: 100%;
  height: fit-content;
  max-width: 500px;
`;
export const QuestionContainer = styled.div<IIsOpen>`
  border-bottom: ${({ isOpen }) =>
    isOpen && `1px solid ${themes.primary.colors.faqBorder}`};
  &:hover {
    color: ${themes.primary.colors.darkBlue};
  }
`;

export const TogglePlus = styled.div`
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 2;
  width: 13px;
`;

export const QuestionTitleContainer = styled.div<IIsOpen>`
  background-color: ${({ isOpen }) => isOpen && themes.primary.colors.darkBlue};
  color: ${({ isOpen }) => isOpen && themes.primary.colors.secondary};
  width: 100%;
  padding: 17px;
  font-size: ${themes.primary.font.size.faqQuestion};
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 1px solid ${themes.primary.colors.faqBorder};
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.buttonText};
  }
`;

export const QuestionTitle = styled.div``;

export const QuestionContentContainer = styled.div<IIsOpen>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  font-size: ${themes.primary.font.size.faqAnswer};
  padding: 20px 23px;
  color: ${themes.primary.colors.primary};
  line-height: 160%;
  column-gap: 15px;
  justify-content: space-between;
  @media ${themes.primary.media.maxTabletLandScape} {
    flex-wrap: wrap;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.linkText};
  }
`;

export const QuestionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
