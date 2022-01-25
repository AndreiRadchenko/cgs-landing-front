import React, { FC } from "react";
import * as StyledThisComp from "./FormInput.styled";

interface IFormTextAreaProps {
  value: string;
  handleChange: (prop: any) => void;
  name: string;
  placeholder: string;
  errors: any;
}

const FormTextArea: FC<IFormTextAreaProps> = ({
  value,
  handleChange,
  name,
  placeholder,
  errors,
}) => {
  return (
    <StyledThisComp.FormInputWrapper>
      <StyledThisComp.TextAreaInput
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
        value={value}
      />

      {errors[name] && (
        <StyledThisComp.ErrorNotification>
          {errors[name]}
        </StyledThisComp.ErrorNotification>
      )}
    </StyledThisComp.FormInputWrapper>
  );
};

export default FormTextArea;
