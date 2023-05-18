import React from "react";
import { useFormikContext } from "formik";

import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import VideoBlockDashed from "../Global/VideoBlockDashed";
import ButtonArrow from "../../../utils/ButtonArrow";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";

import {
  ArrowContainer,
  BlackButton,
} from "../../../styles/HomePage/General.styled";
import * as Styles from "../../../styles/AdminAboutUs.styled";
import * as Styled from "../../../styles/AdminPage";
import { IAbout } from "../../../types/Admin/Response.types";
import { IImage } from "../../../types/Admin/Admin.types";

const AboutBlock = () => {
  const { values, handleChange, handleSubmit } = useFormikContext<IAbout>();

  const { video, image, codex, philosophy } = values.about ?? {
    video: { image: "" },
    image: "",
    codex: { title: "", text: "" },
    philosophy: { title: "", text: "" },
  };

  const deleteImageFunction = useDeleteImageFunction(values.about);
  const uploadImageFunction = useUploadImageFunction(values.about);
  const deleteVideoFunction = useDeleteImageFunction(values.about.video);
  const uploadVideoFunction = useUploadImageFunction(values.about.video);

  const uploadFunc = (image: IImage) => uploadImageFunction(image);
  const deleteFunc = async () => (await deleteImageFunction)();
  const uploadVideo = (image: IImage) => uploadVideoFunction(image);
  const deleteVideo = async () => (await deleteVideoFunction)();

  const handleClick = () => handleSubmit();

  return (
    <Styled.ContentWrapper>
      <Styles.ImagesWrapper>
        <div>
          <Styled.AdminSubTitle>Banner backup image</Styled.AdminSubTitle>
          <PhotoBlockDashed
            style={{ marginBottom: "32px" }}
            photo={image}
            deleteFlag={true}
            uploadFunction={uploadFunc}
            deleteFunction={deleteFunc}
          />
        </div>
        <div>
          <Styled.AdminSubTitle>Banner video </Styled.AdminSubTitle>
          <VideoBlockDashed
            style={{ marginBottom: "32px" }}
            photo={video?.image}
            deleteFlag={true}
            uploadFunction={uploadVideo}
            deleteFunction={deleteVideo}
          />
        </div>
        <div>
          <Styled.AdminSubTitle>Supported video formats:</Styled.AdminSubTitle>
          <Styled.AdminSubTitle>.mp4, .webm</Styled.AdminSubTitle>
        </div>
      </Styles.ImagesWrapper>

      <Styles.Headlines>
        <div>
          <SubHeaderWithInput
            placeholder="Codex title"
            header="Headline 1"
            inputValue={codex.title}
            onChangeFunction={handleChange}
            name="about.codex.title"
          />
          <SubHeaderWithInput
            placeholder="Text"
            header=""
            inputValue={codex.text}
            onChangeFunction={handleChange}
            name="about.codex.text"
            minRows={4}
          />
        </div>
        <div>
          <SubHeaderWithInput
            placeholder="Philosophy title"
            header="Headline 2"
            inputValue={philosophy.title}
            onChangeFunction={handleChange}
            name="about.philosophy.title"
          />
          <SubHeaderWithInput
            placeholder="Text"
            header=""
            inputValue={philosophy.text}
            onChangeFunction={handleChange}
            name="about.philosophy.text"
            minRows={4}
          />
        </div>
      </Styles.Headlines>
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

export default AboutBlock;
