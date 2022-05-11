import React from "react";
import { AdminInput } from "../../../styles/AdminPage";

interface ITitleBlockProps {
  titleTextBlock: { title: string; subtitle?: string };
  handleChange: (e?: React.ChangeEvent<any> | string) => void;
  name: string;
}

const TitleBlock = ({
  titleTextBlock,
  handleChange,
  name,
}: ITitleBlockProps) => {
  return (
    <>
      {Object.entries(titleTextBlock).map((i, ind) => {
        return (
          <AdminInput
            minRows={2}
            key={`inputContact${ind}`}
            name={`${name}.${name === "info" ? "text." : ""}${i[0]}`}
            value={i[1]}
            onChange={handleChange}
          />
        );
      })}
    </>
  );
};

export default TitleBlock;
