import { Formik } from "formik";
import React from "react";
import { useQuery } from "react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminGlobalService } from "../../../services/adminHomePage";
import * as Styled from "../../../styles/AdminPage";
import { IPortfolioResponse } from "../../../types/Admin/AdminPortfolio";
import AdminDropDown from "../Global/AdminDropDown";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import AdminPortfolioContentBlock from "./ContentBlock";

interface IPortfolioData {
  data: IPortfolioResponse | undefined;
  isLoading: boolean;
  refetch: () => Promise<IPortfolioData>;
}

const Portfolio = () => {
  const {
    data,
    isLoading,
    refetch,
  }: IPortfolioData = useQuery(queryKeys.getPortfolio, () =>
    adminGlobalService.getPortfolio()
  );

  const submitForm = async (values: IPortfolioResponse) => {
    document.body.style.cursor = "wait";
    // await mutateAsync(values);
    // await refetch();
    console.log(values);
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik
      initialValues={data!}
      onSubmit={submitForm}
      validateOnChange={false}
    >
      {() => <AdminPortfolioContentBlock />}
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default Portfolio;
