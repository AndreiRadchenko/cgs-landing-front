import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../consts/queryKeys";
import * as Styled from "../../../styles/AdminPage";
import EstimationFormPage from "./EstimationFormPage";
import {
  IEstimationFormData,
  IEstimationFormPage,
  IEstimationFormPageResponse,
} from "../../../types/Admin/AdminEstimationForm.types";
import { adminEstimationFormService } from "../../../services/adminEstimationForm";

export interface IEstimationFormProps {
  formData: IEstimationFormData;
  isLoading: boolean;
}

const EstimationFormMainContent = ({
  formData,
  isLoading,
}: IEstimationFormProps) => {
  const {
    data: page1,
    isLoading: isPage1Loading,
  }: IEstimationFormPageResponse = useQuery(
    [queryKeys.getEstimationFormPage],
    () => adminEstimationFormService.getPageData(formData.pages[0])
  );
  const {
    data: page2,
    isLoading: isPage2Loading,
  }: IEstimationFormPageResponse = useQuery(
    [queryKeys.getEstimationFormPage],
    () => adminEstimationFormService.getPageData(formData.pages[1])
  );
  const {
    data: page3,
    isLoading: isPage3Loading,
  }: IEstimationFormPageResponse = useQuery(
    [queryKeys.getEstimationFormPage],
    () => adminEstimationFormService.getPageData(formData.pages[2])
  );

  const submitForm = async (values: IEstimationFormPage) => {
    document.body.style.cursor = "wait";
    console.log("SUBMITTED VALUES");
    console.log(values);
    // await mutateAsync(values);
    // await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHeader>Estimation Form</Styled.AdminHeader>
      {!isPage1Loading && page1 !== undefined && (
        <Formik
          key="globalEstimationFormPage1"
          initialValues={page1!}
          onSubmit={submitForm}
          validateOnChange={false}
        >
          <EstimationFormPage key={page1._id} />
        </Formik>
      )}
      {!isPage2Loading && page2 !== undefined && (
        <Formik
          key="globalEstimationFormPage2"
          initialValues={page2!}
          onSubmit={submitForm}
          validateOnChange={false}
        >
          <EstimationFormPage key={page2._id} />
        </Formik>
      )}
      {!isPage3Loading && page3 !== undefined && (
        <Formik
          key="globalEstimationFormPage3"
          initialValues={page3!}
          onSubmit={submitForm}
          validateOnChange={false}
        >
          <EstimationFormPage key={page3._id} />
        </Formik>
      )}
    </Styled.AdminPaddedBlock>
  );
};

export default EstimationFormMainContent;
