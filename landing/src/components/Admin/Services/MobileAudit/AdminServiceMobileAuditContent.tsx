import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import ServiceMobileAuditContentBlock from ".";

import * as Styled from "../../../../styles/AdminPage";

import { queryKeys } from "../../../../consts/queryKeys";

import { adminMobileAuditService } from "../../../../services/services/adminServiceMobileAuditPage";

import { IServiceMobileAudit } from "../../../../types/Admin/Response.types";

const AdminServiceMobileAuditContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getServiceMobileAuditPage],
    () => adminMobileAuditService.getMobileAuditServicePage()
  );

  const { mutateAsync: updateFaqPage } = useMutation(
    [queryKeys.updateServiceMobileAuditPage],
    (data: IServiceMobileAudit) =>
      adminMobileAuditService.updateMobileAuditServicePage(data)
  );

  const submitForm = async (values: IServiceMobileAudit) => {
    document.body.style.cursor = "wait";
    await updateFaqPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data!} onSubmit={submitForm}>
      <ServiceMobileAuditContentBlock />
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceMobileAuditContent;
