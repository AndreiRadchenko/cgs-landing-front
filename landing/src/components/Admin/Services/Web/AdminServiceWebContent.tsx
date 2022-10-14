import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import ServiceWebContentBlock from "./";
import { queryKeys } from "../../../../consts/queryKeys";
import { adminWebService } from "../../../../services/services/adminServicesWebPage";
import * as Styled from "../../../../styles/AdminPage";
import { IServiceWeb } from "../../../../types/Admin/Response.types";

const AdminServiceWebContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getServiceWebPage],
    () => adminWebService.getWebServicePage()
  );
  const { mutateAsync: updateFaqPage } = useMutation(
    [queryKeys.updateServiceWebPage],
    (data: IServiceWeb) => adminWebService.updateWebServicePage(data)
  );

  const submitForm = async (values: IServiceWeb) => {
    document.body.style.cursor = "wait";
    await updateFaqPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data!} onSubmit={submitForm}>
      <ServiceWebContentBlock />
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceWebContent;
