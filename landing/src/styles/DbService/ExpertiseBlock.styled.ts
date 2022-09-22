import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 12.5em;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 4.75em;

    & h2 {
      line-height: 233%;
    }
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 3.25em;
  margin-right: 1em;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  column-gap: 3em;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 0.7em;
    flex-direction: column;
    row-gap: 1.56em;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 1270px) {
    max-width: 50%;

    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    max-width: 100%;
  }
`;

export const TextContent = styled.div`
  font-size: 1.25em;
  line-height: 160%;
  margin-left: 2.35em;

  @media (max-width: 1270px) {
    margin-left: 1em;
  }

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
    width: 4em;
    height: 4.43em;
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
