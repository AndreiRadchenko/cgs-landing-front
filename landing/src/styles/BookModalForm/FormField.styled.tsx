import styled from "styled-components";
import themes from "../../utils/themes";
import { Field } from "formik";

export const FormField = styled(Field)`
  height: 54px;
  width: 100%;
  background: none;
  border: none;
  border: 1px solid ${themes.primary.colors.inputGrey};
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  color: ${themes.primary.colors.black};
  padding-left: 12px;
  &:focus {
    outline: none;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 12px;
    height: 44px;
  }
`;

export const FormFieldLabel = styled.label`
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  color: ${themes.primary.colors.black};

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 12px;
  }
`;

export const FormFieldContainer = styled.div`
  width: 100%;
  height: 78px;
  position: relative;
  padding: 10px 0;

  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 54px;
    padding: 5px 0;
  }
`;

export const ErrorField = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: 12px;
  color: ${themes.primary.colors.adminRed};
  text-align: center;

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 10px;
  }
`;
