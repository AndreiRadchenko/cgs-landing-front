import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Formik, FormikHelpers } from "formik";
import React from "react";
import { queryKeys } from "../../../consts/queryKeys";
import { adminCalculatorService } from "../../../services/adminCalculator";
import { CalculatorTypeGrid } from "../../../styles/Calculator/CalculatorAdmin.styled";
import {
  ICalculator,
  ICalculatorRole,
} from "../../../types/Admin/Response.types";

const CalculatorTypesRate = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICalculator>([
    queryKeys.getCalculatorData,
  ]);

  const { mutateAsync } = useMutation(
    [queryKeys.updateCalculatorData],
    (data: ICalculator) => adminCalculatorService.updateCalculatorData(data)
  );

  const handleSubmit = (
    values: ICalculatorRole[],
    { resetForm }: FormikHelpers<ICalculatorRole[]>
  ) => {
    if (data) {
      const updatedData = data;
      updatedData.roles = values;
      mutateAsync(updatedData);
      resetForm();
    }
  };
  return (
    (data && (
      <Formik initialValues={data.roles} onSubmit={handleSubmit}>
        <CalculatorTypeGrid></CalculatorTypeGrid>
      </Formik>
    )) ||
    null
  );
};

export default CalculatorTypesRate;
