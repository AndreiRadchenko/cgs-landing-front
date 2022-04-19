import React from "react";
import * as Styled from "../../styles/AdminPage";
import EditInformationBlock from "../AdminEditInfoBlock/CompletedBlock";
import FirstAdminBlock from "../AdminFirstHeaderBlock/CompletedBlock";
import AdminLogosBlock from "../AdminLogosBlock/AdminLogosBlock";
import SubtitleBlock from "../AdminSubtitleBlock/CompletedSubtitle";

const AdminMainContent = () => {
  return (
    <Styled.AdminContentBlock>
      <FirstAdminBlock />
      <EditInformationBlock />
      <SubtitleBlock />
      <AdminLogosBlock />
    </Styled.AdminContentBlock>
  );
};

export default AdminMainContent;
