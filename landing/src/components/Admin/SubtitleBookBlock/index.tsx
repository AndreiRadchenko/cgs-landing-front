import dynamic from "next/dynamic";
import React from "react";

const TextEditor = dynamic(() => import("../../TextEditor/TextEditor"), {
  ssr: false,
});

const SubtitleBookBlock = () => {
  return (
    <div>
      <TextEditor header="Subtitle" name="SubtitleBookBlock.title" />
    </div>
  );
};

export default SubtitleBookBlock;
