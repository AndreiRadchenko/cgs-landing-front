import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 14.08em;
  padding-bottom: 22.67em;
  position: relative;
`;

export const Title = styled.h2`
  font-size: ${themes.primary.font.size.secondaryServicesTitle};
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 140%;
  text-transform: uppercase;
  max-width: 28.75em;
  margin: 0 0 1.3em;
`;

export const Image = styled.img`
  position: absolute;
  right: 0;
  bottom: 7.35em;
  width: 34.083em;
  height: 22.65em;
`;
