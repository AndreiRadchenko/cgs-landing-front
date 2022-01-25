import React, { FC } from "react";
import * as StyledThisComp from "./FormInput.styled";

interface IFormTextAreaProps {
  value: string;
  handleChange: (prop: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  placeholder: string;
  errors?: string;
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

      {errors && (
        <StyledThisComp.ErrorNotification>
          {errors}
        </StyledThisComp.ErrorNotification>
      )}
    </StyledThisComp.FormInputWrapper>
  );
};

export default FormTextArea;
