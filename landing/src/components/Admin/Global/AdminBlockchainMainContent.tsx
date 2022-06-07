import React from "react";
import AdminLogosBlock from "../LogosBlock";
import { useQuery } from "react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminGlobalService } from "../../../services/adminHomePage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import { Form, Formik } from "formik";
import * as Styled from "../../../styles/AdminPage";

interface IMainProps {
  data: IDataResponse | undefined;
  isLoading: boolean;
  refetch: () => Promise<IMainProps>;
}

const AdminBlockchainMainContent = () => {
  const { data, isLoading, refetch }: IMainProps = useQuery(
    queryKeys.GetFullPage,
    () => adminGlobalService.getFullPage()
  );

  const submitForm = async () => {
    document.body.style.cursor = "wait";
    // await mutateAsync(values);
    await refetch();
    document.body.style.cursor = "auto";
  };
  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik
      initialValues={data!}
      onSubmit={submitForm}
      validateOnChange={false}
    >
      {() => {
        return (
          <Styled.AdminContentBlock>
            <Form>
              <AdminLogosBlock typeOfLogo={"normal"} />
              <AdminLogosBlock typeOfLogo={"hover"} />
            </Form>
          </Styled.AdminContentBlock>
        );
      }}
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminBlockchainMainContent;
