import React from "react";
import * as Styled from "../../styles/AdminPage";
import { IDataResponse } from "../../types/Admin/Response.types";
import AdminCardsBlock from "../AdminCardsBlock";
import EditInformationBlock from "../AdminEditInfoBlock";
import FirstAdminBlock from "../AdminFirstHeaderBlock";
import AdminLogosBlock from "../AdminLogosBlock";
import SubtitleBlock from "../AdminSubtitleBlock";
import { dataResponseImitation } from "../../../BackendResponseImitation";
import AdminFeedbackBlock from "../AdminFeedbackBlock";
import AdminTechBlock from "../AdminTechBlock";
import AdminCorporateBlock from "../AdminCorporateBlock";
import AdminHowWeWorkBlock from "../AdminHowWeWorkBlock";
import AdminBuildRocketBlock from "../AdminBuildRocketBlock";
import AdminContactFormBlock from "../AdminContactBlock";
import AdminFooterBlock from "../AdminFooter";
import { Form, Formik } from "formik";

const data: IDataResponse = dataResponseImitation;

const AdminMainContent = () => {
  return (
    <Formik
      initialValues={data}
      onSubmit={(values) => console.log(values)}
      validateOnChange={false}
    >
      {(props) => {
        return (
          <Styled.AdminContentBlock>
            <Form>
              <FirstAdminBlock />
              <EditInformationBlock
                state={props.values.EditInformationBlock}
                onChangeFunction={props.handleChange}
              />
              <SubtitleBlock
                state={props.values.SubtitleBlock}
                onChangeFunction={props.handleChange}
              />
              <AdminLogosBlock state={props.values.LogosBlock} />
              <AdminCardsBlock
                state={props.values.CardsBlock}
                onChangeFunction={props.handleChange}
              />
              <AdminFeedbackBlock
                state={props.values.FeedbackBlock}
                onChangeFunction={props.handleChange}
              />
              <AdminTechBlock
                state={props.values.TechnologyBlock}
                onChangeFunction={props.handleChange}
              />
              <AdminCorporateBlock
                state={props.values.CorporateBlock}
                onChangeFunction={props.handleChange}
              />
              <AdminHowWeWorkBlock
                state={props.values.HowWeWorkBlock}
                onChangeFunction={props.handleChange}
              />
              <AdminBuildRocketBlock
                state={props.values.BuildRocketBlock}
                onChangeFunction={props.handleChange}
              />
              <AdminContactFormBlock
                state={props.values.ContactFormBlock}
                onChangeFunction={props.handleChange}
              />
              <AdminFooterBlock
                state={props.values.FooterBlock}
                onChangeFunction={props.handleChange}
              />
              <button type="submit">submit</button>
            </Form>
          </Styled.AdminContentBlock>
        );
      }}
    </Formik>
  );
};

export default AdminMainContent;
