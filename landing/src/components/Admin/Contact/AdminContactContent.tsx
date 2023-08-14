import React from "react";
import { Formik } from "formik";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { queryKeys } from "../../../consts/queryKeys";
import { adminContactService } from "../../../services/adminContactPage";
import ContactForm from "./ContactForm";
import { CustomToast } from "../CustomToast";

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
    async (data: IContactPageData) => {
      const response = await toast.promise(
        adminContactService.updateContactPage(data),
        {
          pending: "Pending update",
          success: "Data updated successfully 👌",
          error: "Some things went wrong 🤯",
        }
      );
      return response;
    }
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
    <>
      <Formik initialValues={data} onSubmit={submitForm}>
        <ContactForm />
      </Formik>
      <CustomToast />
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminContactContent;
