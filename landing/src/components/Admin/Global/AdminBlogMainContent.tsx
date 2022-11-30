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
import { useScrollTo } from "../../../hooks/useScrollTo";
import PodcastForm from "./Blog/PodcastForm";

export interface IBlogProps {
  data: IBlogPageResponse | undefined;
  isLoading: boolean;
  refetch: () => Promise<IBlogProps>;
}

const AdminBlogMainContent = () => {
  const [isNewArticle, setIsNewArticle] = useState(true);
  const [article, setArticle] = useState(0);
  const [ref, scrollTo] = useScrollTo<HTMLDivElement>();

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
    <Styled.AdminContentBlock>
      <Formik
        key="blogPageData"
        validateOnChange={false}
        onSubmit={submitForm}
        initialValues={data}
        validateOnBlur
      >
        <div>
          <ArticleForm
            article={article}
            articles={articles}
            setArticle={setArticle}
            isNewArticle={isNewArticle}
            setIsNewArticle={setIsNewArticle}
            views={views}
            sitemap={sitemap}
            scrollHandler={scrollTo}
          />
          <PublishedArticles
            scrollRef={ref}
            views={views}
            article={article}
            setArticle={setArticle}
            isNewArticle={isNewArticle}
            setIsNewArticle={setIsNewArticle}
            data={articles}
            sitemap={sitemap}
          />
          <PodcastForm />
          <Styled.MetaBlockWraper>
            <MetaTagsBlock theme="dark" sitemap="blog" />
          </Styled.MetaBlockWraper>
        </div>
      </Formik>
    </Styled.AdminContentBlock>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminBlogMainContent;
