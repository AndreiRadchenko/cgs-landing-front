import { Formik } from "formik";
import React, { useState } from "react";
import ContentBlock from "./Blog/ContentBlock";
import { useQuery } from "react-query";
import { IBlogPageResponse } from "../../../types/Admin/Response.types";
import * as Styled from "../../../styles/AdminPage";
import { queryKeys } from "../../../consts/queryKeys";
import { adminBlogService } from "../../../services/adminBlogPage";

export interface IBlogProps {
  data: IBlogPageResponse | undefined;
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
    () => adminBlogService.getBlogPageData()
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
    >
      <ContentBlock
        isNewArticle={isNewArticle}
        setIsNewArticle={setIsNewArticle}
        article={article}
        setArticle={setArticle}
        refetch={refetch}
      />
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminBlogMainContent;
