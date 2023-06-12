import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import ServiceAiSolutionsContentBlock from ".";
import { queryKeys } from "../../../../consts/queryKeys";
import * as Styled from "../../../../styles/AdminPage";
import { IServiceAi } from "../../../../types/Admin/Response.types";
import { adminAiService } from "../../../../services/services/AdminServiceAiSolution";

const AdminServiceAiSolutionsContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getServiceAiPage],
    () => adminAiService.getAiServicePage()
  );

  const { mutateAsync: updateFaqPage } = useMutation(
    [queryKeys.updateServiceAiPage],
    (data: IServiceAi) => adminAiService.updateAiServicePage(data)
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
      <ServiceAiSolutionsContentBlock />
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceAiSolutionsContent;
