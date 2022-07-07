import { Formik } from "formik";
import React, { useState } from "react";
import ContentBlock from "./Blog/ContentBlock";
import { useQuery } from "react-query";
import { IBlogResponse } from "../../../types/Admin/Response.types";
import * as Styled from "../../../styles/AdminPage";
import { queryKeys } from "../../../consts/queryKeys";
import { adminBlogService } from "../../../services/adminBlogPage";

interface IBlogProps {
  data: IBlogResponse | undefined;
  isLoading: boolean;
  refetch: () => Promise<IBlogProps>;
}

const AdminBlogMainContent = () => {
  const [isNewArticle, setIsNewArticle] = useState(true);
  const [article, setArticle] = useState(0);

  const submitForm = async () => {
    document.body.style.cursor = "wait";
    await refetch();
    document.body.style.cursor = "auto";
  };

  const { data, isLoading, refetch }: IBlogProps = useQuery(
    queryKeys.getBlogPage,
    () => adminBlogService.getBlogPage()
  );

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data ? (
    <Formik
      key="blogData"
      validateOnChange={false}
      onSubmit={submitForm}
      initialValues={data}
      validateOnBlur
      enableReinitialize={true}
    >
      <ContentBlock
        data={data}
        isNewArticle={isNewArticle}
        setIsNewArticle={setIsNewArticle}
        article={article}
        setArticle={setArticle}
      />
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminBlogMainContent;
