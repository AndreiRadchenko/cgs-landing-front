import React from "react";
import * as Styled from "../../../styles/AdminPage";

import { Formik } from "formik";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminGlobalService } from "../../../services/adminHomePage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import AdminHomepageForm from "./AdminHomepageForm";

interface IMainProps {
  data: IDataResponse | undefined;
  isLoading: boolean;
  refetch: () => Promise<IMainProps>;
}

const AdminMainContent = () => {
  const { data, isLoading, refetch }: IMainProps = useQuery(
    [queryKeys.GetFullPage],
    () => adminGlobalService.getFullPage()
  );

  const { mutateAsync } = useMutation(
    [queryKeys.PutHomePageData],
    (data: IDataResponse) => adminGlobalService.updateFullPage(data)
  );

  const submitForm = async (values: IDataResponse) => {
    document.body.style.cursor = "wait";
    await mutateAsync(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik
      initialValues={data!}
      onSubmit={submitForm}
      validateOnChange={false}
      enableReinitialize={true}
    >
      <AdminHomepageForm />
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminMainContent;
