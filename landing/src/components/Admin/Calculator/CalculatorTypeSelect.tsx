import { useQueryClient } from "@tanstack/react-query";
import { useFormikContext } from "formik";
import React, { useState } from "react";
import { queryKeys } from "../../../consts/queryKeys";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";
import {
  ICalculator,
  ICalculatorStep,
} from "../../../types/Admin/Response.types";

interface ICalculatorTypeSelectProps {
  header?: string;
  nameBefore?: string;
  idx: number;
}

const CalculatorTypeSelect = ({
  header,
  nameBefore,
  idx,
}: ICalculatorTypeSelectProps) => {
  const { values, setFieldValue } = useFormikContext<ICalculatorStep>();

  const currHeader = () => {
    if (values.options[idx] && values.options[idx].role) {
      return values.options[idx].role;
    }
    if (header) {
      return header;
    }

    return "Specialist";
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currRole, setCurrRole] = useState<string>(currHeader());
  const queryClient = useQueryClient();
  const roles = queryClient.getQueryData<ICalculator>([
    queryKeys.getCalculatorData,
  ])?.roles;

  const handleHeaderClick = () => {
    setIsOpen((old) => !old);
  };

  const handleOptionClick = (role: string) => {
    setFieldValue(`${nameBefore}options[${idx}].role`, role);
    setCurrRole(role);
    setIsOpen(false);
  };

  const contentClassName = isOpen ? "open" : undefined;

  return (
    (roles && (
      <Styled.CalculatorTypeSelectWrapper>
        <Styled.CalculatorTypeSelectHeader
          onClick={handleHeaderClick}
          className={contentClassName}
        >
          <span>{currRole}</span>
          <svg
            width="11"
            height="7"
            viewBox="0 0 11 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 0.5L5.5 5.5L10 0.5" stroke="black" />
          </svg>
        </Styled.CalculatorTypeSelectHeader>
        <Styled.CalculatorTypeSelectContent className={contentClassName}>
          {roles.map((role) => (
            <Styled.CalculatorTypeSelectOption
              key={role.name}
              onClick={() => handleOptionClick(role.name)}
            >
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
