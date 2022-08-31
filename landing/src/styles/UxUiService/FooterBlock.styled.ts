import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 10.7em;
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 1rem;
  position: relative;
  padding-bottom: 19.25em;
`;

export const ContentWrapper = styled.div`
  max-width: 61%;
`;

export const Title = styled.h2`
  margin: 0 0 3.44em;
  font-weight: inherit;
  font-size: ${themes.primary.font.size.reviewTitle};
  line-height: 140%;
  text-transform: uppercase;
`;

export const Image = styled.img`
  position: absolute;
  bottom: 6.44em;
  right: 2.56em;
`;
