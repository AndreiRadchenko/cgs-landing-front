import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 14.88em;
  padding: 4.69em 0 8.375em;
  display: flex;
  justify-content: space-between;

  & img {
    width: 50em !important;
  }

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    width: 100%;
    margin-top: -7.7em;

    background-position: bottom center;
    background-size: contain;
  }
`;

export const Title = styled.h2`
  font-size: 2.5em;
  font-weight: inherit;
  line-height: 140%;
  text-transform: uppercase;
  max-width: 12em;
  margin-top: 3px;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    line-height: 132%;
  }
`;
