import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "react-query";
import ServiceDbContentBlock from "./";
import { queryKeys } from "../../../../consts/queryKeys";
import { adminDbService } from "../../../../services/services/adminServicesDbPage";
import * as Styled from "../../../../styles/AdminPage";
import { IServiceDb } from "../../../../types/Admin/Response.types";

const AdminServiceDbContent = () => {
  const { data, isLoading, refetch } = useQuery(
    queryKeys.getServiceDbPage,
    () => adminDbService.getDbServicePage()
  );
  const { mutateAsync: updateDbPage } = useMutation(
    queryKeys.updateServiceDbPage,
    (data: IServiceDb) => adminDbService.updateDbServicePage(data)
  );

  const submitForm = async (values: IServiceDb) => {
    document.body.style.cursor = "wait";
    await updateDbPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data!} onSubmit={submitForm}>
      <ServiceDbContentBlock />
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceDbContent;
