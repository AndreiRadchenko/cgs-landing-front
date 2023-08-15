import React, { useEffect } from "react";
import { Form, Formik, FormikHelpers, useFormikContext } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ArticleAddAndEdit from "./ArticleAddAndEdit";
import { adminBlogService } from "../../../../services/adminBlogPage";
import { adminSitemapService } from "../../../../services/adminSitemapPage";
import { formatsDateWithTime } from "../../../../utils/formatsDateWithTime";
import { AdminBlogValidation } from "../../../../validations/AdminBlogValidation";
import { CustomToast } from "../../CustomToast";

import {
  META_DESCRIPTION_MAX,
  META_TITLE_MAX,
  newBlogArticle,
} from "../../../../consts";
import {
  IArticle,
  IBlogPageResponse,
  ISitemapData,
} from "../../../../types/Admin/Response.types";
import { queryKeys } from "../../../../consts/queryKeys";
import { IArticleForm } from "../../../../types/Admin/Blog.types";

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
    async (dataToUpdate: IArticle) => {
      const response = await toast.promise(
        adminBlogService.postArticle(dataToUpdate),
        {
          pending: "Pending update",
          success: "Data updated successfully 👌",
          error: "Some things went wrong 🤯",
        }
      );
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getBlogArticles]);
      },
    }
  );

  const { mutateAsync: editArticle } = useMutation(
    [queryKeys.updateBlogArticle],
    async (dataToUpdate: IArticle) => {
      const response = await toast.promise(
        adminBlogService.updateById(dataToUpdate),
        {
          pending: "Pending update",
          success: "Data updated successfully 👌",
          error: "Some things went wrong 🤯",
        }
      );
      return response;
    },
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

  const validateForm = async (values: IArticle) => {
    try {
      const result = await AdminBlogValidation().validate(values, {
        abortEarly: false,
      });
      return {};
    } catch (validationError) {
      // const errors: FormikErrors<IArticle> = {};
      // if (validationError instanceof Yup.ValidationError) {
      //   // console.log(validationError);
      //   validationError.inner.forEach((error: Yup.ValidationError) => {
      //     if (error.path) {
      //       errors[error.path] = error.message;
      //       toast.error(`${error.path}: ${error.message}`);
      //     }
      //   });
      // }
      toast.error(`Please fill all form fields`);
      return validationError;
    }
  };

  const submitFunc = async (
    values: IArticle,
    { resetForm, setFieldValue }: FormikHelpers<IArticle>
  ) => {
    if (!values.meta.metaTitle) {
      (values.meta.metaTitle =
        values.title.length > META_TITLE_MAX
          ? values.title.substring(0, META_TITLE_MAX)
          : values.title),
        values.title;
    }

    if (!values.meta.metaDescription) {
      (values.meta.metaDescription =
        values.description.length > META_DESCRIPTION_MAX
          ? values.description.substring(0, META_DESCRIPTION_MAX)
          : values.description),
        values.description;
    }

    if (!values.publishedDate) {
      values.publishedDate = formatsDateWithTime();
    } else if (values.publishedDate === "draft") {
      values.publishedDate = "";
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
      <>
        <Formik
          key={`${isNewArticle} article form`}
          initialValues={
            isNewArticle
              ? JSON.parse(JSON.stringify(newBlogArticle))
              : articles[article]
          }
          onSubmit={submitFunc}
          validationSchema={AdminBlogValidation}
          validateOnChange={false}
          validateOnBlur={false}
          validate={validateForm}
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
        <CustomToast />
      </>
    ) || <div>no Articles</div>
  );
};

export default ArticleForm;
