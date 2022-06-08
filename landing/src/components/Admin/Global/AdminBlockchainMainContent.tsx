import { Formik } from "formik";
import React from "react";
import { blockchainProjects } from "../../../consts";
import { IDataBlockchainResponse } from "../../../types/Admin/Response.types";
import BlockchainProjectBlock from "../BlockchainProjectBlock/BlockchainProjectBlock";
import AdminLogosBlock from "../LogosBlock";

const AdminBlockchainMainContent = () => {
  const data: IDataBlockchainResponse = {
    projects: blockchainProjects,
    newProject: {
      name: "",
      text: "",
      image: null,
    },
  };

  const mutateAsync = async (data: IDataBlockchainResponse) =>
    console.log(data);

  const submitForm = async (values: IDataBlockchainResponse) => {
    await mutateAsync(values);
  };

  return (
    <Formik
      key="globalPortfolioForm"
      initialValues={data!}
      onSubmit={submitForm}
      validateOnChange={false}
    >
      <BlockchainProjectBlock />
      <AdminLogosBlock />
      <AdminLogosBlock />
    </Formik>
  );
};

export default AdminBlockchainMainContent;
