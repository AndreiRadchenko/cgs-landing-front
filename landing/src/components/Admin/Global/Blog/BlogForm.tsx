import { Formik } from "formik";
import React from "react";
import {
  IArticle,
  INewArticle,
  IView,
} from "../../../../types/Admin/Response.types";
import AddAndEdit from "./AddAndEdit";

interface IBlogForm {
  current: number;
  articles?: IArticle[];
  isNewArticle: boolean;
  setIsNewArticle: (val: boolean) => void;
  newArticleData: INewArticle;
  disabled: boolean;
  setDisabled: (val: boolean) => void;
  views?: IView[];
  setArticle: (val: number) => void;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
}

const BlogForm = ({
  current,
  articles,
  isNewArticle,
  setIsNewArticle,
  newArticleData,
  disabled,
  setDisabled,
  views,
  setArticle,
  setFieldValue,
}: IBlogForm) => {
  return (
    (articles && views && (
      <Formik initialValues={articles} onSubmit={() => console.log("here")}>
        <AddAndEdit
          setFieldValue={setFieldValue}
          article={current}
          isNewArticle={isNewArticle}
          setIsNewArticle={setIsNewArticle}
          newArticle={newArticleData}
          disabled={disabled}
          setDisabled={setDisabled}
          views={views}
          setArticle={setArticle}
        />
      </Formik>
    )) || <div>no Articles</div>
  );
};

export default BlogForm;
