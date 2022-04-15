import React from "react";
import * as Styled from "../../styles/AdminPage";
import EditInformationBlock from "./SecondBlock/CompletedBlock";
import FirstAdminBlock from "./FirstHeaderBlock/CompletedBlock";

const AdminMainContent = () => {
  return (
    <Styled.AdminPageContentBlock>
      <FirstAdminBlock />
      <EditInformationBlock />
    </Styled.AdminPageContentBlock>
  );
};

export default AdminMainContent;
