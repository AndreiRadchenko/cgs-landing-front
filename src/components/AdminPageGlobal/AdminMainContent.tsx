import React from "react";
import * as Styled from "../../styles/AdminPage";
import EditInformationBlock from "../AdminEditInfoBlock/CompletedBlock";
import FirstAdminBlock from "../AdminFirstHeaderBlock/CompletedBlock";

const AdminMainContent = () => {
  return (
    <Styled.AdminPageContentBlock>
      <FirstAdminBlock />
      <EditInformationBlock />
    </Styled.AdminPageContentBlock>
  );
};

export default AdminMainContent;
