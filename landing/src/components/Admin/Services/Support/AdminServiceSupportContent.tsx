import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import ServiceSupportContentBlock from ".";

import * as Styled from "../../../../styles/AdminPage";

import { IServiceSupport } from "../../../../types/Admin/Response.types";

import { queryKeys } from "../../../../consts/queryKeys";

import { adminSupportService } from "../../../../services/services/adminServiceSupportPage";

const AdminServiceSupportContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getServiceSupportPage],
    () => adminSupportService.getSupportServicePage()
  );
  const { mutateAsync: updateServiceSupportPage } = useMutation(
    [queryKeys.updateServiceSupportPage],
    (data: IServiceSupport) =>
      adminSupportService.updateSupportServicePage(data)
  );

  const submitForm = async (values: IServiceSupport) => {
    document.body.style.cursor = "wait";
    await updateServiceSupportPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data!} onSubmit={submitForm}>
      <ServiceSupportContentBlock />
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceSupportContent;
