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

const SocialSection = () => {
  const queryClient = useQueryClient();
  const { values, handleChange, handleSubmit } =
    useFormikContext<IContactPageData>();

  const { subtitle: socialSubtitle, social } = values.socials ?? {
    subtitle: "",
    social: [{ link: "", image: { url: "" } }],
  };

  const uploadImageFunction = useUploadImageFunction();
  const deleteImageFunction = useDeleteImageFunction();

  const uploadWithIndex = (index: number) => {
    const uploadFunc = (image: IImage) =>
      uploadImageFunction(image, values.socials.social[index]);
    return uploadFunc;
  };

  const deleteWithIndex = (index: number) => {
    const deleteFunc = async () =>
      (await deleteImageFunction)(values.socials.social[index]);
    return deleteFunc;
  };

  const addQuestion = (index: number) => {
    values.socials.social.splice(index + 1, 0, {
      link: "",
      image: null,
    });
    handleSubmit();
    queryClient.invalidateQueries([queryKeys.getContactPage]);
  };

  const deleteQuestion = (index: number) => {
    values.socials.social.splice(index, 1);
    handleSubmit();
    queryClient.invalidateQueries([queryKeys.getContactPage]);
  };

  return (
    <Styled.ContentWrapper>
      <SubHeaderWithInput
        width="48%"
        placeholder="Social subtitle"
        header="Subtitle 1"
        inputValue={socialSubtitle}
        onChangeFunction={handleChange}
        name="socials.subtitle"
      />
      <FieldArray name="messenger">
        {() => (
          <Styles.EmailList>
            {social.map((socialItem, index) => (
              <div style={{ width: "48%" }} key={index}>
                <Styled.AdminSubTitle>{`Social ${
                  index + 1
                }`}</Styled.AdminSubTitle>
                <Styles.MessengerItem>
                  <PhotoBlockAddRemove
                    style={{ width: "128px", height: "128px" }}
                    imageStyle={{ height: "40px", width: "40px" }}
                    photo={socialItem.image}
                    header="add image"
                    deleteFlag={true}
                    uploadFunction={uploadWithIndex(index)}
                    deleteFunction={deleteWithIndex(index)}
                  />
                  <Styles.MessengerTextlItem>
                    <Styled.AdminInput
                      placeholder="Add link"
                      onChange={handleChange}
                      name={`socials.social[${index}].link`}
                      value={socialItem.link}
                      className="withBottomButtons"
                    />
                    <ButtonsContainer className="about">
                      {social.length < 4 && (
                        <AddButton onClick={() => addQuestion(index)}>
                          [ + add next ]
                        </AddButton>
                      )}
                      {social.length > 1 && (
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
    </Styled.ContentWrapper>
  );
};

export default SocialSection;
