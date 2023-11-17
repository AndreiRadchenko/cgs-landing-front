import { useFormikContext } from "formik";
import React, { Dispatch, FC, SetStateAction } from "react";
import PhoneInput from "react-phone-input-2";
import PhoneInputField from "../../BookModal/BookModalForm/PhoneInputField";

import { IFormState } from "./";

import * as CSS from "./BookForm.styled";
// import "react-phone-input-2/lib/style.css";
import "react-phone-input-2/lib/material.css";

export interface IFieldProps {
  country: string;
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
  country = "us",
  setCountry,
  value,
  setValue,
  name,
  label,
  btnIsClicked,
  idx,
}: IFieldProps) => {
  const { errors, values, handleChange } = useFormikContext<IFormState>();

  const handleOnChange = (...args: any[]) => {
    setCountry(args[1].name);
    setValue(args[0]);
  };

  return (
    <CSS.FormFieldWrapper>
      <CSS.FormFieldContainer>
        {idx === 2 ? (
          // <PhoneInput
          //   country={country}
          //   specialLabel={label}
          //   value={value}
          //   onChange={handleOnChange}
          //   enableSearch={true}
          //   disableSearchIcon={true}
          //   containerClass={value === "+1" || value === "" ? "empty" : "filled"}
          // />
          <PhoneInputField
            className={
              btnIsClicked && errors[name] ? "formikErrors" : "default"
            }
            placeholder={""}
            name={name}
            country={"us"}
            setCountry={setCountry}
            specialLabel={label}
            containerClass={
              values.phone === "+1" || values.phone === "" ? "empty" : "filled"
            }
          />
        ) : (
          <CSS.FormField
            className={
              btnIsClicked && errors[name] ? "formikErrors" : "default"
            }
            label={label}
            name={name}
            value={idx === 0 ? values.name : values.email}
            onChange={handleChange}
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
