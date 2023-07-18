import React from "react";
import { useFormikContext } from "formik";
import dynamic from "next/dynamic";
import { IDataCareersResponse } from "../../../types/Admin/Response.types";
import * as Styled from "../../../styles/AdminCareersPage";
import { ArrowContainer } from "../../../styles/HomePage/General.styled";
import ButtonArrow from "../../../utils/ButtonArrow";

const CareersTitleTextEditor = dynamic(
  () => import("../../TextEditor/TextEditor"),
  {
    ssr: false,
  }
);

export const CareersTitleBlock = () => {
  const { handleSubmit } = useFormikContext<IDataCareersResponse>();

  const onSubmit = () => {
    handleSubmit();
  };

  return (
    <div style={{ marginBottom: "50px" }}>
      <CareersTitleTextEditor header="Title" name="subtitle" />
      <div style={{ marginTop: 37 }}>
        <Styled.TicketsButtonContainer>
          <Styled.TicketsButton onClick={onSubmit}>
            Save Changes
          </Styled.TicketsButton>
          <ArrowContainer>
            <ButtonArrow />
          </ArrowContainer>
        </Styled.TicketsButtonContainer>
      </div>
    </div>
  );
};

export default CareersTitleBlock;
