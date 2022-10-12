import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { Formik } from "formik";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminAboutUsService } from "../../../services/adminAboutUsPage";
import { IAbout, IAboutUsResponse } from "../../../types/Admin/Response.types";
import AboutUsContentBlock from ".";

const AdminAboutUsContent = () => {
  const { data, isLoading, refetch }: IAboutUsResponse = useQuery(
    [queryKeys.getAboutUsPage],
    () => adminAboutUsService.getAboutUsPage()
  );

  const { mutateAsync: updateFaqPage } = useMutation(
    [queryKeys.updateAboutUsPage],
    (data: IAbout) => adminAboutUsService.updateAboutUsPage(data)
  );

  const submitForm = async (values: IAbout) => {
    document.body.style.cursor = "wait";
    await updateFaqPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data!} onSubmit={submitForm}>
      <AboutUsContentBlock />
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminAboutUsContent;
