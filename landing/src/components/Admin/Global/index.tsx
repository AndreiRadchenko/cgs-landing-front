import React from "react";
import * as Styled from "../../../styles/AdminPage";
import AdminCardsBlock from "../CardsBlock";
import EditInformationBlock from "../EditInfoBlock";
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
import AdminBlockDropDown from "./AdminBlockDropDown";
import {
  BlackButton,
  ArrowContainer,
} from "../../../styles/HomePage/General.styled";
import ButtonArrow from "../../../utils/ButtonArrow";

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
      {({ values, handleSubmit }) => {
        return (
          <Styled.AdminContentBlock>
            <Form>
              <Styled.AdminBlocksContent>
                <Styled.AdminHeader>HOMEPAGE</Styled.AdminHeader>
                <AdminBlockDropDown title="BLOCK 1 (MAIN PAGE)">
                  <EditInformationBlock />
                </AdminBlockDropDown>
                <AdminBlockDropDown title="BLOCK 2 (HEADINGS// LOGO// FILM)">
                  <SubtitleBlock />
                  <AdminLogosBlock />
                  <FilmTextBlock />
                  <ButtonBlock block={values.SeeAllBlock} name="SeeAllBlock" />
                  <BlackButton
                    size={"1.5em"}
                    padding={"1.11em 3em"}
                    style={{ margin: "2em 0" }}
                    onClick={() => handleSubmit()}
                  >
                    Save changes
                    <ArrowContainer>
                      <ButtonArrow />
                    </ArrowContainer>
                  </BlackButton>
                </AdminBlockDropDown>
                <AdminBlockDropDown title="BLOCK 3 (FEEDBACK)">
                  <AdminFeedbackBlock />
                </AdminBlockDropDown>
                <AdminBlockDropDown title="BLOCK 4 (TECHNOLOGIES)">
                  <AdminTechBlock />
                </AdminBlockDropDown>
                <AdminBlockDropDown title="BLOCK 5 (COOPERATION STEPS)">
                  <AdminCardsBlock />
                  <ButtonBlock
                    isCooperationBlock
                    block={values.BookCallBlock}
                    name="BookCallBlock"
                  />
                  <BlackButton
                    size={"1.5em"}
                    padding={"1.11em 3em"}
                    style={{ margin: "2em 0" }}
                    onClick={() => handleSubmit()}
                  >
                    Save changes
                    <ArrowContainer>
                      <ButtonArrow />
                    </ArrowContainer>
                  </BlackButton>
                </AdminBlockDropDown>
                <AdminBlockDropDown title="FOOTER">
                  <AdminFooterBlock />
                </AdminBlockDropDown>
              </Styled.AdminBlocksContent>
              <Styled.MetaBlockWraper>
                <MetaTagsBlock theme="dark" sitemap="/" />
              </Styled.MetaBlockWraper>
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
