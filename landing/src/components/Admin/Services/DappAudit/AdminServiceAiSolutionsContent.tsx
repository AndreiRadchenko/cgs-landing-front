import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import ServiceAiSolutionsContentBlock from ".";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CustomToast } from "../../CustomToast";

import * as Styled from "../../../../styles/AdminPage";

import { queryKeys } from "../../../../consts/queryKeys";

import { IServiceAi } from "../../../../types/Admin/Response.types";

import { adminAiService } from "../../../../services/services/AdminServiceAiSolution";

const AdminServiceAiSolutionsContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getServiceAiPage],
    () => adminAiService.getAiServicePage()
  );

  const { mutateAsync: updateFaqPage } = useMutation(
    [queryKeys.updateServiceAiPage],
    async (data: IServiceAi) => {
      return await toast.promise(adminAiService.updateAiServicePage(data), {
        pending: "Pending update",
        success: "Dapp audit updated successfully 👌",
        error: "Some things went wrong 🤯",
      });
    }
  );

  const submitForm = async (values: IServiceAi) => {
    document.body.style.cursor = "wait";
    await updateFaqPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data!} onSubmit={submitForm}>
      <>
        <ServiceAiSolutionsContentBlock />
        <CustomToast />
      </>
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceAiSolutionsContent;
