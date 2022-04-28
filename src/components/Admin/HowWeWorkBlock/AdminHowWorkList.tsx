import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IHowBlock } from "../../../types/Admin/Response.types";
import PhotoBlockDashedHorizontal from "../Global/PhotoBlockdashedHorizontal";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";

interface IHowWorkProps {
  state: IHowBlock[];
  onChangeFunction: any;
}

const AdminHowWorkList = ({ state, onChangeFunction }: IHowWorkProps) => {
  return (
    <div>
      {state.map((i, ind) => {
        return (
          <div key={`HowWorkBlockNumb${ind}`}>
            <Styled.AdminHalfGrid>
              <div>
                <SubHeaderWithInput
                  key={`howWeWorkBlockHeader${ind}`}
                  header="Subtitle"
                  name={`HowWeWorkBlock.blocks.${ind}.subtitle`}
                  inputValue={i.subtitle}
                  onChangeFunction={onChangeFunction}
                />
                <SubHeaderWithInput
                  key={`howWeWorkBlockText${ind}`}
                  header="Text"
                  name={`HowWeWorkBlock.blocks.${ind}.text`}
                  inputValue={i.text}
                  onChangeFunction={onChangeFunction}
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
