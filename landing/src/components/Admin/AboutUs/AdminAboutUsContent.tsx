import React from "react";
import { Formik } from "formik";
import { useMutation, useQuery } from "@tanstack/react-query";

import { queryKeys } from "../../../consts/queryKeys";
import { adminAboutUsService } from "../../../services/adminAboutUsPage";
import AboutUsForm from "./AboutUsForm";

import * as Styled from "../../../styles/AdminPage";
import { IAbout, IAboutUsResponse } from "../../../types/Admin/Response.types";

const AdminAboutUsContent = () => {
  const { data, isLoading, refetch }: IAboutUsResponse = useQuery(
    [queryKeys.getAboutUsPage],
    () => adminAboutUsService.getAboutUsPage()
  );

  const { mutateAsync: updateAboutPage } = useMutation(
    [queryKeys.updateAboutUsPage],
    (data: IAbout) => adminAboutUsService.updateAboutUsPage(data)
  );

  const submitForm = async (values: IAbout) => {
    document.body.style.cursor = "wait";

    await updateAboutPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data} onSubmit={submitForm}>
      <AboutUsForm />
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminAboutUsContent;
