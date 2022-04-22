import React from "react";
import * as Styled from "../../styles/AdminPage";
import { IBuildRocketBlock } from "../../types/Admin/Response.types";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";

const AdminBuildRocketBlock = ({ state, onChangeFunction }: { state: IBuildRocketBlock, onChangeFunction: any }) => {
  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHalfGrid>
        <div>
          <SubHeaderWithInput
            header="Subtitle"
            name="BuildRocketBlock.subtitle"
            inputValue={state.subtitle}
            onChangeFunction={onChangeFunction}
          />
          <SubHeaderWithInput
            header="Text"
            name="BuildRocketBlock.text"
            inputValue={state.text}
            onChangeFunction={onChangeFunction}
          />
          <SubHeaderWithInput
            header="Button"
            name="BuildRocketBlock.button"
            inputValue={state.button}
            onChangeFunction={onChangeFunction}
          />
        </div>
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminBuildRocketBlock;
