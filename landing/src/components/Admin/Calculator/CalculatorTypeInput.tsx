import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { queryKeys } from "../../../consts/queryKeys";
import { adminCalculatorService } from "../../../services/adminCalculator";
import * as AdminPageStyled from "../../../styles/AdminPage";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";

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

  const initialValues = {
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
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Styled.CalculatorAdminAddTypeWrapper>
          <AdminPageStyled.AdminSubTitle>
            Specialist
          </AdminPageStyled.AdminSubTitle>
          <Styled.TypeFieldWrapper>
            <Styled.AdminCalculatorTypeInput
              name="name"
              placeholder="Add new specialist"
            />
            <Styled.AddButton type="submit">+</Styled.AddButton>
          </Styled.TypeFieldWrapper>
        </Styled.CalculatorAdminAddTypeWrapper>
      </Form>
    </Formik>
  );
};

export default CalculatorTypeInput;
