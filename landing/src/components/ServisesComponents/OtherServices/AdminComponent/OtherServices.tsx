import React from "react";
import { useFormikContext } from "formik";

import ServicesSection from "./ServicesSection";
import ButtonArrow from "../../../../utils/ButtonArrow";

import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import * as Styled from "./OtherServices.styled";
import { IUxUiInterface } from "../../../../types/Admin/Response.types";

const OtherServices = () => {
  const { handleSubmit } = useFormikContext<IUxUiInterface>();

  const handleClick = () => handleSubmit();

  return (
    <Styled.ContentWrapper>
      <ServicesSection />
      <div>
        <BlackButton
          size={"1.5em"}
          padding={"1.11em 3em"}
          style={{ marginTop: "1.33em" }}
          onClick={handleClick}
        >
          Save Changes
          <ArrowContainer>
            <ButtonArrow />
          </ArrowContainer>
        </BlackButton>
      </div>
    </Styled.ContentWrapper>
  );
};

export default OtherServices;
