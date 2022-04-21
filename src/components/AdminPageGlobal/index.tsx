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

const data: IDataResponse = dataResponseImitation;

const AdminMainContent = () => {
  return (
    <Styled.AdminContentBlock>
      <FirstAdminBlock />
      <EditInformationBlock state={data.EditInformationBlock} />
      <SubtitleBlock state={data.SubtitleBlock} />
      <AdminLogosBlock state={data.LogosBlock} />
      <AdminCardsBlock state={data.CardsBlock} />
      <AdminFeedbackBlock state={data.FeedbackBlock} />
      <AdminTechBlock state={data.TechnologyBlock} />
      <AdminCorporateBlock state={data.CorporateBlock} />
      <AdminHowWeWorkBlock state={data.HowWeWorkBlock} />
      <AdminBuildRocketBlock state={data.BuildRocketBlock} />
      <AdminContactFormBlock state={data.ContactFormBlock} />
      <AdminFooterBlock state={data.FooterBlock} />
    </Styled.AdminContentBlock>
  );
};

export default AdminMainContent;
