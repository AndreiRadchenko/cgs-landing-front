import React, { FC } from "react";
import * as StyledThisComp from "./FormInput.styled";
import { ErrorNotification, FormInputWrapper } from "./FormInput.styled";

interface IFormInputProps {
  value: string;
  handleChange: (prop: any) => void;
  name: string;
  placeholder: string;
  errors: any;
}

const FormInput: FC<IFormInputProps> = ({
  value,
  handleChange,
  name,
  placeholder,
  errors,
}) => {
  return (
    <StyledThisComp.FormInputWrapper>
      <StyledThisComp.FormInput
        value={value}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
      />

      {errors[name] && (
        <StyledThisComp.ErrorNotification>
          {errors[name]}
        </StyledThisComp.ErrorNotification>
      )}
    </StyledThisComp.FormInputWrapper>
  );
};

export default FormInput;
