import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 36.1em;
`;

export const Title = styled.h2`
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: ${themes.primary.font.size.secondaryServicesTitle};
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;
  max-width: 15.75em;
`;

export const TextWrapper = styled.div`
  margin: 0 -7.3em;
`;

export const Text = styled.p`
  font-size: ${themes.primary.font.size.feedbackName};
  line-height: 160%;
  text-transform: uppercase;
  min-width: max-content;
  margin: 0;

  position: relative;
`;

export const Row1 = styled.div`
  display: grid;
  grid-template-columns: 0.85fr 1fr 0.7fr 1.4fr 0.7fr 1.6fr 0.9fr;
  margin: 6.33em 0 3.92em;
`;

export const Row2 = styled.div`
  display: grid;
  grid-template-columns: 1.13fr 0.9fr 0.45fr 0.9fr 1.2fr;
`;

export const Line = styled.div`
  border: 1px solid ${themes.primary.colors.primary};
  width: stretch;
  flex: 1;
  margin: 1.562em 36px 0 15px;
  max-height: 2px;
  max-width: stretch;
`;

export const Image = styled.img`
  position: absolute;
  left: -2.5em;
  top: 0.1em;
`;
