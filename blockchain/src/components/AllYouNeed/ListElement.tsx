import React from "react";
import { Dot } from "../../styles/usefullStyled";

interface IListelementProps {
  text: string;
}

const ListElement = ({ text }: IListelementProps) => {
  return (
    <li>
      <Dot />
      {text}
    </li>
  );
};

export default ListElement;
