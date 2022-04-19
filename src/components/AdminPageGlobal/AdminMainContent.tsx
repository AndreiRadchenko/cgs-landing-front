import React from "react";
import * as Styled from "../../styles/AdminPage";
import { IDataResponse } from "../../types/Admin/Admin.types";
import EditInformationBlock from "../AdminEditInfoBlock/CompletedBlock";
import FirstAdminBlock from "../AdminFirstHeaderBlock/CompletedBlock";
import AdminLogosBlock from "../AdminLogosBlock/AdminLogosBlock";
import SubtitleBlock from "../AdminSubtitleBlock/CompletedSubtitle";
import { dataResponseImitation } from "./BackendResponseImitation";

const data: IDataResponse = dataResponseImitation;

const AdminMainContent = () => {
  return (
    <Styled.AdminContentBlock>
      <FirstAdminBlock />
      <EditInformationBlock state={data.EditInformation} />
      <SubtitleBlock state={data.Subtitle} />
      <AdminLogosBlock />
    </Styled.AdminContentBlock>
  );
};

export default AdminMainContent;
