import { useQuery } from "@tanstack/react-query";
import React from "react";
import { queryKeys } from "../../../consts/queryKeys";
import { adminCalculatorService } from "../../../services/adminCalculator";
import { AdminUnauthorizedModal } from "../../../styles/AdminPage";
import CalculatorStepItem from "./CalculatorStepItem";

const CalculatorStepsForm = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getCalculatorSteps],
    () => adminCalculatorService.getCalculatorSteps()
  );

  return isLoading ? (
    <AdminUnauthorizedModal>Loading...</AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <div>
      {data &&
        data.map((step, idx) => (
          <CalculatorStepItem
            step={step}
            key={idx}
            index={idx}
            refetch={refetch}
          />
        ))}
    </div>
  ) : (
    <AdminUnauthorizedModal>Something went wrong :(</AdminUnauthorizedModal>
  );
};

export default CalculatorStepsForm;
