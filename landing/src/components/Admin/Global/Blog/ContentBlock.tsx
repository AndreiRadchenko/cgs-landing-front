import React from "react";
import PhotoBlockDashedHorizontal from "../PhotoBlockdashedHorizontal";
import PhotoBlockDashed from "../PhotoBlockDashed";
import SubHeaderWithInput from "../SubHeaderWithInput";
import BlogTags from "./BlogTags";
import { TicketsButton } from "../../../../styles/AdminCareersPage";
import PublishedArticles from "./PublishedArticles";

import * as Styles from "../../../../styles/AdminBlogPage";
import * as Styled from "../../../../styles/AdminPage";

const ContentBlock = () => {
  const uploadFunc = (image: any) => console.log("");
  const deleteFunc = async () => console.log("");

  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHeader>Blog</Styled.AdminHeader>
      <Styles.AdminSubTitle>Add new article</Styles.AdminSubTitle>
      <Styles.BigWrapper>
        <Styles.SmallWrapper>
          <PhotoBlockDashedHorizontal
            photo={""}
            deleteFlag={true}
            uploadFunction={uploadFunc}
            deleteFunction={deleteFunc}
            horizontalFlex={true}
            maxWidth="745px"
            header="Drop banner here"
          />
          <SubHeaderWithInput
            header="Title"
            inputValue="inputValue"
            name="title"
            onChangeFunction={() => {
              console.log("");
            }}
            isBlog={true}
            height="75px"
          />
          <SubHeaderWithInput
            header="Description"
            inputValue="inputValue"
            name="description"
            onChangeFunction={() => {
              console.log("");
            }}
            isBlog={true}
            height="75px"
          />
          <Styles.ColumnsWrapper>
            <Styles.Column>
              <SubHeaderWithInput
                header="Author's name"
                inputValue="inputValue"
                name="name"
                onChangeFunction={() => {
                  console.log("");
                }}
                isBlog={true}
                height="56px"
              />
              <SubHeaderWithInput
                header="Date"
                inputValue="inputValue"
                name="date"
                onChangeFunction={() => {
                  console.log("");
                }}
                isBlog={true}
                height="56px"
              />
            </Styles.Column>
            <Styles.Column>
              <SubHeaderWithInput
                header="Specialization (writer, other...)"
                inputValue="inputValue"
                name="specialization"
                onChangeFunction={() => {
                  console.log("");
                }}
                isBlog={true}
                height="56px"
              />
              <SubHeaderWithInput
                header="Time to read"
                inputValue="inputValue"
                name="time"
                onChangeFunction={() => {
                  console.log("");
                }}
                isBlog={true}
                height="56px"
              />
            </Styles.Column>
          </Styles.ColumnsWrapper>
        </Styles.SmallWrapper>
        <PhotoBlockDashed
          photo={""}
          deleteFlag={true}
          uploadFunction={uploadFunc}
          deleteFunction={deleteFunc}
          horizontalFlex={true}
          maxWidth="324px"
        />
      </Styles.BigWrapper>
      <Styles.SubHeadersWrapper>
        <Styles.SubHeaderWrapper>
          <SubHeaderWithInput
            header="Subtitle number"
            inputValue="inputValue"
            name="subtitleNumber"
            onChangeFunction={() => {
              console.log("");
            }}
            isBlog={true}
            height="56px"
            width="213px"
          />
        </Styles.SubHeaderWrapper>
        <Styles.SubHeaderWrapper>
          <SubHeaderWithInput
            header="Subtitle"
            inputValue="inputValue"
            name="subtitle"
            onChangeFunction={() => {
              console.log("");
            }}
            isBlog={true}
            height="56px"
            width="865px"
          />
        </Styles.SubHeaderWrapper>
      </Styles.SubHeadersWrapper>
      <SubHeaderWithInput
        header="Text"
        inputValue="inputValue"
        name="text"
        onChangeFunction={() => {
          console.log("");
        }}
        isBlog={true}
        height="473px"
      />
      <Styles.ButtonsWrapper>
        <Styles.FooterButton>
          + Add Subtitle number and Subtitle
        </Styles.FooterButton>
        <Styles.FooterButton>+ Add Text</Styles.FooterButton>
      </Styles.ButtonsWrapper>
      <Styles.AdminSubTitle>Tags</Styles.AdminSubTitle>
      <BlogTags />
      <Styles.SubmitButtonWrapper>
        <TicketsButton>Post</TicketsButton>
      </Styles.SubmitButtonWrapper>
      <PublishedArticles />
    </Styled.AdminPaddedBlock>
  );
};

export default ContentBlock;
