import styled from "styled-components";
import themes from "../utils/themes";

export const Page = styled.article`
  width: 100%;
  position: relative;
  padding: ${themes.primary.spacing.headerNavVertical}
    ${themes.primary.spacing.headerNavHorizontal};
`;

export const ButtonText = styled.span`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: ${themes.primary.font.size.buttonText};
  font-weight: 500;
  font-family: ${themes.primary.font.family.roboto};
  cursor: pointer;
`;
