import { useMutation, useQuery } from "@tanstack/react-query";
import { Formik } from "formik";
import React from "react";
import { queryKeys } from "../../../consts/queryKeys";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";
import {
  AdminHalfGrid,
  AdminUnauthorizedModal,
} from "../../../styles/AdminPage";
import { adminCalculatorService } from "../../../services/adminCalculator";
import { ICalculator } from "../../../types/Admin/Response.types";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";

const CalculatorPager = () => {
  const { data, refetch, isLoading } = useQuery(
    [queryKeys.getCalculatorData],
    () => adminCalculatorService.getCalculatorData()
  );

  const { mutateAsync } = useMutation(
    [queryKeys.updateCalculatorData],
    (data: ICalculator) => adminCalculatorService.updateCalculatorData(data)
  );
  const handleSubmit = async (values: ICalculator) => {
    document.body.style.cursor = "wait";
    await mutateAsync(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <AdminUnauthorizedModal>Loading...</AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data!} onSubmit={handleSubmit}>
      {({ values, handleChange }) => (
        <Styled.InputWrapper>
          <AdminHalfGrid>
            <SubHeaderWithInput
              inputStyle={{ marginBottom: 0 }}
              width="100%"
              header="Text (start)"
              name="startMessage"
              inputValue={values.startMessage || ""}
              onChangeFunction={handleChange}
            />
            <SubHeaderWithInput
              inputStyle={{ marginBottom: 0 }}
              width="100%"
              header="Text (finish)"
              name="finishMessage"
              inputValue={values.finishMessage || ""}
              onChangeFunction={handleChange}
            />
          </AdminHalfGrid>
        </Styled.InputWrapper>
      )}
    </Formik>
  ) : (
    <AdminUnauthorizedModal>Something went wrong :(</AdminUnauthorizedModal>
  );
};

export default CalculatorPager;
