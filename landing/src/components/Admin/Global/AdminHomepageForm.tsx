import React from "react";
import * as Styled from "../../../styles/AdminPage";
import AdminCardsBlock from "../CardsBlock";
import EditInformationBlock from "../EditInfoBlock";
import AdminLogosBlock from "../LogosBlock";
import SubtitleBlock from "../SubtitleBlock";
import AdminFeedbackBlock from "../FeedbackBlock";
import AdminTechBlock from "../TechBlock";
import AdminFooterBlock from "../Footer";
import MetaTagsBlock from "../MetaTagsBlock";
import FilmTextBlock from "../FilmTextBlock";
import ButtonBlock from "../ButtonBlock";
import AdminBlockDropDown from "./AdminBlockDropDown";
import {
  BlackButton,
  ArrowContainer,
} from "../../../styles/HomePage/General.styled";
import ButtonArrow from "../../../utils/ButtonArrow";
import { Form, useFormikContext } from "formik";
import { IDataResponse } from "../../../types/Admin/Response.types";

const AdminHomepageForm = () => {
  const { values, handleSubmit } = useFormikContext<IDataResponse>();
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
};

export default AdminHomepageForm;
