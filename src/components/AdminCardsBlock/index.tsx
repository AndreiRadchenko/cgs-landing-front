import React from "react";
import * as Styled from "../../styles/AdminPage";
import { ICards } from "../../types/Admin/Response.types";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";
import AdminCard from "./AdminCard";

const AdminCardsBlock = ({ state }: { state: ICards }) => {
  return (
    <Styled.AdminPaddedBlock theme={"dark"}>
      <br />
      <Styled.AdminCardsGrid>
        <div>
          <SubHeaderWithInput
            header="Text 4"
            inputValue={state.text4}
            onChangeFunction={() => {}}
          />
        </div>
        <div>
          <SubHeaderWithInput
            header="Button"
            inputValue={state.button}
            onChangeFunction={() => {}}
          />
        </div>
        {state.cards.map((card, ind) => {
          return (
            <div key={ind}>
              <AdminCard
                subtitle={card.subtitle}
                image={card.image}
                text={card.text}
                number={ind + 1}
              />
            </div>
          );
        })}
      </Styled.AdminCardsGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminCardsBlock;
