import { useMutation, useQuery } from "@tanstack/react-query";
import { Formik } from "formik";
import React from "react";
import { queryKeys } from "../../../consts/queryKeys";
import * as Styled from "../../../styles/AdminCalculator.styled";
import { AdminHalfGrid } from "../../../styles/AdminPage";
import { adminCalculatorService } from "../../../services/adminCalculator";
import { ICalculator } from "../../../types/Admin/Response.types";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";

const CalculatorPager = () => {
  const { data, refetch } = useQuery([queryKeys.getCalculatorData], () =>
    adminCalculatorService.getCalculatorData()
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

  return (
    <Formik initialValues={data!} onSubmit={handleSubmit}>
      {({ values, handleChange }) => (
        <Styled.InputWrapper>
          <AdminHalfGrid>
            <SubHeaderWithInput
              inputStyle={{ marginBottom: 0 }}
              width="100%"
              isAdmin
              header="Text (start)"
              name={`CardsBlock.${name}.subtitle`}
              inputValue={values.startMessage || ""}
              onChangeFunction={handleChange}
            />
            <SubHeaderWithInput
              inputStyle={{ marginBottom: 0 }}
              width="100%"
              isAdmin
              header="Text (finish)"
              name={`CardsBlock.${name}.subtitle`}
              inputValue={values.finishMessage || ""}
              onChangeFunction={handleChange}
            />
          </AdminHalfGrid>
        </Styled.InputWrapper>
      )}
    </Formik>
  );
};

export default CalculatorPager;
