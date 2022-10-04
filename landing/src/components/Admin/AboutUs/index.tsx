import { useFormikContext } from "formik";
import React, { useState } from "react";
import * as Styled from "../../../styles/AdminPage";
import * as StyledThisComp from "../FAQ/adminFaq.styled";
import { IAbout } from "../../../types/Admin/Response.types";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import { IImage } from "../../../types/Admin/Admin.types";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import MetaTagsBlock from "../MetaTagsBlock";

const AboutUsContentBlock = () => {
  const { values, handleChange, handleSubmit } = useFormikContext<IAbout>();
  const [counter, setCounter] = useState<number>(0);
  const addQuestion = (index: number) => {
    values.bonuses.text.splice(index + 1, 0, "");
    setCounter(values.bonuses.text.length);
  };

  const deleteQuestion = (index: number) => {
    values.bonuses.text.splice(index, 1);
    setCounter(values.bonuses.text.length);
    handleSubmit();
  };

  const deleteImage = useDeleteImageFunction(values, "");
  const uploadImage = useUploadImageFunction(values, "");
  const deleteBelieveImage = useDeleteImageFunction(values.believe, "");
  const uploadBelieveImage = useUploadImageFunction(values.believe, "");
  const deleteGoalImage = useDeleteImageFunction(values.goal, "");
  const uploadGoalImage = useUploadImageFunction(values.goal, "");

  return (
    <div>
      <Styled.AdminPaddedBlock>
        <Styled.AdminAboutUsGrid>
          <Styled.AdminBlockWrapper>
            <Styled.Counter>{counter}</Styled.Counter>
            <Styled.AdminHeader>About Us</Styled.AdminHeader>
            <Styled.AdminMarginBlock>
              <SubHeaderWithInput
                name="title"
                width="357px"
                height="74px"
                header="Title"
                inputValue={values.title}
                onChangeFunction={handleChange}
              />
            </Styled.AdminMarginBlock>

            <SubHeaderWithInput
              name={`believe.subtitle`}
              header="Subtitle"
              inputValue={values.believe.subtitle}
              onChangeFunction={handleChange}
            />
            <SubHeaderWithInput
              name={`believe.text`}
              header="Text"
              inputValue={values.believe.text}
              onChangeFunction={handleChange}
            />

            <SubHeaderWithInput
              name={`goal.subtitle`}
              header="Subtitle"
              inputValue={values.goal.subtitle}
              onChangeFunction={handleChange}
            />
            <SubHeaderWithInput
              name={`goal.text`}
              header="Text"
              inputValue={values.goal.text}
              onChangeFunction={handleChange}
            />

            <Styled.AdminMarginBlock>
              <SubHeaderWithInput
                name={`bonuses.subtitle`}
                header="Subtitle"
                inputValue={values.bonuses.subtitle}
                onChangeFunction={handleChange}
              />
              {(values.bonuses.text.length > 0 &&
                values.bonuses.text.map((el, idx) => (
                  <div key={idx}>
                    <SubHeaderWithInput
                      header=""
                      onChangeFunction={handleChange}
                      name={`bonuses.text[${idx}]`}
                      inputValue={el}
                    />
                    <StyledThisComp.ButtonsContainer className="about">
                      <StyledThisComp.AddButton
                        onClick={() => addQuestion(idx)}
                      >
                        [ + add next question ]
                      </StyledThisComp.AddButton>
                      <StyledThisComp.DeleteButton
                        onClick={() => deleteQuestion(idx)}
                      >
                        delete point
                      </StyledThisComp.DeleteButton>
                    </StyledThisComp.ButtonsContainer>
                  </div>
                ))) || (
                <StyledThisComp.ButtonsContainer className="about">
                  <StyledThisComp.AddButton onClick={() => addQuestion(0)}>
                    [ + add next question ]
                  </StyledThisComp.AddButton>
                </StyledThisComp.ButtonsContainer>
              )}
            </Styled.AdminMarginBlock>
            <Styled.AdminMarginBlock>
              <PhotoBlockDashed
                deleteFlag={true}
                photo={values.image}
                deleteFunction={async () => (await deleteImage)()}
                uploadFunction={(image: IImage) => uploadImage(image)}
              />
            </Styled.AdminMarginBlock>
          </Styled.AdminBlockWrapper>
          <Styled.AdminMarginBlock className="top">
            <Styled.AdminBlockWrapper>
              <PhotoBlockDashed
                className="about"
                deleteFlag={true}
                photo={values.believe.image}
                deleteFunction={async () => (await deleteBelieveImage)()}
                uploadFunction={(image: IImage) => uploadBelieveImage(image)}
              />
              <SubHeaderWithInput
                header="Text on Photo"
                width="213px"
                minRows={3}
                name="believe.imageText"
                inputValue={values.believe.imageText}
                onChangeFunction={handleChange}
              />
              <PhotoBlockDashed
                className="about"
                deleteFlag={true}
                photo={values.goal.image}
                deleteFunction={async () => (await deleteGoalImage)()}
                uploadFunction={(image: IImage) => uploadGoalImage(image)}
              />
              <SubHeaderWithInput
                header="Text on Photo"
                width="213px"
                name="goal.imageText"
                minRows={3}
                inputValue={values.goal.imageText}
                onChangeFunction={handleChange}
              />
            </Styled.AdminBlockWrapper>
          </Styled.AdminMarginBlock>
        </Styled.AdminAboutUsGrid>
      </Styled.AdminPaddedBlock>
      <MetaTagsBlock theme="dark" sitemap="about-us" />
      <Styled.AdminPaddedBlock>
        <Styled.AdminBigButton type="submit" onClick={() => handleSubmit()}>
          Save changes
        </Styled.AdminBigButton>
      </Styled.AdminPaddedBlock>
    </div>
  );
};

export default AboutUsContentBlock;
