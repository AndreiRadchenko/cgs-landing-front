import React from "react";
import { useFormikContext } from "formik";

import SocialSection from "./SocialSection";
import AboutSection from "./AboutSection";
import ButtonArrow from "../../../../utils/ButtonArrow";

import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import * as Styled from "../../../../styles/AdminPage";
import { IContactPageData } from "../../../../types/Admin/AdminContact.types";

const SocialBlock = () => {
  const { handleSubmit } = useFormikContext<IContactPageData>();

  const handleClick = () => handleSubmit();

  return (
    <Styled.ContentWrapper>
      <SocialSection />
      <AboutSection />
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

export default SocialBlock;
