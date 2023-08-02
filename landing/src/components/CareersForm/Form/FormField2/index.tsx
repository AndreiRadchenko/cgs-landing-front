import React, { FC } from "react";

import * as Styled from "./FormField2.styled";

import { IField2Props } from "../../../../types/Company.types";

const TextFieldWrapper: FC<IField2Props> = ({
  name,
  label,
  type = "text",
  toFormError,
  toFormErrorEmail,
  className,
}: IField2Props) => {
  return (
    <>
      <Styled.FormFieldContainer>
        <Styled.FormField
          placeholder={label}
          type={type}
          name={name}
          toError={toFormError}
          toErrorEmail={toFormErrorEmail}
          className={className}
        />
      </Styled.FormFieldContainer>
    </>
  );
};

export default TextFieldWrapper;
