import React from "react";
import * as Styled from "../../styles/AdminPage";
import { IBuildRocketBlock } from "../../types/Admin/Response.types";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";

const AdminBuildRocketBlock = ({ state }: { state: IBuildRocketBlock }) => {
  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHalfGrid>
        <div>
          <SubHeaderWithInput
            header="Subtitle"
            inputValue={state.subtitle}
            onChangeFunction={() => {}}
          />
          <SubHeaderWithInput
            header="Text"
            inputValue={state.text}
            onChangeFunction={() => {}}
          />
          <SubHeaderWithInput
            header="Button"
            inputValue={state.button}
            onChangeFunction={() => {}}
          />
        </div>
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminBuildRocketBlock;
