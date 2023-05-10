import dynamic from "next/dynamic";
import React from "react";

const TextEditor = dynamic(() => import("../../TextEditor/TextEditor"), {
  ssr: false,
});

const SubtitleBlock = () => {
  return (
    <div>
      <TextEditor header="Title" name="SubtitleBlock.title" />
    </div>
  );
};

export default SubtitleBlock;