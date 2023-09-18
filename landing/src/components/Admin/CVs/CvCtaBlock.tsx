import React from "react";

import ButtonArrow from "../../../utils/ButtonArrow";

import * as Styled from "../../../styles/AdminPage";
import * as Styles from "../../../styles/AdminCvPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../styles/HomePage/General.styled";

import { ICvCta, ICvPageData } from "../../../types/Admin/AdminCv.types";
import TextEditor from "../../TextEditor/TextEditor";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";

interface ICvCtaProps {
  cta: ICvCta;
  onChangeFunction: (e?: React.ChangeEvent<any> | string) => void;
  handleClick: () => void;
  setValues: (
    values: React.SetStateAction<ICvPageData>,
    shouldValidate?: boolean | undefined
  ) => void;
}

const CvCtaBlock = ({
  cta,
  onChangeFunction,
  handleClick,
  setValues,
}: ICvCtaProps) => {
  return (
    <Styled.ContentWrapper>
      <Styles.CVCtaTitle>
        <TextEditor header="Title" name="cta.title" />
      </Styles.CVCtaTitle>

      <Styles.CVButtonInfo>
        <Styles.CVButtonWrapper>
          <SubHeaderWithInput
            placeholder="Text"
            header="Button Text"
            inputValue={cta.buttonText}
            onChangeFunction={onChangeFunction}
            name="cta.buttonText"
          />
        </Styles.CVButtonWrapper>

        <Styles.CVButtonWrapper>
          <SubHeaderWithInput
            placeholder="URL"
            header="Button Link"
            inputValue={cta.buttonLink}
            onChangeFunction={onChangeFunction}
            name="cta.buttonLink"
          />
        </Styles.CVButtonWrapper>
      </Styles.CVButtonInfo>

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
    </Styled.ContentWrapper>
  );
};

export default CvCtaBlock;
