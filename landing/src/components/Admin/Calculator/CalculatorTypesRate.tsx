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
import SaveBtn from "../Global/SaveBtn";
import CalculatorRateComponent from "./CalculatorRateComponent";

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
    values: { roles: ICalculatorRole[] },
    { resetForm }: FormikHelpers<{ roles: ICalculatorRole[] }>
  ) => {
    if (data) {
      const updatedData = data;
      updatedData.roles = values.roles;
      mutateAsync(updatedData);
      resetForm();
    }
  };

  return (
    (data && (
      <Formik
        initialValues={{ roles: data.roles }}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values }) => {
          return (
            <div>
              <CalculatorTypeGrid>
                {values.roles.map((role, idx) => (
                  <CalculatorRateComponent
                    key={role.name}
                    type={role.name}
                    rate={role.rate}
                    idx={idx}
                  />
                ))}
              </CalculatorTypeGrid>
              <SaveBtn
                type="submit"
                title="Save Changes"
                style={{ marginTop: "14px" }}
              />
            </div>
          );
        }}
      </Formik>
    )) ||
    null
  );
};

export default CalculatorTypesRate;
