import React from "react";

import TextEditor from "../../TextEditor/TextEditor";
import SubHeaderWithInput from "../../../components/Admin/Global/SubHeaderWithInput";

import { ILeftSideProps } from "../../../types/Admin/Admin.types";

const LeftSideBlock = ({ state, onChangeFunction }: ILeftSideProps) => {
  return (
    <div style={{ width: "28em" }}>
      <SubHeaderWithInput
        header="Title"
        name="EditInformationBlock.title"
        inputValue={state.title}
        onChangeFunction={onChangeFunction}
      />
      <TextEditor
        header="Subtitle"
        name="EditInformationBlock.subtitle"
        props={{
          defaultValue: state.subtitle || "",
        }}
      />
      <SubHeaderWithInput
        header="Button"
        name="EditInformationBlock.button"
        inputValue={state.button}
        onChangeFunction={onChangeFunction}
      />
      <SubHeaderWithInput
        header="Whats App Link"
        name="EditInformationBlock.whatsAppLink"
        inputValue={state.whatsAppLink}
        onChangeFunction={onChangeFunction}
      />
      <SubHeaderWithInput
        header="Telegram Link"
        name="EditInformationBlock.telegramLink"
        inputValue={state.telegramLink}
        onChangeFunction={onChangeFunction}
      />
      <SubHeaderWithInput
        header="Button Link"
        name="EditInformationBlock.buttonLink"
        inputValue={state.buttonLink}
        onChangeFunction={onChangeFunction}
      />
    </div>
  );
};

export default LeftSideBlock;
