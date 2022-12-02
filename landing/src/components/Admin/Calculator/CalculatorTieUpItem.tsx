import { useFormikContext } from "formik";
import React from "react";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";
import { ICalculatorStep } from "../../../types/Admin/Response.types";

const CalculatorTieUpItem = () => {
  const { values } = useFormikContext<ICalculatorStep>();
  console.log(values);

  return (
    <Styled.TieUpContentContainer>
      <Styled.TieUpTitle>Tie up question</Styled.TieUpTitle>
      <Styled.TieUpSubtitle>If an answer is selected:</Styled.TieUpSubtitle>
      <Styled.InputsWrapper>
        {values.options &&
          typeof values.options !== "string" &&
          values.options.map((el, ind) => {
            console.log(el);

            return (
              <Styled.OptionWrapper key={ind}>
                <Styled.TieUpInput type={el.type} name={el.label} />
                <Styled.TieUpLabel
                  dangerouslySetInnerHTML={{ __html: el.label }}
                />
              </Styled.OptionWrapper>
            );
          })}
      </Styled.InputsWrapper>
    </Styled.TieUpContentContainer>
  );
};

export default CalculatorTieUpItem;
