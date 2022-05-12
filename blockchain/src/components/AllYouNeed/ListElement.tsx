import React from "react";
import { Dot } from "../../styles/usefullStyled";

const ListElement = ({text} :{text: string}) => {
  return <li><Dot />{text}</li>
};

export default ListElement;
