import styled from "styled-components";
import themes from "../utils/themes";

export const BodyContainer = styled.div`
  position: relative;
  height: 100vh;

  overflow: hidden;
`;

export const BodyDescriptionWrapper = styled.div`
  margin-top: 5em;
  width: 50%;
`;

export const BodyTitle = styled.span`
  font-size: 6.2em;
  font-family: ${themes.primary.font.family.barlow};
  font-weight: 600;
`;

export const BodySubtitle = styled.span`
  display: block;
  margin-top: 1em;
  font-family: ${themes.primary.font.family.roboto};
  font-size: ${themes.primary.font.size.quaternary};
  font-weight: 500;
`;

export const CodeDescription = styled.span`
  font-family: ${themes.primary.font.family.sourceCode};
  display: block;
  margin-top: 1em;
  font-weight: 600;
  font-size: 1.5em;
`;

export const WrapperBgImg = styled.div`
  position: absolute;
  right: 0;
  top: -2%;
  width: 60%;
  overflow: hidden;

  transform: rotate(1.5deg);
`;
