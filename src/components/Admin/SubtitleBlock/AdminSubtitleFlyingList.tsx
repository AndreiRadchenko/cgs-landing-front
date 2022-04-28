import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { ISubtitle } from "../../../types/Admin/Response.types";
import AdminInputWithImage from "../Global/AdminInputWithImage";

interface ISubtitleFlyProps {
  state: ISubtitle;
  onChangeFunction: any;
}

const render = ({ state, onChangeFunction }: ISubtitleFlyProps) =>
  state.elements.map((i, ind) => {
    return (
      <AdminInputWithImage
        name={`SubtitleBlock.elements.${ind}.text`}
        key={`SubtitleBlockElement${ind}`}
        photo={i.image}
        inputValue={i.text}
        onChangeFunction={onChangeFunction}
      />
    );
  });

const AdminSubtitleFlyingList = ({
  state,
  onChangeFunction,
}: ISubtitleFlyProps) => {
  return (
    <Styled.AdminFlyingElementsBlock>
      {render({ state, onChangeFunction })}
    </Styled.AdminFlyingElementsBlock>
  );
};

export default AdminSubtitleFlyingList;
