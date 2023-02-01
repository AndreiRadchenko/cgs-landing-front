import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormikContext } from "formik";
import React from "react";
import { queryKeys } from "../../../consts/queryKeys";
import { adminCalculatorService } from "../../../services/adminCalculator";
import { AdminSubTitle } from "../../../styles/AdminPage";
import {
  CalculatorPriceDeleteBtn,
  CalculatorPriceField,
  CalculatorRateComponentWrapper,
  CalculatorRateFieldWrapper,
} from "../../../styles/Calculator/CalculatorAdmin.styled";
import {
  ICalculator,
  ICalculatorRole,
} from "../../../types/Admin/Response.types";

interface ICalculatorRateComponentProps {
  type: string;
  rate: number;
  idx: number;
}

const CalculatorRateComponent = ({
  type,
  rate,
  idx,
}: ICalculatorRateComponentProps) => {
  const { values, handleChange, handleSubmit } = useFormikContext<{
    roles: ICalculatorRole[];
  }>();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICalculator>([
    queryKeys.getCalculatorData,
  ]);

  const { mutateAsync } = useMutation(
    [queryKeys.updateCalculatorData],
    (data: ICalculator) => adminCalculatorService.updateCalculatorData(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getCalculatorData]);
      },
    }
  );

  const handleDelete = () => {
    if (data) {
      const filtered = data;
      filtered.roles = filtered.roles.filter((role) => role.name !== type);
      mutateAsync(filtered);
      values.roles = filtered.roles;
      handleSubmit();
    }
  };

  return (
    <CalculatorRateComponentWrapper>
      <AdminSubTitle size="16px">{type}</AdminSubTitle>
      <CalculatorRateFieldWrapper>
        <CalculatorPriceField
          name={`roles.[${idx}].rate`}
          type="number"
          value={rate}
          onChange={handleChange}
        />
      </CalculatorRateFieldWrapper>
      <CalculatorPriceDeleteBtn onClick={handleDelete}>
        delete
      </CalculatorPriceDeleteBtn>
    </CalculatorRateComponentWrapper>
  );
};

export default CalculatorRateComponent;
