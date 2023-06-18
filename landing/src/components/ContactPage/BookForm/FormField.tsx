import { useFormikContext } from "formik";
import React, { Dispatch, FC, SetStateAction } from "react";
import PhoneInput from "react-phone-input-2";
import { IFormState } from "./";

import * as CSS from "./BookForm.styled";
import "react-phone-input-2/lib/style.css";

export interface IFieldProps {
  setCountry: Dispatch<SetStateAction<string>>;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  name: keyof IFormState;
  label: string;
  btnIsClicked: boolean;
  type?: string;
  idx?: number;
}

const TextFieldWrapper: FC<IFieldProps> = ({
  setCountry,
  value,
  setValue,
  name,
  label,
  btnIsClicked,
  type = "text",
  idx,
}: IFieldProps) => {
  const { errors } = useFormikContext<IFormState>();

  const PHONE_OPTIONAL = "Phone number";

  const handleOnChange = (...args: any[]) => {
    setCountry(args[1].name);
    setValue(args[0]);
  };

  return (
    <CSS.FormFieldWrapper>
      <CSS.FormFieldLabel htmlFor={label}>
        {label}
        {idx === 2 && <span> (Optional)</span>}
      </CSS.FormFieldLabel>
      <CSS.FormFieldContainer>
        {idx === 2 ? (
          <PhoneInput
            country={"us"}
            placeholder={label}
            value={value}
            onChange={handleOnChange}
            enableSearch={true}
            disableSearchIcon={true}
          />
        ) : (
          <CSS.FormField
            className={
              btnIsClicked && errors[name] ? "formikErrors" : "default"
            }
            placeholder={label}
            type={type}
            name={name}
          />
        )}
        <CSS.ErrorField>
          {btnIsClicked && errors[name] ? errors[name] : " "}
        </CSS.ErrorField>
      </CSS.FormFieldContainer>
    </CSS.FormFieldWrapper>
  );
};

export default TextFieldWrapper;
