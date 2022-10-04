import { Formik, FormikHelpers, useFormikContext } from "formik";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { newBlogArticle } from "../../../../consts";
import { queryKeys } from "../../../../consts/queryKeys";
import { adminBlogService } from "../../../../services/adminBlogPage";
import { adminSitemapService } from "../../../../services/adminSitemapPage";
import {
  IArticle,
  IBlogPageResponse,
  ISitemapData,
  IView,
} from "../../../../types/Admin/Response.types";
import ArticleAddAndEdit from "./ArticleAddAndEdit";

interface IArticleForm {
  article: number;
  articles: IArticle[];
  isNewArticle: boolean;
  setIsNewArticle: (val: boolean) => void;
  views: IView[];
  setArticle: (val: number) => void;
  sitemap?: ISitemapData | void;
}

const META_TITLE_MAX = 60;
const META_DESCRIPTION_MAX = 160;

const ArticleForm = ({
  article,
  articles,
  setIsNewArticle,
  isNewArticle,
  setArticle,
  views,
  sitemap,
}: IArticleForm) => {
  const { values } = useFormikContext<IBlogPageResponse>();
  const queryClient = useQueryClient();

  const { mutateAsync: postArticle } = useMutation(
    queryKeys.postArticle,
    (dataToUpdate: IArticle) => adminBlogService.postArticle(dataToUpdate),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getBlogArticles]);
      },
    }
  );

  const { mutateAsync: editArticle } = useMutation(
    queryKeys.updateBlogArticle,
    (dataToUpdate: IArticle) => adminBlogService.updateById(dataToUpdate),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getBlogArticles]);
      },
    }
  );

  const { mutateAsync: updateSitemap } = useMutation(
    queryKeys.updateSitemap,
    (updatedSitemap: ISitemapData) =>
      adminSitemapService.updateSitemapData(updatedSitemap),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getSitemapData]);
      },
    }
  );

  const { mutateAsync: updateViews } = useMutation(
    queryKeys.updateViews,
    (dataToUpdate: IView) => adminBlogService.updateViews(dataToUpdate)
  );

  const { mutateAsync: addViews } = useMutation(
    queryKeys.addViews,
    (dataToUpdate: IView) => adminBlogService.addViews(dataToUpdate),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.views]);
      },
    }
  );

  const submitFunc = async (
    values: IArticle,
    { resetForm, setFieldValue }: FormikHelpers<IArticle>
  ) => {
    if (values.meta.metaTitle === "") {
      (values.meta.metaTitle =
        values.title.length > META_TITLE_MAX
          ? values.title.substring(0, META_TITLE_MAX)
          : values.title),
        values.title;
    }

    if (values.meta.metaDescription === "") {
      (values.meta.metaDescription =
        values.description.length > META_DESCRIPTION_MAX
          ? values.description.substring(0, META_DESCRIPTION_MAX)
          : values.description),
        values.description;
    }

    isNewArticle ? await postArticle(values) : await editArticle(values);
    if (views) {
      const updatedViews = views.find(
        (view) => view.articleUrl === articles[article].url
      );

      if (isNewArticle) {
        await addViews({
          articleUrl: values.url,
          views: 231,
        });
      } else if (updatedViews) {
        updatedViews.articleUrl = values.url;
        updatedViews && (await updateViews(updatedViews));
      }
    }

    if (sitemap && !isNewArticle && values.url !== articles[article].url) {
      const sitemaptoUpdate = sitemap;

      const index = sitemaptoUpdate.includedPages.indexOf(
        `blog/${articles[article].url}`
      );

      index > -1 &&
        sitemaptoUpdate.includedPages.splice(index, 1, `blog/${values.url}`) &&
        updateSitemap(sitemaptoUpdate);
    }

    resetForm();
    setFieldValue("image", null);
    setFieldValue("author.image", null);
    setFieldValue("meta.metaTitle", "");
    setFieldValue("meta.metaDescription", "");
    setArticle(0);
    setIsNewArticle(true);
  };

  return (
    (
      <Formik
        key={`${isNewArticle} article form`}
        initialValues={
          isNewArticle
            ? JSON.parse(JSON.stringify(newBlogArticle))
            : articles[article]
        }
        onSubmit={submitFunc}
      >
        <ArticleAddAndEdit
          possibleTags={values.possibleTags}
          article={article}
          isNewArticle={isNewArticle}
        />
      </Formik>
    ) || <div>no Articles</div>
  );
};

export default ArticleForm;
