import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding-bottom: 9.35em;
  position: relative;

  @media ${themes.primary.media.maxTabletPortrait} {
    padding: 8px 0 270px;
    flex-direction: column;

    ::before {
      content: "";
      height: 1px;
      position: absolute;
      background-color: ${themes.primary.colors.headerBorder};
      width: 130%;
      top: -18px;
      left: -10%;
    }

    a {
      font-size: 1em;
    }

    h2 {
      line-height: 132%;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 8px 0 197px;
  }
`;

export const TextContent = styled.div``;

export const Image = styled.img`
  position: absolute;
  right: 0.56em;
  bottom: -2.2em;

  @media ${themes.primary.media.maxServiceWeb} {
    width: 17em;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    width: 16.875em;
    left: 20%;
    bottom: -105px;
    margin: 1.64em auto 1em;
  }
  @media ${themes.primary.media.maxMobile} {
    bottom: -165px;
  }
`;
