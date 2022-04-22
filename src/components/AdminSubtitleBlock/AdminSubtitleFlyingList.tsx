import React from "react";
import * as Styled from "../../styles/AdminPage";
import { ISubtitle } from "../../types/Admin/Response.types";
import AdminInputWithImage from "../AdminPageGlobal/AdminInputWithImage";

const AdminSubtitleFlyingList = ({
  state,
  onChangeFunction,
}: {
  state: ISubtitle;
  onChangeFunction: any;
}) => {
  return (
    <Styled.AdminFlyingElementsBlock>
      {state.elements.map((i, ind) => {
        return (
          <AdminInputWithImage
            name={`SubtitleBlock.elements.${ind}.text`}
            key={`SubtitleBlockElement${ind}`}
            photo={i.image}
            inputValue={i.text}
            onChangeFunction={onChangeFunction}
          />
        );
      })}
    </Styled.AdminFlyingElementsBlock>
  );
};

export default AdminSubtitleFlyingList;
