import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminGlobalService } from "../../../services/adminHomePage";
import * as Styled from "../../../styles/AdminPage";
import { IPortfolioResponse } from "../../../types/Admin/AdminPortfolio";
import AdminPortfolioContentBlock from "./ContentBlock";
import { IPortfolioData } from "./Portfolio.types";

const Portfolio = () => {
  const { data, isLoading, refetch }: IPortfolioData = useQuery(
    queryKeys.getPortfolio,
    () => adminGlobalService.getPortfolio()
  );

  const { mutateAsync } = useMutation(
    queryKeys.updatePortfolio,
    (data: IPortfolioResponse) => adminGlobalService.updatePortfolio(data)
  );

  const submitForm = async (values: IPortfolioResponse) => {
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

export default Portfolio;
