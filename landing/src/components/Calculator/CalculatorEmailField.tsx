import { useFormikContext } from "formik";
import React from "react";
import { TieUpInput } from "../../styles/Calculator/CalculatorAdmin.styled";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";
import { ICalculatorFormValuesProps } from "../../types/Admin/Response.types";

interface ICalculatorEmailFieldProps {
  email: string;
}

const CalculatorEmailField = ({ email }: ICalculatorEmailFieldProps) => {
  const { handleChange, errors } =
    useFormikContext<ICalculatorFormValuesProps>();

  return (
    <Styled.EmailInputWrapper>
      <Styled.CalculatorFieldWrapper className="email">
        <Styled.LeftBlackBorder />
        <Styled.CalculatorInputFields className="email">
          <TieUpInput
            type="email"
            name="email"
            id={`user-email`}
            className="email"
            placeholder={email}
            onChange={handleChange}
          />
        </Styled.CalculatorInputFields>
      </Styled.CalculatorFieldWrapper>
      {errors["email"] && (
        <Styled.ErrorMessage>Provide a valid e-mail</Styled.ErrorMessage>
      )}
    </Styled.EmailInputWrapper>
  );
};

export default CalculatorEmailField;
