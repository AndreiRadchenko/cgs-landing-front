import { Formik } from "formik";
import React, { useState } from "react";
import ContentBlock from "./Blog/ContentBlock";
import { useQuery } from "react-query";
import { IBlogResponse } from "../../../types/Admin/Response.types";
import * as Styled from "../../../styles/AdminPage";

interface IBlogProps {
  data: IBlogResponse | undefined;
  isLoading: boolean;
  refetch: () => Promise<IBlogProps>;
}

const AdminBlogMainContent = () => {
  const [isNewArticle, setIsNewArticle] = useState(true);
  const [article, setArticle] = useState(0);
  const submitForm = () => {
    console.log("");
  };
  // const { data, isLoading, refetch } = useQuery(queryKeys.getBlogPage, () =>
  //   adminBlogService.getBlogPage()
  // );

  const { isLoading, data, refetch }: IBlogProps = useQuery(
    "blogData",
    async () =>
      await fetch("http://localhost:5000/api/blog").then((res) => res.json())
  );

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik
      key="blogData"
      validateOnChange={false}
      onSubmit={submitForm}
      initialValues={data}
    >
      <ContentBlock
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
