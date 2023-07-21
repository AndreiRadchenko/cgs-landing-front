import React from "react";
import { useFormikContext, FieldArray } from "formik";
import { useQueryClient } from "@tanstack/react-query";

import ButtonArrow from "../../../utils/ButtonArrow";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import PhotoBlockAddRemove from "../Global/PhotoBlockAddRemove";
import HistoryLink from "../HistoryLink";

import {
  ArrowContainer,
  BlackButton,
} from "../../../styles/HomePage/General.styled";
import * as Styled from "../../../styles/AdminPage";
import * as Styles from "../../../styles/AdminContact.styled";
import { IContactPageData } from "../../../types/Admin/AdminContact.types";
import { IImage } from "../../../types/Admin/Admin.types";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import { queryKeys } from "../../../consts/queryKeys";

const EmailBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IContactPageData>([
    queryKeys.getContactPage,
  ])?.emails;
  const messengersData = queryClient.getQueryData<IContactPageData>([
    queryKeys.getContactPage,
  ])?.messengers;

  const { values, handleChange, handleSubmit } =
    useFormikContext<IContactPageData>();

  values.emails.lastModified = data?.lastModified;

  const { subtitle: emailSubtitle, email } = values.emails ?? {
    subtitle: "",
    email: [{ popup: "", email: "" }],
  };

  const { subtitle: messengerSubtitle, messenger } = values.messengers ?? {
    subtitle: "",
    messenger: [{ name: "", link: "", image: { url: "" } }],
  };

  const uploadImageFunction = useUploadImageFunction();
  const deleteImageFunction = useDeleteImageFunction();

  const uploadWithIndex = (index: number) => {
    const uploadFunc = (image: IImage) =>
      uploadImageFunction(image, values.messengers.messenger[index]);
    return uploadFunc;
  };

  const deleteWithIndex = (index: number) => {
    const deleteFunc = async () =>
      (await deleteImageFunction)(values.messengers.messenger[index]);
    return deleteFunc;
  };

  const handleClick = () => handleSubmit();

  return (
    <Styled.ContentWrapper>
      {data?.lastModified && (
        <HistoryLink
          sectionName="Emails"
          lastModified={data?.lastModified}
          link={"/history/contacts/emails"}
        />
      )}
      <SubHeaderWithInput
        width="48%"
        placeholder="Emails subtitle"
        header="Emails subtitle"
        inputValue={emailSubtitle}
        onChangeFunction={handleChange}
        name="emails.subtitle"
      />

      <FieldArray name="email">
        {() => (
          <Styles.EmailList>
            {email.map((email, index) => (
              <Styles.EmailItem key={index}>
                <SubHeaderWithInput
                  width="100%"
                  placeholder="Text for e-mail"
                  header={`Text for e-mail ${index + 1}`}
                  inputValue={email.popup}
                  onChangeFunction={handleChange}
                  name={`emails.email[${index}].popup`}
                />
                <SubHeaderWithInput
                  width="100%"
                  placeholder="Email"
                  inputValue={email.email}
                  onChangeFunction={handleChange}
                  name={`emails.email[${index}].email`}
                />
              </Styles.EmailItem>
            ))}
          </Styles.EmailList>
        )}
      </FieldArray>
      {messengersData?.lastModified && (
        <HistoryLink
          sectionName="Messengers"
          lastModified={messengersData?.lastModified}
          link={"/history/contacts/messengers"}
        />
      )}
      <SubHeaderWithInput
        width="48%"
        placeholder="Messengers subtitle"
        header="Messengers subtitle"
        inputValue={messengerSubtitle}
        onChangeFunction={handleChange}
        name="messengers.subtitle"
      />
      <FieldArray name="messenger">
        {() => (
          <Styles.EmailList>
            {messenger.map((messenger, index) => (
              <div style={{ width: "48%" }} key={index}>
                <Styled.AdminSubTitle>{`Messenger ${
                  index + 1
                }`}</Styled.AdminSubTitle>
                <Styles.MessengerItem>
                  <PhotoBlockAddRemove
                    style={{ height: "140px", width: "140px" }}
                    imageStyle={{ height: "40px", width: "40px" }}
                    photo={messenger.image}
                    deleteFlag={true}
                    header="add image"
                    uploadFunction={uploadWithIndex(index)}
                    deleteFunction={deleteWithIndex(index)}
                  />
                  <Styles.MessengerTextlItem>
                    <SubHeaderWithInput
                      width="100%"
                      placeholder="Button name"
                      inputValue={messenger.name}
                      onChangeFunction={handleChange}
                      name={`messengers.messenger[${index}].name`}
                    />
                    <SubHeaderWithInput
                      width="100%"
                      placeholder="Link"
                      inputValue={messenger.link}
                      onChangeFunction={handleChange}
                      name={`messengers.messenger[${index}].link`}
                    />
                  </Styles.MessengerTextlItem>
                </Styles.MessengerItem>
              </div>
            ))}
          </Styles.EmailList>
        )}
      </FieldArray>
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

export default EmailBlock;
