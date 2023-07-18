import styled from "styled-components";
import themes from "../utils/themes";

interface IAnchorLink {
  readonly isProject: boolean;
}

export const AnchorLinkContainer = styled.div<IAnchorLink>`
  width: 180px;
  height: 45px;
  position: absolute;
  top: ${({ isProject }) => (!isProject ? "70px" : "60px")};
  right: ${({ isProject }) => !isProject && "50%"};
  left: ${({ isProject }) => isProject && "0"};
  display: flex;
  align-items: center;
  padding: 12px 14px;
  gap: 14px;
  writing-mode: horizontal-tb;
  transform: ${({ isProject }) => !isProject && "rotate(180deg)"};
  background: ${themes.primary.colors.blogBackground};
  border: 1px solid ${themes.primary.colors.headerBorder};
  z-index: 5;

  @media ${themes.primary.media.maxMobile} {
    top: -45px;
  }

  p {
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    color: ${themes.primary.colors.darkBlue};
    font-size: 14px;
    line-height: 130%;
    width: 121px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  svg {
    cursor: pointer;
    path {
      transition: 0.3s;
    }
  }
  svg:hover path {
    fill: ${themes.primary.colors.blogArticleText};
  }
`;
