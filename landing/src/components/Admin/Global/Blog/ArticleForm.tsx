import { Form, Formik, FormikHelpers, useFormikContext } from "formik";
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { newBlogArticle } from "../../../../consts";
import { queryKeys } from "../../../../consts/queryKeys";
import { adminBlogService } from "../../../../services/adminBlogPage";
import { adminSitemapService } from "../../../../services/adminSitemapPage";
import {
  IArticle,
  IBlogPageResponse,
  ISitemapData,
} from "../../../../types/Admin/Response.types";
import ArticleAddAndEdit from "./ArticleAddAndEdit";
import { IArticleForm } from "../../../../types/Admin/Blog.types";
import { formatsDateWithTime } from "../../../../utils/formatsDateWithTime";
import { AdminBlogValidation } from "../../../../validations/AdminBlogValidation";

const META_TITLE_MAX = 60;
const META_DESCRIPTION_MAX = 160;

const ArticleForm = ({
  article,
  articles,
  setIsNewArticle,
  isNewArticle,
  setArticle,
  sitemap,
  scrollHandler,
}: IArticleForm) => {
  const { values } = useFormikContext<IBlogPageResponse>();
  const queryClient = useQueryClient();

  const { mutateAsync: postArticle } = useMutation(
    [queryKeys.postArticle],
    (dataToUpdate: IArticle) => adminBlogService.postArticle(dataToUpdate),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getBlogArticles]);
      },
    }
  );

  const { mutateAsync: editArticle } = useMutation(
    [queryKeys.updateBlogArticle],
    (dataToUpdate: IArticle) => adminBlogService.updateById(dataToUpdate),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getBlogArticles]);
      },
    }
  );

  const { mutateAsync: updateSitemap } = useMutation(
    [queryKeys.updateSitemap],
    (updatedSitemap: ISitemapData) =>
      adminSitemapService.updateSitemapData(updatedSitemap),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getSitemapData]);
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

    if (values.scheduleArticle) {
      values.publishedDate = formatsDateWithTime(values.scheduleArticle);
      values.disabled = false;
    }

    if (!values.publishedDate) {
      values.publishedDate = formatsDateWithTime();
    }

    if (isNewArticle) {
      await postArticle(values);
      setIsNewArticle(false);
    } else {
      await editArticle(values);
    }

    if (sitemap && !isNewArticle && values.url !== articles[article].url) {
      const sitemapToUpdate = sitemap;

      const index = sitemapToUpdate.includedPages.indexOf(
        `blog/${articles[article].url}`
      );

      index > -1 &&
        sitemapToUpdate.includedPages.splice(index, 1, `blog/${values.url}`) &&
        updateSitemap(sitemapToUpdate);
    }

    resetForm();
    setArticle(0);
    setIsNewArticle(true);
    setFieldValue("meta.metaTitle", "");
    setFieldValue("meta.metaDescription", "");
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
        validationSchema={AdminBlogValidation}
        validateOnBlur={false}
      >
        <Form>
          <ArticleAddAndEdit
            possibleTags={values.possibleTags}
            article={article}
            isNewArticle={isNewArticle}
            setArticle={setArticle}
            setIsNewArticle={setIsNewArticle}
            scrollHandler={scrollHandler}
          />
        </Form>
      </Formik>
    ) || <div>no Articles</div>
  );
};

export default ArticleForm;
