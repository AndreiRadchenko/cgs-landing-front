import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../../consts/queryKeys";
import { ICloudService } from "../../../../types/Admin/Response.types";
import ServiceCloudContentBlock from ".";
import { adminCloudService } from "../../../../services/services/AdminServicesCloudSolution";
import * as Styled from "../../../../styles/AdminPage";

const AdminServiceCloudContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getServiceCloudPage],
    () => adminCloudService.getCloudSolutionPage()
  );

  const { mutateAsync: updateFaqPage } = useMutation(
    [queryKeys.updateServiceCloudPage],
    (data: ICloudService) => adminCloudService.updateCloudSolutionPage(data)
  );

  const submitForm = async (values: ICloudService) => {
    document.body.style.cursor = "wait";
    await updateFaqPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data!} onSubmit={submitForm}>
      <ServiceCloudContentBlock />
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceCloudContent;
