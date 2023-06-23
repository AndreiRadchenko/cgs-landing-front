import React from "react";
import dynamic from "next/dynamic";

const TextEditor = dynamic(() => import("../../TextEditor/TextEditor"), {
  ssr: false,
});

const FilmTextBlock = () => {
  return (
    <div>
      <TextEditor header="Subtitle" name="FilmBlock.textOnFilm" />
    </div>
  );
};

export default FilmTextBlock;
