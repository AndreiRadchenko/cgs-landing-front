import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Formik, FormikHelpers } from "formik";
import React from "react";
import { queryKeys } from "../../../consts/queryKeys";
import { adminCalculatorService } from "../../../services/adminCalculator";
import { AdminSubTitle } from "../../../styles/AdminPage";
import {
  AddButton,
  AdminCalculatorTypeInput,
  CalculatorAdminAddTypeWrapper,
  TypeFieldWrapper,
} from "../../../styles/Calculator/CalculatorAdmin.styled";

interface ICalculatorType {
  name: string;
}

const CalculatorTypeInput = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(
    [queryKeys.addCalculatorType],
    (name: string) => adminCalculatorService.addCalculatorType(name),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getCalculatorData]);
      },
    }
  );

  const initilaValues = {
    name: "",
  };

  const handleSubmit = (
    values: ICalculatorType,
    { resetForm }: FormikHelpers<ICalculatorType>
  ) => {
    mutateAsync(values.name);
    resetForm();
  };

  return (
    <Formik initialValues={initilaValues} onSubmit={handleSubmit}>
      <CalculatorAdminAddTypeWrapper>
        <AdminSubTitle>Specialist</AdminSubTitle>
        <TypeFieldWrapper>
          <AdminCalculatorTypeInput
            name="name"
            placeholder="Add new specialist"
          />
          <AddButton>+</AddButton>
        </TypeFieldWrapper>
      </CalculatorAdminAddTypeWrapper>
    </Formik>
  );
};

export default CalculatorTypeInput;
