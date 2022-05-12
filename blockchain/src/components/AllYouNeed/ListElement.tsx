import React from "react";
import * as Styled from "../../styles/allYouNeed";

const ListElement = ({text} :{text: string}) => {
  return <li><Styled.Dot />{text}</li>
};

export default ListElement;
