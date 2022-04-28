import { FieldArray } from "formik";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IFooterBlock } from "../../../types/Admin/Response.types";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import AdminFooterLinks from "./AdminFooterLinks";
import AdminSocialMediaIcon from "./AdminSocialMediaIcon";

interface IFooterProps {
  state: IFooterBlock;
  onChangeFunction: (e?: React.ChangeEvent<any>) => void;
}

const renderInputs = ({ state, onChangeFunction }: IFooterProps) => (
  <AdminFooterLinks state={state.links} onChangeFunction={onChangeFunction} />
);

const renderMediaIcons = (state: IFooterBlock) => {
  return state.images.map((i, ind) => (
    <AdminSocialMediaIcon image={i} key={`MediaIcon${ind}`} number={ind + 1} />
  ));
};

const AdminFooterBlock = ({ state, onChangeFunction }: IFooterProps) => {
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
            {() => renderInputs({ state, onChangeFunction })}
          </FieldArray>
        </div>
        <Styled.AdminCardsGrid>{renderMediaIcons(state)}</Styled.AdminCardsGrid>
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminFooterBlock;
