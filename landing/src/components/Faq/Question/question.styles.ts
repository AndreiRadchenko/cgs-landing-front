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
export const QuestionContainer = styled.div<IIsOpen>`
  @media ${themes.primary.media.maxMobile} {
  }
`;

export const QuestionBox = styled.div<IIsOpen>`
  width: 100%;

  @media ${themes.primary.media.maxMobile} {
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
  position: relative;
  width: 100%;
  transition: 0.2s;
  padding: 24px;
  font-size: ${themes.primary.font.size.faqQuestion};
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-top: 1px solid ${themes.primary.colors.faqBorder};
  transition: background-color 0.5s ease, color 0.5s ease;

  &.open {
    background-color: ${themes.primary.colors.darkBlue};
    color: ${themes.primary.colors.secondary};
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.731em;
  }
  &:hover {
    color: ${({ isOpen }) => !isOpen && themes.primary.colors.darkBlue};
  }

  @media ${themes.primary.media.maxMobile} {
    border-top: none;
    height: 80px;
    align-items: center;
    padding: 0px 20px;
    padding-right: 20px;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 20px;
      height: ${({ isOpen }) => (isOpen ? "0" : "1px")};
      width: 90%;
      background-color: ${themes.primary.colors.faqBorder};
    }
  }
`;

export const QuestionTitle = styled.p<IIsOpen>`
  @media ${themes.primary.media.maxMobile} {
    font-size: 18px;
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
    padding: 18px 20px 24px 20px;
  }
`;

export const QuestionTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: ${themes.primary.colors.blogArticleText} !important;
  }
`;
