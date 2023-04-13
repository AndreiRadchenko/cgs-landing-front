import { useFormikContext } from "formik";
import React, { useRef } from "react";
import { TieUpInput } from "../../styles/Calculator/CalculatorAdmin.styled";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";

interface ICalculatorEmailFieldProps {
  name: string;
  calculateIsClicked: boolean;
}

const CalculatorNameField = ({
  name,
  calculateIsClicked,
}: ICalculatorEmailFieldProps) => {
  const { values, handleChange, errors } = useFormikContext<{ name: string }>();
  const inputRef = useRef<HTMLInputElement>();

  const handleInputClick = () => {
    inputRef.current && inputRef.current.focus();
  };

  //   console.log("Values: ", values);

  return (
    <Styled.EmailInputWrapper>
      <Styled.CalculatorFieldWrapper className="email">
        <Styled.LeftBlackBorder />
        <Styled.CalculatorInputFields
          className="email"
          id="input-email"
          onClick={handleInputClick}
        >
          <TieUpInput
            innerRef={inputRef}
            type="email"
            name="name"
            id={`user-email`}
            className={`email ${
              calculateIsClicked && errors["name"] ? "warn-text" : undefined
            }`}
            placeholder={name}
            onChange={handleChange}
          />
        </Styled.CalculatorInputFields>
      </Styled.CalculatorFieldWrapper>
    </Styled.EmailInputWrapper>
  );
};

export default CalculatorNameField;
