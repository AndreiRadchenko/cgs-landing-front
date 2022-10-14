import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../../consts/queryKeys";
import { IBlockchainService } from "../../../../types/Admin/Response.types";
import ServiceBlockchainContentBlock from ".";
import { adminBlockchainService } from "../../../../services/services/AdminServiceBlockchainPage";
import * as Styled from "../../../../styles/AdminPage";

const AdminServiceBlockchainContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getServiceBlockchainPage],
    () => adminBlockchainService.getBlockchainDevelopmentPage()
  );

  const { mutateAsync: updateFaqPage } = useMutation(
    [queryKeys.updateServiceBlockchainPage],
    (data: IBlockchainService) =>
      adminBlockchainService.updateBlockchainDevelopmentPage(data)
  );

  const submitForm = async (values: IBlockchainService) => {
    document.body.style.cursor = "wait";
    await updateFaqPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data!} onSubmit={submitForm}>
      <ServiceBlockchainContentBlock />
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceBlockchainContent;
