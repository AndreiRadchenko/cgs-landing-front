import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ServiceWebContentBlock from "./";
import { CustomToast } from "../../CustomToast";

import * as Styled from "../../../../styles/AdminPage";

import { queryKeys } from "../../../../consts/queryKeys";

import { adminWebService } from "../../../../services/services/adminServicesWebPage";

import { IServiceWeb } from "../../../../types/Admin/Response.types";

const AdminServiceWebContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getServiceWebPage],
    () => adminWebService.getWebServicePage()
  );
  const { mutateAsync: updateWebServices } = useMutation(
    [queryKeys.updateServiceWebPage],
    async (data: IServiceWeb) => {
      const response = await toast.promise(
        adminWebService.updateWebServicePage(data),
        {
          pending: "Pending update",
          success: "Web services updated successfully 👌",
          error: "Some things went wrong 🤯",
        }
      );
      return response;
    }
  );

  const submitForm = async (values: IServiceWeb) => {
    document.body.style.cursor = "wait";
    await updateWebServices(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <>
      <Formik initialValues={data} onSubmit={submitForm}>
        <ServiceWebContentBlock />
      </Formik>
      <CustomToast />
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceWebContent;
