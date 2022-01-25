import React, { FC } from "react";
import * as StyledThisComp from "./FormInput.styled";

interface IFormInputProps {
  value: string;
  handleChange: (prop: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder: string;
  errors?: string;
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

      {errors && (
        <StyledThisComp.ErrorNotification>
          {errors}
        </StyledThisComp.ErrorNotification>
      )}
    </StyledThisComp.FormInputWrapper>
  );
};

export default FormInput;
