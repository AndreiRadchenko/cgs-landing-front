import { Formik, useFormikContext } from "formik";
import React from "react";
import { useQuery } from "react-query";
import { newBlogArticle } from "../../../../consts";
import { queryKeys } from "../../../../consts/queryKeys";
import { adminBlogService } from "../../../../services/adminBlogPage";
import { IBlogPageResponse } from "../../../../types/Admin/Response.types";
import AddAndEdit from "./AddAndEdit";
import ArticleAddAndEdit from "./ArticleAddAndEdit";
import PublishedArticles from "./PublishedArticles";

interface IArticleForm {
  article: number;
  isNewArticle: boolean;
  setIsNewArticle: (val: boolean) => void;
  //   views?: IView[];
  setArticle: (val: number) => void;
}

// interface IBlogArticlesResponse {
//   data: IArticle[];
//   isLoading: boolean;
//   refetch: () => void;
// }

const ArticleForm = ({
  article,
  setIsNewArticle,
  isNewArticle,
  setArticle,
}: IArticleForm) =>
  // setFieldValue,
  {
    const { data, isLoading, refetch } = useQuery(
      queryKeys.getBlogArticles,
      () => adminBlogService.getArticles()
    );

    const { values } = useFormikContext<IBlogPageResponse>();

    const { data: views } = useQuery(queryKeys.views, () =>
      adminBlogService.getViews()
    );

    return (
      (data && views && (
        <Formik
          initialValues={
            isNewArticle
              ? JSON.parse(JSON.stringify(newBlogArticle))
              : typeof data !== "undefined" && data[article]
          }
          onSubmit={(values, action) => {
            console.log("article submit");
            action.resetForm();
          }}
        >
          <div>
            <ArticleAddAndEdit
              possibleTags={values.possibleTags}
              views={views}
              article={article}
              setArticle={setArticle}
              isNewArticle={isNewArticle}
              setIsNewArticle={setIsNewArticle}
            />
            <PublishedArticles
              views={views}
              article={article}
              setArticle={setArticle}
              isNewArticle={isNewArticle}
              setIsNewArticle={setIsNewArticle}
              data={data}
            />
          </div>
        </Formik>
      )) || <div>no Articles</div>
    );
  };

export default ArticleForm;
