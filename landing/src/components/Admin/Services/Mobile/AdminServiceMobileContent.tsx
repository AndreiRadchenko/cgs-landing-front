import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import ServiceMobileContentBlock from ".";
import { queryKeys } from "../../../../consts/queryKeys";
import { adminMobileService } from "../../../../services/services/adminServicesMobilePage";
import * as Styled from "../../../../styles/AdminPage";
import { IServiceMobile } from "../../../../types/Admin/Response.types";

const AdminServiceMobileContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getServiceMobilePage],
    () => adminMobileService.getMobileServicePage()
  );

  const { mutateAsync: updateFaqPage } = useMutation(
    [queryKeys.updateServiceMobilePage],
    (data: IServiceMobile) => adminMobileService.updateMobileServicePage(data)
  );

  const submitForm = async (values: IServiceMobile) => {
    document.body.style.cursor = "wait";
    await updateFaqPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data!} onSubmit={submitForm}>
      <ServiceMobileContentBlock />
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceMobileContent;
