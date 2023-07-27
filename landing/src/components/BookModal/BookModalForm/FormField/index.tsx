import { useFormikContext } from "formik";
import React, { Dispatch, FC, SetStateAction } from "react";
import { IFormState } from "..";

import PhoneInputField from "../PhoneInputField";

import * as Styled from "../../../../styles/BookModalForm/FormField.styled";
import "react-phone-input-2/lib/style.css";
import { isEmailDomainPublic } from "../../../../utils/checkEmailDomain";

export interface IFieldProps {
  setCountry: Dispatch<SetStateAction<string>>;
  name: keyof IFormState;
  label: string;
  btnIsClicked: boolean;
  type?: string;
}

const TextFieldWrapper: FC<IFieldProps> = ({
  setCountry,
  name,
  label,
  btnIsClicked,
  type = "text",
}: IFieldProps) => {
  const { errors, values } = useFormikContext<IFormState>();

  const PHONE_OPTIONAL = "Phone Number";

  return (
    <>
      <Styled.FormFieldLabel htmlFor={label}>
        {PHONE_OPTIONAL === label
          ? isEmailDomainPublic(values.email)
            ? `${label}*`
            : `${label}`
          : `${label}*`}
      </Styled.FormFieldLabel>
      <Styled.FormFieldContainer>
        {PHONE_OPTIONAL === label ? (
          <PhoneInputField
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
