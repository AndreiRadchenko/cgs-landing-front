import React from "react";
import { Formik } from "formik";
import { useMutation, useQuery } from "@tanstack/react-query";

import { queryKeys } from "../../../consts/queryKeys";
import { adminContactService } from "../../../services/adminContactPage";
import ContactForm from "./ContactForm";

import * as Styled from "../../../styles/AdminPage";
import {
  IContactPageData,
  IContactResponse,
} from "../../../types/Admin/AdminContact.types";

const AdminContactContent = () => {
  const { data, isLoading, refetch }: IContactResponse = useQuery(
    [queryKeys.getContactPage],
    () => adminContactService.getContactPage()
  );

  const { mutateAsync: updateContactPage } = useMutation(
    [queryKeys.updateContactPage],
    (data: IContactPageData) => adminContactService.updateContactPage(data)
  );

  const submitForm = async (values: IContactPageData) => {
    document.body.style.cursor = "wait";
    await updateContactPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data} onSubmit={submitForm}>
      <ContactForm data={data} />
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminContactContent;
