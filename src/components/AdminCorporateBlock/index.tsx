import { FieldArray } from "formik";
import React from "react";
import * as Styled from "../../styles/AdminPage";
import { ICorporateBlock } from "../../types/Admin/Response.types";
import PhotoBlockDashedHorizontal from "../AdminPageGlobal/PhotoBlockdashedHorizontal";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";
import AdminCorporateImages from "./AdminCorporateImages";

const AdminCorporateBlock = ({
  state,
  onChangeFunction,
}: {
  state: ICorporateBlock;
  onChangeFunction: any;
}) => {
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
