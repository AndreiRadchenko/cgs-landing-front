import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { Formik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { queryKeys } from "../../../consts/queryKeys";
import { adminCvService } from "../../../services/adminCvPage";
import CvContentBlock from ".";
import { CustomToast } from "../CustomToast";

import * as Styled from "../../../styles/AdminPage";

import { ICvPageData, ICvResponse } from "../../../types/Admin/AdminCv.types";

const AdminCVsContent = () => {
  const { data, isLoading, refetch }: ICvResponse = useQuery(
    [queryKeys.getCvPage],
    () => adminCvService.getCvPage()
  );

  const { mutateAsync: updateCvPage } = useMutation(
    [queryKeys.updateCvPage],
    async (data: ICvPageData) => {
      return await toast.promise(adminCvService.updateCvPage(data), {
        pending: "Pending update",
        success: "CVs page updated successfully",
        error: "Some things went wrong 🤯",
      });
    }
  );

  const submitForm = async (values: ICvPageData) => {
    document.body.style.cursor = "wait";
    await updateCvPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data} onSubmit={submitForm} validateOnChange={false}>
      <>
        <CvContentBlock />
        <CustomToast />
      </>
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminCVsContent;
