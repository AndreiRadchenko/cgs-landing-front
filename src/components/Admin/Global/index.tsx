import React from "react";
import * as Styled from "../../../styles/AdminPage";
import AdminCardsBlock from "../CardsBlock";
import EditInformationBlock from "../HomePageBlocks/EditInfoBlock";
import FirstAdminBlock from "../FirstHeaderBlock";
import AdminLogosBlock from "../LogosBlock";
import SubtitleBlock from "../SubtitleBlock";
import AdminFeedbackBlock from "../FeedbackBlock";
import AdminTechBlock from "../TechBlock";
import AdminCorporateBlock from "../HomePageBlocks/CorporateBlock";
import AdminHowWeWorkBlock from "../HomePageBlocks/HowWeWorkBlock";
import AdminBuildRocketBlock from "../RocketBlock";
import AdminContactFormBlock from "../ContactBlock";
import AdminFooterBlock from "../Footer";
import { Form, Formik } from "formik";
import { useMutation, useQuery } from "react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminGlobalService } from "../../../services/adminHomePage";
import { IDataResponse } from "../../../types/Admin/Response.types";

interface IMainProps {
  data: IDataResponse | undefined;
  isLoading: boolean;
  refetch: () => Promise<IMainProps>;
}

const AdminMainContent = () => {
  const {
    data,
    isLoading,
    refetch,
  }: IMainProps = useQuery(queryKeys.GetFullPage, () =>
    adminGlobalService.getFullPage()
  );

  const { mutateAsync } = useMutation(
    queryKeys.PutHomePageData,
    (data: IDataResponse) => adminGlobalService.updateFullPage(data)
  );

  const submitForm = async (values: IDataResponse) => {
    document.body.style.cursor = "wait";
    await mutateAsync(values);
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
              <FirstAdminBlock />
              <EditInformationBlock />
              <SubtitleBlock />
              <AdminLogosBlock />
              <AdminCardsBlock />
              <AdminFeedbackBlock />
              <AdminTechBlock />
              <AdminCorporateBlock />
              <AdminHowWeWorkBlock />
              <AdminBuildRocketBlock />
              <AdminContactFormBlock />
              <AdminFooterBlock />
              <Styled.AdminPaddedBlock>
                <Styled.AdminBigButton type="submit" children="Submit" />
              </Styled.AdminPaddedBlock>
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

export default AdminMainContent;
