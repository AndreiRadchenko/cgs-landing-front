import { useFormikContext } from "formik";
import React from "react";

import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import { AdminSubTitle } from "../../../../styles/AdminBlogPage";
import {
  AdminHalfGrid,
  AdminInput,
  AdminPaddedBlock,
  AdminQuaterGrid,
} from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import { IServiceMobile } from "../../../../types/Admin/Response.types";

import ButtonArrow from "../../../../utils/ButtonArrow";

const HowDoWeWork = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IServiceMobile>();

  const handleClick = () => handleSubmit();
  return (
    <AdminPaddedBlock theme="dark">
      <AdminHalfGrid>
        <SubHeaderWithInput
          header="Subtitle"
          inputValue={values.howDoWeWork.subtitle}
          onChangeFunction={handleChange}
          name="howDoWeWork.subtitle"
        />
      </AdminHalfGrid>
      <AdminQuaterGrid>
        {Object.entries(values.howDoWeWork.text).map((el, idx) => {
          return (
            <div key={`howDoWeWork ${idx}`}>
              <AdminSubTitle>Subtitle {idx + 1}</AdminSubTitle>
              {Object.entries(el[1]).map((inputEl) => (
                <AdminInput
                  key={`howDoWeWork ${inputEl[0]} ${idx}`}
                  value={inputEl[1]}
                  name={`howDoWeWork.text.${el[0]}.${inputEl[0]}`}
                  onChange={handleChange}
                />
              ))}
            </div>
          );
        })}
      </AdminQuaterGrid>
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
    </AdminPaddedBlock>
  );
};

export default HowDoWeWork;
