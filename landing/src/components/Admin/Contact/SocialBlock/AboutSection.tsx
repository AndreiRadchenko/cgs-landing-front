import React from "react";
import { useFormikContext, FieldArray } from "formik";
import { useQueryClient } from "@tanstack/react-query";

import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import PhotoBlockAddRemove from "../../Global/PhotoBlockAddRemove";
import {
  AddButton,
  ButtonsContainer,
  DeleteButton,
} from "../../FAQ/adminFaq.styled";

import * as Styled from "../../../../styles/AdminPage";
import * as Styles from "../../../../styles/AdminContact.styled";
import { IContactPageData } from "../../../../types/Admin/AdminContact.types";
import { IImage } from "../../../../types/Admin/Admin.types";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import { queryKeys } from "../../../../consts/queryKeys";

const AboutSection = () => {
  const queryClient = useQueryClient();
  const { values, handleChange, handleSubmit } =
    useFormikContext<IContactPageData>();

  const { subtitle: aboutSubtitle, about } = values.abouts ?? {
    subtitle: "",
    about: [{ link: "", image: { url: "" } }],
  };

  const uploadImageFunction = useUploadImageFunction();
  const deleteImageFunction = useDeleteImageFunction();

  const uploadWithIndex = (index: number) => {
    const uploadFunc = (image: IImage) =>
      uploadImageFunction(image, values.abouts.about[index]);
    return uploadFunc;
  };

  const deleteWithIndex = (index: number) => {
    const deleteFunc = async () =>
      (await deleteImageFunction)(values.abouts.about[index]);
    return deleteFunc;
  };

  const addQuestion = (index: number) => {
    values.abouts.about.splice(index + 1, 0, {
      link: "",
      image: null,
    });
    handleSubmit();
    queryClient.invalidateQueries([queryKeys.getContactPage]);
  };

  const deleteQuestion = (index: number) => {
    values.abouts.about.splice(index, 1);
    handleSubmit();
    queryClient.invalidateQueries([queryKeys.getContactPage]);
  };

  return (
    <Styles.ContentWrapper>
      <SubHeaderWithInput
        width="48%"
        placeholder="About subtitle"
        header="Subtitle 2"
        inputValue={aboutSubtitle}
        onChangeFunction={handleChange}
        name="abouts.subtitle"
      />
      <FieldArray name="messenger">
        {() => (
          <Styles.EmailList>
            {about.map((aboutItem, index) => (
              <div style={{ width: "48%" }} key={index}>
                <Styled.AdminSubTitle>{`More about ${
                  index + 1
                }`}</Styled.AdminSubTitle>
                <Styles.MessengerItem>
                  <PhotoBlockAddRemove
                    style={{ width: "128px", height: "128px" }}
                    imageStyle={{ height: "40px", width: "40px" }}
                    photo={aboutItem.image}
                    header="add image"
                    deleteFlag={true}
                    uploadFunction={uploadWithIndex(index)}
                    deleteFunction={deleteWithIndex(index)}
                  />
                  <Styles.MessengerTextlItem>
                    <Styled.AdminInput
                      placeholder="Add link"
                      onChange={handleChange}
                      name={`abouts.about[${index}].link`}
                      value={aboutItem.link}
                      className="withBottomButtons"
                    />
                    <ButtonsContainer className="about">
                      {about.length < 4 && (
                        <AddButton onClick={() => addQuestion(index)}>
                          [ + add next ]
                        </AddButton>
                      )}
                      {about.length > 1 && (
                        <DeleteButton onClick={() => deleteQuestion(index)}>
                          delete point
                        </DeleteButton>
                      )}
                    </ButtonsContainer>
                  </Styles.MessengerTextlItem>
                </Styles.MessengerItem>
              </div>
            ))}
          </Styles.EmailList>
        )}
      </FieldArray>
    </Styles.ContentWrapper>
  );
};

export default AboutSection;
