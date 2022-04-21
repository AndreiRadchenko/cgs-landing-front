import React from "react";
import * as Styled from "../../styles/AdminPage";
import { IHowWeWorkBlock } from "../../types/Admin/Response.types";
import PhotoBlockDashedHorizontal from "../AdminPageGlobal/PhotoBlockdashedHorizontal";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";

const AdminHowWeWorkBlock = ({ state }: { state: IHowWeWorkBlock }) => {
  return (
    <Styled.AdminPaddedBlock theme="dark">
      <Styled.AdminHalfGrid>
        <div>
          <SubHeaderWithInput
            header="Subtitle"
            inputValue={state.pageSignature}
            onChangeFunction={() => {}}
          />
        </div>
      </Styled.AdminHalfGrid>

      {state.blocks.map((i) => {
        return (
          <div key={Math.random()}>
            <Styled.AdminHalfGrid>
              <div>
                <SubHeaderWithInput
                  header="Subtitle"
                  inputValue={i.subtitle}
                  onChangeFunction={() => {}}
                  rows={
                    i.subtitle.split(`
`).length
                  }
                />
                <SubHeaderWithInput
                  header="Text"
                  inputValue={i.text}
                  onChangeFunction={() => {}}
                  rows={
                    i.text.split(`
`).length
                  }
                />
              </div>
              <Styled.AdminHowWeWorkImageSize>
                <PhotoBlockDashedHorizontal photo={i.image} />
              </Styled.AdminHowWeWorkImageSize>
            </Styled.AdminHalfGrid>
            <br />
          </div>
        );
      })}
    </Styled.AdminPaddedBlock>
  );
};

export default AdminHowWeWorkBlock;
