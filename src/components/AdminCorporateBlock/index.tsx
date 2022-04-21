import React from "react";
import * as Styled from "../../styles/AdminPage";
import { ICorporateBlock } from "../../types/Admin/Response.types";
import PhotoBlockDashedHorizontal from "../AdminPageGlobal/PhotoBlockdashedHorizontal";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";

const AdminCorporateBlock = ({ state }: { state: ICorporateBlock }) => {
  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHalfGrid>
        <div>
          <Styled.AdminCardsGrid>
            <div>
              <SubHeaderWithInput
                header="Subtitle"
                inputValue={state.subtitle1}
                onChangeFunction={() => {}}
              />
            </div>
          </Styled.AdminCardsGrid>
          <div>
            <SubHeaderWithInput
              header="Text"
              inputValue={state.text1}
              onChangeFunction={() => {}}
            />
          </div>
          <Styled.AdminCardsGrid>
            <div>
              <SubHeaderWithInput
                header="Subtitle"
                inputValue={state.subtitle2}
                onChangeFunction={() => {}}
              />
            </div>
          </Styled.AdminCardsGrid>
          <div>
            <SubHeaderWithInput
              header="Text"
              inputValue={state.text2}
              onChangeFunction={() => {}}
              rows={
                state.text2.split(`
`).length
              }
            />
          </div>
        </div>
        <div>
          {state.images.map((i) => (
            <div key={Math.random()}>
              <PhotoBlockDashedHorizontal photo={i} />
              <br />
            </div>
          ))}
        </div>
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminCorporateBlock;
