import React from "react";
import { IEditInformation } from "../../types/Admin/Admin.types";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";

const LeftSideBlock = ({state}: {state: IEditInformation}) => {
  return (
    <div>
      <SubHeaderWithInput header="Title" inputValue={state.title} onChangeFunction={() => {}} />
      <SubHeaderWithInput header="Text 1" inputValue={state.text} onChangeFunction={() => {}} />
      <SubHeaderWithInput header="Text 2" inputValue={state.text2} onChangeFunction={() => {}} />
      <SubHeaderWithInput header="Button" inputValue={state.button} onChangeFunction={() => {}} />
    </div>
  );
};

export default LeftSideBlock;
