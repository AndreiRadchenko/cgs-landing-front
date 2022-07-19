import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { Formik } from "formik";
import { useMutation, useQuery } from "react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { IFaqData, IFaqResponse } from "../../../types/Admin/AdminFaq.types";
import { adminFaqService } from "../../../services/adminFaqPage";
import FaqContentBlock from "./FaqContentBlock";

const Faq = () => {
  const { data, isLoading, refetch }: IFaqResponse = useQuery(
    queryKeys.getFaqPage,
    () => adminFaqService.getFaqPage()
  );

  const { mutateAsync: updateFaqPage } = useMutation(
    queryKeys.updateFaqPage,
    (data: IFaqData) => adminFaqService.updateFaqPage(data)
  );

  const submitForm = async (values: IFaqData) => {
    document.body.style.cursor = "wait";
    await updateFaqPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik
      key="globalFaqForm"
      initialValues={data!}
      onSubmit={submitForm}
      enableReinitialize={true}
    >
      <FaqContentBlock />
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default Faq;
