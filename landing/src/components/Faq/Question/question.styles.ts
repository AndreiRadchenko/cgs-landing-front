import styled from "styled-components";
import themes from "../../../utils/themes";

interface IIsOpen {
  isOpen: boolean;
  isImage?: boolean;
}

export const QuestionImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 500px;
`;
export const QuestionContainer = styled.div<IIsOpen>`
  border-bottom: ${({ isOpen }) =>
    isOpen && `1px solid ${themes.primary.colors.faqBorder}`};
`;

export const QuestionTitleContainer = styled.div<IIsOpen>`
  background-color: ${({ isOpen }) => isOpen && themes.primary.colors.darkBlue};
  color: ${({ isOpen }) => isOpen && themes.primary.colors.secondary};
  width: 100%;
  padding: 17px;
  font-size: ${themes.primary.font.size.faqQuestion};
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${themes.primary.colors.faqBorder};
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.articleTagDescription};
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
`;

export const QuestionTitle = styled.div``;
export const QuestionDescription = styled.div``;
export const QuestionListContainer = styled.div``;

export const QuestionList = styled.ul`
  padding-left: 20px;
  margin: 0;
`;
export const QuestionListElement = styled.li``;

export const QuestionContentContainer = styled.div<IIsOpen>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  font-size: ${themes.primary.font.size.oneAndHalf};
  padding: 23px;
  color: ${themes.primary.colors.authorGrey};
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
