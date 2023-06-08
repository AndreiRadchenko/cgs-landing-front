import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import ServiceAiSolutionsContentBlock from ".";
import { queryKeys } from "../../../../consts/queryKeys";
import * as Styled from "../../../../styles/AdminPage";
import { IServiceDappAudit } from "../../../../types/Admin/Response.types";
import { adminDappAuditService } from "../../../../services/services/adminServicesDappAuditPage";

const AdminServiceAiSolutionsContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getServiceDappAuditPage],
    () => adminDappAuditService.getDappAuditServicePage()
  );

  const { mutateAsync: updateFaqPage } = useMutation(
    [queryKeys.updateServiceDappAuditPage],
    (data: IServiceDappAudit) =>
      adminDappAuditService.updateDappAuditServicePage(data)
  );

  const submitForm = async (values: IServiceDappAudit) => {
    document.body.style.cursor = "wait";
    await updateFaqPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data!} onSubmit={submitForm}>
      <ServiceAiSolutionsContentBlock />
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceAiSolutionsContent;
