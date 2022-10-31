import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import ServiceWebAuditContentBlock from ".";
import { queryKeys } from "../../../../consts/queryKeys";
import { adminWebAuditService } from "../../../../services/services/adminServiceWebAuditPage";
import * as Styled from "../../../../styles/AdminPage";
import { IServiceWebAudit } from "../../../../types/Admin/Response.types";

const AdminServiceWebAuditContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getServiceWebAuditPage],
    () => adminWebAuditService.getWebAuditServicePage()
  );

  const { mutateAsync: updateFaqPage } = useMutation(
    [queryKeys.updateServiceWebAuditPage],
    (data: IServiceWebAudit) =>
      adminWebAuditService.updateWebAuditServicePage(data)
  );

  const submitForm = async (values: IServiceWebAudit) => {
    document.body.style.cursor = "wait";
    await updateFaqPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data!} onSubmit={submitForm}>
      <ServiceWebAuditContentBlock />
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceWebAuditContent;
