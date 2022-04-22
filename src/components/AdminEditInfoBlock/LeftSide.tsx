import React from "react";
import { IEditInformation } from "../../types/Admin/Response.types";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";

const LeftSideBlock = ({
  state,
  onChangeFunction,
}: {
  state: IEditInformation;
  onChangeFunction: any;
}) => {
  return (
    <div>
      <SubHeaderWithInput
        header="Title"
        name="EditInformationBlock.title"
        inputValue={state.title}
        onChangeFunction={onChangeFunction}
      />
      <SubHeaderWithInput
        header="Text 1"
        name="EditInformationBlock.text"
        inputValue={state.text}
        onChangeFunction={onChangeFunction}
      />
      <SubHeaderWithInput
        header="Text 2"
        name="EditInformationBlock.text2"
        inputValue={state.text2}
        onChangeFunction={onChangeFunction}
      />
      <SubHeaderWithInput
        header="Button"
        name="EditInformationBlock.button"
        inputValue={state.button}
        onChangeFunction={onChangeFunction}
      />
    </div>
  );
};

export default LeftSideBlock;
