import { useFormikContext } from "formik";
import React, { Dispatch, FC, SetStateAction } from "react";
import PhoneInput from "react-phone-input-2";
import { IFormState } from "..";
import * as Styled from "../../../../styles/BookModalForm/FormField.styled";
import "react-phone-input-2/lib/style.css";

export interface IFieldProps {
  value: any;
  setValue: Dispatch<SetStateAction<any>>;
  name: keyof IFormState;
  label: string;
  btnIsClicked: boolean;
  type?: string;
}

const TextFieldWrapper: FC<IFieldProps> = ({
  value,
  setValue,
  name,
  label,
  btnIsClicked,
  type = "text",
}: IFieldProps) => {
  const { errors } = useFormikContext<IFormState>();

  const PHONE_OPTIONAL = "Phone number";

  return (
    <>
      <Styled.FormFieldLabel htmlFor={label}>
        {label}
        {PHONE_OPTIONAL === label && <span> (Optional)</span>}
      </Styled.FormFieldLabel>
      <Styled.FormFieldContainer>
        {PHONE_OPTIONAL === label ? (
          <PhoneInput
            country={"us"}
            placeholder={label}
            value={value}
            onChange={setValue}
            enableSearch={true}
            disableSearchIcon={true}
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
