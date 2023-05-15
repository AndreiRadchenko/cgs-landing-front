import React from "react";
import { Form, useFormikContext } from "formik";

import AboutBlock from "./AboutBlock";
import MetaTagsBlock from "../MetaTagsBlock";
import ButtonBlock from "../ButtonBlock";
import AdminBlockDropDown from "../../Admin/Global/AdminBlockDropDown";
import {
  BlackButton,
  ArrowContainer,
} from "../../../styles/HomePage/General.styled";
import ButtonArrow from "../../../utils/ButtonArrow";
import SubtitleBookBlock from "../SubtitleBookBlock";

import * as Styled from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";

const AboutUsForm = () => {
  //   const { values, handleSubmit } = useFormikContext<IDataResponse>();
  return (
    <Styled.AdminContentBlock>
      <Form>
        <Styled.AdminBlocksContent>
          <Styled.AdminHeader>ABOUT US</Styled.AdminHeader>
          <AdminBlockDropDown title="ABOUT US">
            <AboutBlock />
          </AdminBlockDropDown>
          {/* <AdminBlockDropDown title="BLOCK 6 (COOPERATION STEPS)">
            <AdminCardsBlock />
            <SubtitleBookBlock />
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
          </AdminBlockDropDown> */}
        </Styled.AdminBlocksContent>
        <Styled.MetaBlockWraper>
          <MetaTagsBlock theme="dark" sitemap="/" />
        </Styled.MetaBlockWraper>
      </Form>
    </Styled.AdminContentBlock>
  );
};

export default AboutUsForm;
