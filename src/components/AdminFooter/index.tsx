import { FieldArray } from "formik";
import React from "react";
import * as Styled from "../../styles/AdminPage";
import { IFooterBlock } from "../../types/Admin/Response.types";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";
import AdminFooterLinks from "./AdminFooterLinks";
import AdminSocialMediaIcon from "./AdminSocialMediaIcon";

const AdminFooterBlock = ({
  state,
  onChangeFunction,
}: {
  state: IFooterBlock;
  onChangeFunction: any;
}) => {
  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHalfGrid>
        <div>
          <SubHeaderWithInput
            header="Email adress"
            name="FooterBlock.email"
            inputValue={state.email}
            onChangeFunction={onChangeFunction}
          />
          <FieldArray name="FooterBlock.links">
            {() => (
              <AdminFooterLinks
                state={state.links}
                onChangeFunction={onChangeFunction}
              />
            )}
          </FieldArray>
        </div>
        <Styled.AdminCardsGrid>
          {state.images.map((i, ind) => (
            <AdminSocialMediaIcon
              image={i}
              key={ind*99833}
              number={ind + 1}
            />
          ))}
        </Styled.AdminCardsGrid>
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminFooterBlock;
