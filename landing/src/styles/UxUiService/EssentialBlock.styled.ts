import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin: 10.94em 4.125em 0 1.56em;
  font-size: 1rem;
  font-weight: ${themes.primary.font.weight.heavy};
  display: flex;
  position: relative;
`;

export const Image = styled.img`
  position: absolute;
`;

export const ContentWrapper = styled.div`
  padding-top: 2.25em;
  margin: 2.5em 0 0 auto;
  max-width: 51%;
`;

export const Title = styled.h2`
  font-size: ${themes.primary.font.size.reviewTitle};
  font-weight: inherit;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;
`;

export const Text = styled.p`
  font-size: 1.375em;
  line-height: 160%;
`;
