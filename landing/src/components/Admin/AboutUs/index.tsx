import { useFormikContext } from "formik";
import React, { useState } from "react";
import * as Styled from "../../../styles/AdminPage";
import * as StyledThisComp from "../FAQ/adminFaq.styled";
import { IAbout } from "../../../types/Admin/AdminAboutUs.types";
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
  const deleteMainImage = useDeleteImageFunction(values.mainImage, "");
  const uploadMainImage = useUploadImageFunction(values.mainImage, "");
  const deleteImage1 = useDeleteImageFunction(values.pinImages.image1, "");
  const uploadImage1 = useUploadImageFunction(values.pinImages.image1, "");
  const deleteImage2 = useDeleteImageFunction(values.pinImages.image2, "");
  const uploadImage2 = useUploadImageFunction(values.pinImages.image2, "");
  const deleteImage3 = useDeleteImageFunction(values.pinImages.image3, "");
  const uploadImage3 = useUploadImageFunction(values.pinImages.image3, "");

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
            {Object.entries(values.textBlock).map((el, idx) => (
              <div key={idx}>
                <SubHeaderWithInput
                  name={`textBlock.${el[0]}.title`}
                  header="Subtitle"
                  inputValue={el[1].title}
                  onChangeFunction={handleChange}
                />
                <SubHeaderWithInput
                  name={`textBlock.${el[0]}.description`}
                  header="Text"
                  inputValue={el[1].description}
                  onChangeFunction={handleChange}
                />
              </div>
            ))}
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
                photo={values.mainImage.image}
                deleteFunction={async () => (await deleteMainImage)()}
                uploadFunction={(image: IImage) => uploadMainImage(image)}
              />
              <SubHeaderWithInput
                header="Text on Photo"
                width="213px"
                minRows={2}
                name="mainImage.text"
                inputValue={values.mainImage.text}
                onChangeFunction={handleChange}
              />
              <PhotoBlockDashed
                className="about"
                deleteFlag={true}
                photo={values.pinImages.image1.image}
                deleteFunction={async () => (await deleteImage1)()}
                uploadFunction={(image: IImage) => uploadImage1(image)}
              />
              <SubHeaderWithInput
                header="Text on Photo"
                width="213px"
                name="pinImages.image1.text"
                inputValue={values.pinImages.image1.text}
                onChangeFunction={handleChange}
              />
              <PhotoBlockDashed
                className="about"
                deleteFlag={true}
                photo={values.pinImages.image2.image}
                deleteFunction={async () => (await deleteImage2)()}
                uploadFunction={(image: IImage) => uploadImage2(image)}
              />
              <SubHeaderWithInput
                width="213px"
                header="Text on Photo"
                name="pinImages.image2.text"
                inputValue={values.pinImages.image2.text}
                onChangeFunction={handleChange}
              />
              <PhotoBlockDashed
                className="about"
                deleteFlag={true}
                photo={values.pinImages.image3.image}
                deleteFunction={async () => (await deleteImage3)()}
                uploadFunction={(image: IImage) => uploadImage3(image)}
              />
              <SubHeaderWithInput
                header="Text on Photo"
                width="213px"
                name="pinImages.image3.text"
                inputValue={values.pinImages.image3.text}
                onChangeFunction={handleChange}
              />
            </Styled.AdminBlockWrapper>
          </Styled.AdminMarginBlock>
        </Styled.AdminAboutUsGrid>
      </Styled.AdminPaddedBlock>
      <MetaTagsBlock theme="dark" />
      <Styled.AdminPaddedBlock>
        <Styled.AdminBigButton type="submit" onClick={() => handleSubmit()}>
          Save changes
        </Styled.AdminBigButton>
      </Styled.AdminPaddedBlock>
    </div>
  );
};

export default AboutUsContentBlock;
