import React from "react";
import * as Styled from "../../styles/AdminPage";
import { IFooterBlock } from "../../types/Admin/Response.types";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";
import AdminSocialMediaIcon from "./AdminSocialMediaIcon";

const AdminFooterBlock = ({ state }: { state: IFooterBlock }) => {
  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHalfGrid>
        <div>
          <SubHeaderWithInput
            header="Email adress"
            inputValue={state.Email}
            onChangeFunction={() => {}}
          />
          {state.links.map((i, ind) => (
            <div key={Math.random()}>
              <SubHeaderWithInput
                header={`Add link ${ind + 1}`}
                inputValue={i}
                onChangeFunction={() => {}}
              />
            </div>
          ))}
        </div>
        <Styled.AdminCardsGrid>
          {state.images.map((i, ind) => (
            <AdminSocialMediaIcon
              image={i}
              key={Math.random()}
              number={ind + 1}
            />
          ))}
        </Styled.AdminCardsGrid>
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminFooterBlock;
