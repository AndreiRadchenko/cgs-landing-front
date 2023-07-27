import React from "react";
import { Formik } from "formik";
import { useQuery, useMutation } from "@tanstack/react-query";

import ServiceUxUiContentBlock from ".";

import * as Styled from "../../../../styles/AdminPage";

import { queryKeys } from "../../../../consts/queryKeys";

import { IUxUiInterface } from "../../../../types/Admin/Response.types";

import { adminUxUiService } from "../../../../services/services/AdminServiceUxUiPage";

const AdminServiceUxUiContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getServiceUxUiPage],
    () => adminUxUiService.getUxUiServicePage()
  );

  const { mutateAsync: updateUxUiPage } = useMutation(
    [queryKeys.updateServiceUxUiPage],
    (data: IUxUiInterface) => adminUxUiService.updateUxUiServicePage(data)
  );

  const submitForm = async (values: IUxUiInterface) => {
    document.body.style.cursor = "wait";
    await updateUxUiPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data!} onSubmit={submitForm}>
      <ServiceUxUiContentBlock />
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong.
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceUxUiContent;
