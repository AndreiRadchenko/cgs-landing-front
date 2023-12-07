import React, { CSSProperties, Dispatch, SetStateAction } from "react";
import PhoneInput, { CountryData, PhoneInputProps } from "react-phone-input-2";
import { useField } from "formik";

import "react-phone-input-2/lib/style.css";

interface Props extends Omit<PhoneInputProps, "onChange" | "onBlur"> {
  className?: string;
  name: string;
  placeholder: string;
  setCountry: Dispatch<SetStateAction<string>>;
}

const PhoneInputField: React.FC<Props> = ({ ...props }) => {
  const [field, meta, helpers] = useField(props.name);
  const handleOnChange = (
    value: string,
    data: CountryData,
    event: React.ChangeEvent<HTMLInputElement>,
    formattedValue: string
  ): void => {
    helpers.setValue(value);
    props.setCountry(data.name);
  };

  return (
    <PhoneInput
      className={props.className}
      {...field}
      {...props}
      onChange={handleOnChange}
      value={field.value}
      placeholder={props.placeholder}
    />
  );
};

export default PhoneInputField;
