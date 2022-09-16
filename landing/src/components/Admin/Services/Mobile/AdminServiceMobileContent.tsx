import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "react-query";
import ServiceMobileContentBlock from ".";
import { queryKeys } from "../../../../consts/queryKeys";
import { adminPortfolioPageService } from "../../../../services/adminPortfolioPage";
import { adminMobileService } from "../../../../services/services/adminServicesMobilePage";
import * as Styled from "../../../../styles/AdminPage";
import {
  IMetaBlock,
  IServiceMobile,
} from "../../../../types/Admin/Response.types";

interface IPortfolioProps {
  categories: string[];
  meta: IMetaBlock;
  reviews: [];
}

const AdminServiceMobileContent = () => {
  const { data, isLoading, refetch } = useQuery(
    queryKeys.getServiceMobilePage,
    () => adminMobileService.getMobileServicePage()
  );

  const { data: portfolio } = useQuery(queryKeys.getPortfolioPage, () =>
    adminPortfolioPageService.getPortfolio()
  );

  console.log(portfolio);

  const { mutateAsync: updateFaqPage } = useMutation(
    queryKeys.updateServiceMobilePage,
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
