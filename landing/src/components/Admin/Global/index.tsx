import React from "react";
import * as Styled from "../../../styles/AdminPage";
import AdminCardsBlock from "../CardsBlock";
import EditInformationBlock from "../EditInfoBlock";
import FirstAdminBlock from "../FirstHeaderBlock";
import AdminLogosBlock from "../LogosBlock";
import SubtitleBlock from "../SubtitleBlock";
import AdminFeedbackBlock from "../FeedbackBlock";
import AdminTechBlock from "../TechBlock";
import AdminFooterBlock from "../Footer";
import { Form, Formik } from "formik";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminGlobalService } from "../../../services/adminHomePage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import MetaTagsBlock from "../MetaTagsBlock";
import FilmTextBlock from "../FilmTextBlock";
import ButtonBlock from "../ButtonBlock";

interface IMainProps {
  data: IDataResponse | undefined;
  isLoading: boolean;
  refetch: () => Promise<IMainProps>;
}

const AdminMainContent = () => {
  const { data, isLoading, refetch }: IMainProps = useQuery(
    [queryKeys.GetFullPage],
    () => adminGlobalService.getFullPage()
  );

  const { mutateAsync } = useMutation(
    [queryKeys.PutHomePageData],
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
      enableReinitialize={true}
    >
      {({ values }) => {
        return (
          <Styled.AdminContentBlock>
            <Form>
              <FirstAdminBlock />
              <EditInformationBlock />
              <SubtitleBlock />
              <AdminLogosBlock />
              <FilmTextBlock />
              <ButtonBlock
                theme="dark"
                block={values.SeeAllBlock}
                name="SeeAllBlock"
              />
              <AdminFeedbackBlock />
              <AdminTechBlock />
              <AdminCardsBlock />
              <ButtonBlock
                theme="dark"
                block={values.BookCallBlock}
                name="BookCallBlock"
              />
              <AdminFooterBlock />
              <MetaTagsBlock theme="dark" sitemap="/" />
              <Styled.AdminPaddedBlock>
                <Styled.AdminBigButton type="submit">
                  Submit
                </Styled.AdminBigButton>
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
