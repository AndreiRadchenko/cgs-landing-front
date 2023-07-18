import React from "react";
import dynamic from "next/dynamic";
import { IEditInformation } from "../../../types/Admin/Response.types";
import SubHeaderWithInput from "../../../components/Admin/Global/SubHeaderWithInput";

const TextEditor = dynamic(() => import("../../TextEditor/TextEditor"), {
  ssr: false,
});

interface ILeftSideProps {
  state: IEditInformation;
  onChangeFunction: (e?: React.ChangeEvent<any> | string) => void;
}

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
