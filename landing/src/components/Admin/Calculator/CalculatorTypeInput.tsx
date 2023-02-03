import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik, FormikHelpers } from "formik";
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

export interface ICalculatorType {
  name: string;
  _id: string;
}

const CalculatorTypeInput = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(
    [queryKeys.addCalculatorType],
    (data: ICalculatorType) => adminCalculatorService.addCalculatorType(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getCalculatorData]);
      },
    }
  );

  const initilaValues = {
    name: "",
    _id: `${Math.random()}.${Math.random()}`,
  };

  const handleSubmit = (
    values: ICalculatorType,
    { resetForm }: FormikHelpers<ICalculatorType>
  ) => {
    mutateAsync(values);
    resetForm();
  };

  return (
    <Formik initialValues={initilaValues} onSubmit={handleSubmit}>
      <Form>
        <CalculatorAdminAddTypeWrapper>
          <AdminSubTitle>Specialist</AdminSubTitle>
          <TypeFieldWrapper>
            <AdminCalculatorTypeInput
              name="name"
              placeholder="Add new specialist"
            />
            <AddButton type="submit">+</AddButton>
          </TypeFieldWrapper>
        </CalculatorAdminAddTypeWrapper>
      </Form>
    </Formik>
  );
};

export default CalculatorTypeInput;
