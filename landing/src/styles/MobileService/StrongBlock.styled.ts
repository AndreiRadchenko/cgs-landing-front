import styled from "styled-components";
import themes from "../../utils/themes";

export const StrongContainer = styled.div`
  margin-top: 17em;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4.3em;
`;

export const ImageContainer = styled.div`
  margin-top: 1.1em;
`;

export const BlockImage = styled.img``;

export const Block = styled.div`
  display: flex;

  &:first-child {
    padding-right: 2em;
  }
`;

export const BlockTextContainer = styled.div`
  margin-left: 2.8em;
`;

export const BlockTitle = styled.h3`
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 10px;
  text-decoration-thickness: 1.39388px;
  font-size: ${themes.primary.font.size.secondary};

  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.oneAndNine};
  }

  @media ${themes.primary.media.maxServiceMobile} {
    font-size: 1.7em;
  }
`;

export const BlockText = styled.p`
  font-size: 1.65em;
  line-height: 160%;
  width: 84%;
`;
