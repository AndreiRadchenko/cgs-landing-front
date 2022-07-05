import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "react-query";
import { queryKeys } from "../../../consts/queryKeys";
import * as Styled from "../../../styles/AdminPage";
import AdminPortfolioContentBlock from "./ContentBlock";
import {
  IPortfolioData,
  IPortfolioResponse,
} from "../../../types/Admin/AdminPortfolioPage.types";
import { adminPortfolioPageService } from "../../../services/adminPortfolioPage";

const PortfolioPage = () => {
  const { data, isLoading, refetch }: IPortfolioResponse = useQuery(
    queryKeys.getPortfolioPage,
    () => adminPortfolioPageService.getPortfolio()
  );

  const { mutateAsync } = useMutation(
    queryKeys.updatePortfolioPage,
    (data: IPortfolioData) => adminPortfolioPageService.updatePortfolio(data)
  );

  const submitForm = async (values: IPortfolioData) => {
    document.body.style.cursor = "wait";
    await mutateAsync(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik
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
