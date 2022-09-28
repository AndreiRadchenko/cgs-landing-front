import { Formik, FormikHelpers, FormikValues } from "formik";
import React, { useState } from "react";
import ContentBlock from "./Blog/ContentBlock";
import { useMutation, useQuery } from "react-query";
import {
  // IArticle,
  IBlogPageResponse,
  IView,
} from "../../../types/Admin/Response.types";
import * as Styled from "../../../styles/AdminPage";
import { queryKeys } from "../../../consts/queryKeys";
import { adminBlogService } from "../../../services/adminBlogPage";
import MetaTagsBlock from "../MetaTagsBlock";
import ArticleForm from "./Blog/ArticleForm";

export interface IBlogProps {
  data: IBlogPageResponse | undefined;
  isLoading: boolean;
  refetch: () => Promise<IBlogProps>;
}

const AdminBlogMainContent = () => {
  const [isNewArticle, setIsNewArticle] = useState(true);
  const [article, setArticle] = useState(0);

  const submitForm = async (values: IBlogPageResponse) => {
    document.body.style.cursor = "wait";
    mutateAsync(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  const { mutateAsync } = useMutation(
    queryKeys.updateBlogPage,
    (pageData: IBlogPageResponse) =>
      adminBlogService.updateBlogPageData(pageData)
  );

  const { data, isLoading, refetch }: IBlogProps = useQuery(
    queryKeys.getBlogPage,
    () => adminBlogService.getBlogPageData()
  );

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data ? (
    <Formik
      key="blogPageData"
      validateOnChange={false}
      onSubmit={submitForm}
      initialValues={data}
      validateOnBlur
    >
      {({ handleSubmit }) => (
        <div>
          <ArticleForm
            article={article}
            setArticle={setArticle}
            isNewArticle={isNewArticle}
            setIsNewArticle={setIsNewArticle}
          />

          <MetaTagsBlock theme="dark" />
          <Styled.AdminPaddedBlock>
            <Styled.AdminBigButton type="submit" onClick={() => handleSubmit()}>
              Submit
            </Styled.AdminBigButton>
          </Styled.AdminPaddedBlock>
        </div>
      )}
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminBlogMainContent;
