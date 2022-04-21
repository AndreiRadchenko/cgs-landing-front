import React from "react";
import * as Styled from "../../styles/AdminPage";
import { IDataResponse } from "../../types/Admin/Response.types";
import AdminCardsBlock from "../AdminCardsBlock/AdminCardsBlock";
import EditInformationBlock from "../AdminEditInfoBlock/CompletedBlock";
import FirstAdminBlock from "../AdminFirstHeaderBlock/CompletedBlock";
import AdminLogosBlock from "../AdminLogosBlock/AdminLogosBlock";
import SubtitleBlock from "../AdminSubtitleBlock/CompletedSubtitle";
import { dataResponseImitation } from "../../../BackendResponseImitation/BackendResponseImitation";
import AdminFeedbackBlock from "../AdminFeedbackBlock/CompletedBlock";

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
    </Styled.AdminContentBlock>
  );
};

export default AdminMainContent;
