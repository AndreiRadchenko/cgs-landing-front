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

  &::placeholder {
    color: ${({ toError }) => (toError ? "#F84A3F" : "rgba(0, 0, 0, 0.5)")};
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
  background-color: ${themes.primary.colors.careerBackground};
  position: relative;
  margin-top: 16px;
  border: 1.5px solid #000;
  box-shadow: 5px 5px 0 #000;

  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 66px;
  }
`;
