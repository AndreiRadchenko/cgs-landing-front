import { useMutation, useQuery } from "@tanstack/react-query";
import { Formik } from "formik";
import React from "react";
import { queryKeys } from "../../../consts/queryKeys";
import { adminCalculatorService } from "../../../services/adminCalculator";
import { AdminUnauthorizedModal } from "../../../styles/AdminPage";
import { ICalculatorStep } from "../../../types/Admin/Response.types";
import CalculatorStepFormContent from "./CalculatorStepFormContent";

const CalculatorStepsForm = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getCalculatorSteps],
    () => adminCalculatorService.getCalculatorSteps()
  );

  const { mutateAsync } = useMutation(
    [queryKeys.updateCalculatorSteps],
    (data: ICalculatorStep) =>
      adminCalculatorService.updateCalculatorSteps(data)
  );
  const handleSubmit = async (values: ICalculatorStep[]) => {
    // document.body.style.cursor = "wait";
    // await mutateAsync(values);
    // await refetch();
    // document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <AdminUnauthorizedModal>Loading...</AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data!} onSubmit={handleSubmit}>
      <CalculatorStepFormContent />
    </Formik>
  ) : (
    <AdminUnauthorizedModal>Something went wrong :(</AdminUnauthorizedModal>
  );
};

export default CalculatorStepsForm;
