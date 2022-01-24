import styled from "styled-components";
import themes from "../utils/themes";

export const FeedbackContainer = styled.section`
  width: 1400px;
  margin: 0 auto;
  font-family: ${themes.primary.font.family.roboto};
`;

export const FeedbackSectionTitle = styled.h2`
  font-size: 2.5em;
  margin: 0;
`;

export const FeedbackSectionSubTitle = styled.h3`
  font-weight: 300;
  font-size: 1.65em;
  line-height: 125%;
  margin-top: 12px;
  margin-bottom: 50px;
`;
