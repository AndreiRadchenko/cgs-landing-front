import React from "react";
import dynamic from "next/dynamic";

import ButtonArrow from "../../../utils/ButtonArrow";

import * as Styled from "../../../styles/AdminCareersPage";
import { ArrowContainer } from "../../../styles/HomePage/General.styled";

const CareersTitleTextEditor = dynamic(
  () => import("../../TextEditor/TextEditor"),
  {
    ssr: false,
  }
);

export const CareersTitleBlock = () => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <CareersTitleTextEditor header="Title" name="subtitle" />
      <div style={{ marginTop: 37 }}>
        <Styled.TicketsButtonContainer>
          <Styled.TicketsButton type="submit">
            Save Changes
            <ArrowContainer>
              <ButtonArrow />
            </ArrowContainer>
          </Styled.TicketsButton>
        </Styled.TicketsButtonContainer>
      </div>
    </div>
  );
};

export default CareersTitleBlock;
