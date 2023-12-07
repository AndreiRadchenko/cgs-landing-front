import React, { FC } from "react";
import { useFormikContext } from "formik";

import PhoneInputField from "../PhoneInputField";

import "react-phone-input-2/lib/style.css";
import * as Styled from "../../../../styles/BookModalForm/FormField.styled";

import {
  IBookModalFieldProps,
  IFormState,
} from "../../../../types/ModalCategory.types";

const TextFieldWrapper: FC<IBookModalFieldProps> = ({
  setCountry,
  name,
  label,
  btnIsClicked,
  type = "text",
}: IBookModalFieldProps) => {
  const { errors, values } = useFormikContext<IFormState>();

  const PHONE_OPTIONAL = "Phone Number";

  return (
    <>
      <Styled.FormFieldLabel htmlFor={label}>
        {PHONE_OPTIONAL === label ? (
          true ? (
            <>
              {label}
              <span style={{ marginLeft: "2px", color: "black" }}>*</span>
            </>
          ) : (
            `${label}`
          )
        ) : (
          <>
            {label}
            <span style={{ marginLeft: "2px", color: "black" }}>*</span>
          </>
        )}
      </Styled.FormFieldLabel>
      <Styled.FormFieldContainer>
        {PHONE_OPTIONAL === label ? (
          <PhoneInputField
            className={
              btnIsClicked && errors[name] ? "formikErrors" : "default"
            }
            placeholder={label}
            name={name}
            country={"us"}
            setCountry={setCountry}
          />
        ) : (
          <Styled.FormField
            className={
              btnIsClicked && errors[name] ? "formikErrors" : "default"
            }
            placeholder={label}
            type={type}
            name={name}
          />
        )}
        {btnIsClicked && errors[name] && (
          <Styled.ErrorField>{errors[name]}</Styled.ErrorField>
        )}
      </Styled.FormFieldContainer>
    </>
  );
};

export default TextFieldWrapper;
