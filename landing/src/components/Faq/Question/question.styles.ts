import styled from "styled-components";
import themes from "../../../utils/themes";

interface IIsOpen {
  isOpen: boolean;
  isImage?: boolean;
}

export const QuestionImage = styled.img`
  height: fit-content;
  width: 37%;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 70%;
    margin-bottom: 20px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    margin-bottom: 40px;
    margin-top: 20px;
  }

  @media ${themes.primary.media.minTablet} {
    margin-top: 0;
  }
`;

export const QuestionContainer = styled.div<IIsOpen>``;

export const QuestionBox = styled.div<IIsOpen>`
  width: 100%;
  position: relative;
  margin-left: 3px;

  &::before,
  &::after {
    content: "";
    top: 0;
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${themes.primary.colors.faqBorder};
  }

  &::after {
    top: 100%;
    display: none;
  }

  &:last-of-type::after  {
    display: block;
  }

  ${({ isOpen }) =>
    isOpen &&
    `&::before {
        display: none;
      }

      @media ${themes.primary.media.maxMobile} {
        margin-bottom: 45px;
      }

      @media ${themes.primary.media.maxLowScreenMobile} {
        margin-bottom: 0;
      }`}

  @media (min-width: 1920px) {
    width: 74.55vw;    
  }

  @media ${themes.primary.media.maxMobile} {
    margin-left: 0;
    
    &::before,
    &::after {
      width: calc(100% - 90px);
    }
    
    ${({ isOpen }) =>
      isOpen &&
      `&:last-of-type::after {
        width: 100%;
      } 
    `}
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    &::before,
    &::after {
      width: calc(100% - 40px);
    }
  }

  /* 267px, 221px - height of the decoration item */
  &:last-of-type {
    margin-bottom: ${({ isOpen }) => (isOpen ? "267px" : "calc(267px - 10px)")};

    @media ${themes.primary.media.maxPCFullHD} {
      margin-bottom: 196px;
    }

    @media ${themes.primary.media.maxMobile} {
      margin-bottom: ${({ isOpen }) =>
        isOpen ? "221px" : "calc(221px + 90px)"};
    }
  
    @media ${themes.primary.media.maxLowScreenMobile} {
      margin-bottom: 170px;
    }
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
  font-size: 42px;
  font-weight: ${themes.primary.font.weight.heavy};
  padding-bottom: 5px;

  @media (max-width: 1440px) {
    font-size: 32px;
    padding-bottom: 0;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 24px;
  }
`;

export const QuestionTitleContainer = styled.div<IIsOpen>`
  position: relative;
  width: 100%;
  transition: 0.2s;
  padding: 32px 40px;
  display: flex;
  font-size: 24px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.5s ease, color 0.5s ease;
  height: 93px;

  &.open {
    background-color: ${themes.primary.colors.darkBlue};
    color: ${themes.primary.colors.secondary};
  }

  &:hover {
    color: ${({ isOpen }) => !isOpen && themes.primary.colors.darkBlue};
  }

  @media ${themes.primary.media.maxPCFullHD} {
    height: auto;
    padding: 17px 17px 19px 26px;
    font-size: ${themes.primary.font.size.faqQuestion};
    width: auto;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.731em;
  }

  @media ${themes.primary.media.maxMobile} {
    height: 68px;
    align-items: center;
    padding: ${({ isOpen }) => (isOpen ? "0 40px" : "0 53px 0 51px")};
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 80px;
    padding: 0 20px;
  }
`;

export const QuestionTitle = styled.p<IIsOpen>`
  @media ${themes.primary.media.maxMobile} {
    font-size: 20px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 18px;
  }
`;

export const QuestionContentContainer = styled.div<IIsOpen>`
  display: flex;
  font-size: ${themes.primary.font.size.faqAnswer};
  padding: 24px 40px 56px 40px;

  line-height: 160%;
  column-gap: 15px;
  justify-content: space-between;

  @media ${themes.primary.media.maxPCFullHD} {
    padding: 22px 58px 24px 21px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    flex-direction: column-reverse;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 20px 50px 45px 40px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 18px 20px 24px;
    margin-bottom: 0;
  }
`;

export const QuestionTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  & span,
  & li {
    font-size: 20px !important;
    color: ${themes.primary.colors.blogArticleText} !important;

    @media ${themes.primary.media.maxPCFullHD} {
      font-size: 17px !important;
    }

    @media ${themes.primary.media.maxLaptop} {
      font-size: 16px !important;
    }
  }
`;
