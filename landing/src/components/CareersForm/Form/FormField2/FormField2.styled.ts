import styled from "styled-components";
import themes from "../../../../utils/themes";
import { Field } from "formik";

export const FormField = styled(Field)`
  height: 100%;
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1px solid black;
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  color: black;
  padding: 0 0 0 12px;
  &:focus {
    outline: none;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 0.875rem;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    font-size: 0.75rem;
  }
`;

export const FormFieldContainer = styled.div`
  width: 100%;
  height: 78px;
  position: relative;
`;
