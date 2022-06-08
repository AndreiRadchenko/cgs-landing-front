import { Formik } from "formik";
import React from "react";
import ContentBlock from "./Blog/ContentBlock";

const AdminBlogMainContent = () => {
  const submitForm = () => {
    console.log("");
  };

  return (
    <Formik
      key="globalBlogForm"
      validateOnChange={false}
      onSubmit={submitForm}
      initialValues={[]}
    >
      <ContentBlock />
    </Formik>
  );
};

export default AdminBlogMainContent;
