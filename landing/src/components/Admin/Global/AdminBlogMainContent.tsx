import { Formik } from "formik";
import React, { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IBlogPageResponse } from "../../../types/Admin/Response.types";
import * as Styled from "../../../styles/AdminPage";
import { queryKeys } from "../../../consts/queryKeys";
import { adminBlogService } from "../../../services/adminBlogPage";
import MetaTagsBlock from "../MetaTagsBlock";
import ArticleForm from "./Blog/ArticleForm";
import PublishedArticles from "./Blog/PublishedArticles";
import { adminSitemapService } from "../../../services/adminSitemapPage";

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
    [queryKeys.updateBlogPage],
    (pageData: IBlogPageResponse) =>
      adminBlogService.updateBlogPageData(pageData)
  );

  const { data, isLoading, refetch }: IBlogProps = useQuery(
    [queryKeys.getBlogPage],
    () => adminBlogService.getBlogPageData()
  );

  const { data: articles } = useQuery([queryKeys.getBlogArticles], () =>
    adminBlogService.getArticles()
  );

  const { data: views } = useQuery([queryKeys.views], () =>
    adminBlogService.getViews()
  );

  const { data: sitemap } = useQuery([queryKeys.getSitemapData], () =>
    adminSitemapService.getSitemapData()
  );

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data && views && articles ? (
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
            articles={articles}
            setArticle={setArticle}
            isNewArticle={isNewArticle}
            setIsNewArticle={setIsNewArticle}
            views={views}
            sitemap={sitemap}
          />
          <PublishedArticles
            views={views}
            article={article}
            setArticle={setArticle}
            isNewArticle={isNewArticle}
            setIsNewArticle={setIsNewArticle}
            data={articles}
            sitemap={sitemap}
          />
          <MetaTagsBlock theme="dark" sitemap="blog" />
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
