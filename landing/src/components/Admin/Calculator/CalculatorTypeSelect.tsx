import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { queryKeys } from "../../../consts/queryKeys";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";
import { ICalculator } from "../../../types/Admin/Response.types";

interface ICalculatorTypeSelectProps {
  header?: string;
  idx?: number;
}

const CalculatorTypeSelect = ({ header }: ICalculatorTypeSelectProps) => {
  const queryClient = useQueryClient();
  const roles = queryClient.getQueryData<ICalculator>([
    queryKeys.getCalculatorData,
  ])?.roles;

  return (
    (roles && (
      <Styled.CalculatorTypeSelectWrapper>
        <Styled.CalculatorTypeSelectHeader>
          {header || "Specialist"}
        </Styled.CalculatorTypeSelectHeader>
        <Styled.CalculatorTypeSelectContent>
          {roles.map((role) => (
            <Styled.CalculatorTypeSelectOption key={role.name}>
              {role.name}
            </Styled.CalculatorTypeSelectOption>
          ))}
        </Styled.CalculatorTypeSelectContent>
      </Styled.CalculatorTypeSelectWrapper>
    )) ||
    null
  );
};

export default CalculatorTypeSelect;
