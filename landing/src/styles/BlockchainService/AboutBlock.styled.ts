import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  & img {
    width: 43.1em !important;
  }

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    width: 100%;
    margin-top: 92px;

    background-position: bottom center;
    background-size: contain;
  }
`;

export const Title = styled.h2`
  font-size: 2.5em;
  font-weight: inherit;
  line-height: 140%;
  text-transform: uppercase;

  padding: 1.875em 0 3.35em;
  max-width: 12em;
  margin-top: 3px;

  @media ${themes.primary.media.maxMobile} {
    padding: 0;
    margin-bottom: 1.4em;
    font-size: 1.5em;
    line-height: 132%;
  }
`;
