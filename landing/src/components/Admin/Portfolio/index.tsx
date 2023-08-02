import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import AdminPortfolioContentBlock from "./ContentBlock";
import { adminPortfolioService } from "../../../services/adminPortfolioPage";

import { queryKeys } from "../../../consts/queryKeys";
import * as Styled from "../../../styles/AdminPage";
import {
  IPortfolioPageData,
  IPortfolioResponse,
} from "../../../types/Admin/AdminPortfolio.types";

const PortfolioPage = () => {
  const { data, isLoading, refetch }: IPortfolioResponse = useQuery(
    [queryKeys.getPortfolioPage],
    () => adminPortfolioService.getPageData()
  );

  const { mutateAsync } = useMutation(
    [queryKeys.updatePortfolioPage],
    (data: IPortfolioPageData) => adminPortfolioService.updatePageData(data)
  );

  const submitForm = async (values: IPortfolioPageData) => {
    document.body.style.cursor = "wait";
    await mutateAsync(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik
      enableReinitialize
      key="globalPortfolioForm"
      initialValues={data!}
      onSubmit={submitForm}
      validateOnChange={false}
    >
      <AdminPortfolioContentBlock />
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default PortfolioPage;
