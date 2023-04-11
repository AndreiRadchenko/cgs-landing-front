import styled from "styled-components";
import themes from "../../../utils/themes";

interface IIsOpen {
  isOpen: boolean;
  isImage?: boolean;
}

export const QuestionImage = styled.img`
  height: fit-content;
  width: 473px;

  @media ${themes.primary.media.maxMobile} {
    width: 334px;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    width: 100%;
  }

  @media ${themes.primary.media.onlyPC} {
    width: 515px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: 600px;
  }
`;
export const QuestionContainer = styled.div<IIsOpen>``;

export const QuestionBox = styled.div<IIsOpen>`
  width: 100%;

  @media ${themes.primary.media.maxMobile} {
    width: ${({ isOpen }) => (isOpen ? "100%" : "calc(100% - 40px)")};
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
  transition: 0.2s;
  padding: ${({ isOpen }) => (isOpen ? "21.5px 23px" : "24px 23px")};
  font-size: ${themes.primary.font.size.faqQuestion};
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-top: 1px solid ${themes.primary.colors.faqBorder};

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.731em;
  }
  &:hover {
    color: ${({ isOpen }) => !isOpen && themes.primary.colors.darkBlue};
  }

  @media ${themes.primary.media.maxMobile} {
    height: 80px;
    align-items: center;
    padding: 15px 0px;
    padding-right: ${({ isOpen }) => isOpen && "20px"};
  }
`;

export const QuestionTitle = styled.p<IIsOpen>`
  @media ${themes.primary.media.maxMobile} {
    font-size: 18px;
    padding: ${({ isOpen }) => isOpen && "0 0 0 20px"};
  }
`;

export const QuestionContentContainer = styled.div<IIsOpen>`
  display: flex;
  font-size: ${themes.primary.font.size.faqAnswer};
  padding: 20px 23px;
  line-height: 160%;
  column-gap: 15px;
  justify-content: space-between;

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.linkText};
    flex-direction: column-reverse;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 18px 20px 24px;
  }
`;

export const QuestionTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: ${themes.primary.colors.blogArticleText} !important;
  }
`;
