import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 15.92em;
  padding-bottom: 25.683em;
  position: relative;
`;

export const Title = styled.h2`
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: ${themes.primary.font.size.secondaryServicesTitle};
  line-height: 140%;
  margin: 0 0 1.375em;
`;

export const Image = styled.img`
  position: absolute;
  right: 3.19em;
  bottom: 5.1em;
  width: 40.4em;
`;
