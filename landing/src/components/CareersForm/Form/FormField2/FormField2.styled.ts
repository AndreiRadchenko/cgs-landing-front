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
  font-size: 1.2em;
  color: black;
  padding: 0 0 0 12px;
  &:focus {
    outline: none;
  }

  &.formEmail {
    color: ${({ toError }) => (toError ? "#F84A3F" : "black")};
  }

  &::placeholder {
    color: ${({ toError }) => (toError ? "#F84A3F" : "#8F8E93")};
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 0.875rem;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    font-size: 0.75rem;
  }
`;

export const FormFieldContainer = styled.div`
  height: 68px;
  width: 557px;
  background-color: ${themes.primary.colors.careerBackground};
  position: relative;
  margin-top: 16px;
  border: 1.5px solid #000;
  box-shadow: 5px 5px 0 #000;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 335px;
    height: 54px;
  }
`;
