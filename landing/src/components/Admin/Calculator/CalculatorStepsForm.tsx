import { useMutation, useQuery } from "@tanstack/react-query";
import { Formik } from "formik";
import React from "react";
import { queryKeys } from "../../../consts/queryKeys";
import { adminCalculatorService } from "../../../services/adminCalculator";
import { ICalculator } from "../../../types/Admin/Response.types";

const CalculatorStepsForm = () => {
  const { data, refetch } = useQuery([queryKeys.getCalculatorSteps], () =>
    adminCalculatorService.getCalculatorSteps()
  );

  const { mutateAsync } = useMutation(
    [queryKeys.updateCalculatorSteps],
    (data: ICalculator) => adminCalculatorService.updateCalculatorData(data)
  );
  const handleSubmit = async (values: ICalculator) => {
    document.body.style.cursor = "wait";
    await mutateAsync(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return <div></div>;
};

export default CalculatorStepsForm;
