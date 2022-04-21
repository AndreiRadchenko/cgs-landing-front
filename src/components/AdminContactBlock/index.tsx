import React from "react";
import * as Styled from "../../styles/AdminPage";
import { IContactFormBlock } from "../../types/Admin/Response.types";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";

const AdminContactFormBlock = ({ state }: { state: IContactFormBlock }) => {
  return (
    <Styled.AdminPaddedBlock theme="dark">
      <Styled.AdminHalfGrid>
        <div>
          <Styled.AdminHeader>Contact Form</Styled.AdminHeader>
          <SubHeaderWithInput
            header="Subtitle"
            inputValue={state.subtitle}
            onChangeFunction={() => {}}
          />
          {state.inputs.map((i) => {
            return (
              <Styled.AdminInput
                key={Math.random()}
                value={i}
                onChange={() => {}}
                rows={1}
              />
            );
          })}
        </div>
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminContactFormBlock;
