import { FieldArray } from "formik";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { ICorporateBlock } from "../../../types/Admin/Response.types";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import AdminCorporateImages from "./AdminCorporateImages";

interface ICorporateBlockProps {
  state: ICorporateBlock;
  onChangeFunction:  (e?: React.ChangeEvent<any>) => void;
}

const AdminCorporateBlock = ({
  state,
  onChangeFunction,
}: ICorporateBlockProps) => {
  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHalfGrid>
        <div>
          <FieldArray name="CorporateBlock.blocks">
            {() => {
              return state.blocks.map((i, ind) => (
                <div key={ind * 119994}>
                  <Styled.AdminCardsGrid>
                    <div>
                      <SubHeaderWithInput
                        name={`CorporateBlock.blocks.${ind}.subtitle`}
                        header="Subtitle"
                        inputValue={i.subtitle}
                        key={`corporateTitle${ind}`}
                        onChangeFunction={onChangeFunction}
                      />
                    </div>
                  </Styled.AdminCardsGrid>
                  <div>
                    <SubHeaderWithInput
                      name={`CorporateBlock.blocks.${ind}.text`}
                      header="Text"
                      inputValue={i.text}
                      key={`corporateText${ind}`}
                      onChangeFunction={onChangeFunction}
                    />
                  </div>
                </div>
              ));
            }}
          </FieldArray>
        </div>
        <AdminCorporateImages state={state} />
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminCorporateBlock;
