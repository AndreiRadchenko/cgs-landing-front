import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 17.1em;
  margin-bottom: 22.6em;
  position: relative;
`;

export const Content = styled.div``;

export const Image = styled.img`
  position: absolute;
  right: 2em;
  top: -7.6em;
  width: 43.05em;
  height: 45.3em;
`;

export const Title = styled.h3`
  font-size: ${themes.primary.font.size.secondaryServicesTitle};
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 140%;
  text-transform: uppercase;
  margin: 0 0 1.8em;
  max-width: 18.225em;
`;
