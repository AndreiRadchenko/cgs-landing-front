import { useFormikContext } from "formik";
import React, { useRef } from "react";
import { TieUpInput } from "../../styles/Calculator/CalculatorAdmin.styled";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";

interface ICalculatorEmailFieldProps {
  email: string;
  calculateIsClicked: boolean;
}

const CalculatorEmailField = ({
  email,
  calculateIsClicked,
}: ICalculatorEmailFieldProps) => {
  const { handleChange, errors } = useFormikContext<{ email: string }>();
  const inputRef = useRef<HTMLInputElement>();

  const handleInputClick = () => {
    inputRef.current && inputRef.current.focus();
  };

  return (
    <Styled.EmailInputWrapper>
      <Styled.CalculatorFieldWrapper className="email">
        <Styled.LeftBlackBorder />
        <Styled.CalculatorInputFields
          className="email"
          onClick={handleInputClick}
        >
          <TieUpInput
            innerRef={inputRef}
            type="email"
            name="email"
            id={`user-email`}
            className={`email ${
              calculateIsClicked && errors["email"] ? "invalid" : undefined
            }`}
            placeholder={email}
            onChange={handleChange}
          />
        </Styled.CalculatorInputFields>
      </Styled.CalculatorFieldWrapper>
      {calculateIsClicked && errors["email"] && (
        <Styled.ErrorMessage>Provide a valid e-mail</Styled.ErrorMessage>
      )}
    </Styled.EmailInputWrapper>
  );
};

export default CalculatorEmailField;
