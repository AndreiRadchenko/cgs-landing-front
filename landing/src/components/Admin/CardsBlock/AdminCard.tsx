import React, { ChangeEvent } from "react";
import * as Styled from "../../../styles/AdminPage";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import { ICard } from "../../../types/Admin/Response.types";

interface ICardProps {
  name: string;
  info: ICard;
  number: number;
  onChangeFunction: (e?: ChangeEvent<HTMLInputElement> | string) => void;
}

const AdminCard = ({ info, number, onChangeFunction, name }: ICardProps) => {
  return (
    <Styled.AdminFlexRow gap="19px">
      <Styled.AdminCardsHeader style={{ marginTop: "0.3em" }}>
        #{number}
      </Styled.AdminCardsHeader>
      <Styled.InputWrapper>
        <SubHeaderWithInput
          inputStyle={{ marginBottom: 0 }}
          width="100%"
          name={`CardsBlock.${name}.subtitle`}
          inputValue={info.subtitle}
          onChangeFunction={onChangeFunction}
        />
        <SubHeaderWithInput
          width="100%"
          name={`CardsBlock.${name}.text`}
          minRows={3}
          inputValue={info.text}
          onChangeFunction={onChangeFunction}
        />
      </Styled.InputWrapper>
    </Styled.AdminFlexRow>
  );
};

export default AdminCard;
