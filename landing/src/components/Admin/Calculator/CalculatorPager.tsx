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
import AdminBlockDropDown from "../Global/AdminBlockDropDown";
import SaveBtn from "../Global/SaveBtn";

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
      {({ values, handleChange, handleSubmit }) => (
        <div>
          <Styled.InputWrapper className="withMarginBottom">
            <AdminHalfGrid>
              <SubHeaderWithInput
                inputStyle={{ marginBottom: 0 }}
                width="100%"
                header="Text main page"
                name="previewTextMessage"
                inputValue={values.previewTextMessage || ""}
                onChangeFunction={handleChange}
              />
              <SubHeaderWithInput
                inputStyle={{ marginBottom: 0 }}
                width="100%"
                header="Text pop-up"
                name="popUpMessage"
                inputValue={values.popUpMessage || ""}
                onChangeFunction={handleChange}
              />
            </AdminHalfGrid>
          </Styled.InputWrapper>
          <AdminBlockDropDown title="PAGER">
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
              <SaveBtn
                handleClick={handleSubmit}
                style={{ marginTop: "37px", marginBottom: "50px" }}
              />
            </Styled.InputWrapper>
          </AdminBlockDropDown>
        </div>
      )}
    </Formik>
  ) : (
    <AdminUnauthorizedModal>Something went wrong :(</AdminUnauthorizedModal>
  );
};

export default CalculatorPager;