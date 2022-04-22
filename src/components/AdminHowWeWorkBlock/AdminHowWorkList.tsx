import React from "react";
import * as Styled from "../../styles/AdminPage";
import { IHowBlock } from "../../types/Admin/Response.types";
import PhotoBlockDashedHorizontal from "../AdminPageGlobal/PhotoBlockdashedHorizontal";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";

const AdminHowWorkList = ({
  state,
  onChangeFunction,
}: {
  state: IHowBlock[];
  onChangeFunction: any;
}) => {
  return (
    <div>
      {state.map((i, ind) => {
        return (
          <div key={ind*112121}>
            <Styled.AdminHalfGrid>
              <div>
                <SubHeaderWithInput
                  key={`howWeWorkBlockHeader${ind}`}
                  header="Subtitle"
                  name={`HowWeWorkBlock.blocks.${ind}.subtitle`}
                  inputValue={i.subtitle}
                  onChangeFunction={onChangeFunction}
                  rows={i.subtitle.split(`\n`).length}
                />
                <SubHeaderWithInput
                  key={`howWeWorkBlockText${ind}`}
                  header="Text"
                  name={`HowWeWorkBlock.blocks.${ind}.text`}
                  inputValue={i.text}
                  onChangeFunction={onChangeFunction}
                  rows={i.text.split(`\n`).length}
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
    </div>
  );
};

export default AdminHowWorkList;
