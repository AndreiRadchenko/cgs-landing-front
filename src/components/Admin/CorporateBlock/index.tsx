import { FieldArray, useFormikContext } from "formik";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import AdminCorporateImages from "./AdminCorporateImages";

const AdminCorporateBlock = () => {
  const { values, handleChange } = useFormikContext<IDataResponse>();

  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHalfGrid>
        <div>
          <FieldArray name="CorporateBlock.blocks">
            {() => {
              return values.CorporateBlock.blocks.map((i, ind) => (
                <div key={`corporatetext${ind}`}>
                  <Styled.AdminCardsGrid>
                    <div>
                      <SubHeaderWithInput
                        name={`CorporateBlock.blocks.${ind}.subtitle`}
                        header="Subtitle"
                        inputValue={i.subtitle}
                        key={`corporateTitle${ind}`}
                        onChangeFunction={handleChange}
                      />
                    </div>
                  </Styled.AdminCardsGrid>
                  <div>
                    <SubHeaderWithInput
                      name={`CorporateBlock.blocks.${ind}.text`}
                      header="Text"
                      inputValue={i.text}
                      key={`corporateText${ind}`}
                      onChangeFunction={handleChange}
                    />
                  </div>
                </div>
              ));
            }}
          </FieldArray>
        </div>
        <AdminCorporateImages />
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminCorporateBlock;
