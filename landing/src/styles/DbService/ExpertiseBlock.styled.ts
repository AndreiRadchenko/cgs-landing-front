import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 12.5em;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 9.56em;

    & h2 {
      line-height: 233%;
    }
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 3.25em;
  margin-right: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 2.125em;
    flex-direction: column;
    row-gap: 3.625em;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
  }
`;

export const TextContent = styled.div`
  font-size: 1.25em;
  line-height: 160%;
  margin-left: 2.35em;

  @media ${themes.primary.media.maxMobile} {
    margin: 0;
    font-size: 1em;

    & br {
      display: none;
    }
  }
`;

export const Icon = styled.img`
  display: flex;
  padding-top: 1.8em;

  @media ${themes.primary.media.maxMobile} {
    padding: 0;
  }
`;

export const Subtitle = styled.h3`
  text-transform: uppercase;
  text-decoration: underline;
  font-size: 1.2em;
  margin-top: 1rem;
  margin-bottom: 1.25rem;

  @media ${themes.primary.media.maxMobile} {
    margin: 0.5em 0 1.05em;
    font-size: 1.25em;
  }
`;
