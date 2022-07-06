import styled from "styled-components";
import themes from "../utils/themes";

export const DateInput = styled.input`
  resize: none;
  width: ${(props) => (props.width ? props.width : "100%")};
  font-size: ${themes.primary.font.size.linkText};
  font-family: ${themes.primary.font.family.mulish};
  padding: ${themes.primary.spacing.primary};
  border: 0;
  height: ${(props) => props.height} !important;
  margin-bottom: ${themes.primary.spacing.primary};
  &:focus {
    outline: 1px solid gray;
  }
`;

export const SubTitle = styled.h3`
  font-size: ${themes.primary.font.size.menuElement};
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.semiBold};
  margin: 30px 0 0.4em 0;
`;
