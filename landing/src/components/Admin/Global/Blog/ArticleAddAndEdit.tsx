import React, { useEffect, useState } from "react";
import PhotoBlockDashedHorizontal from "../PhotoBlockdashedHorizontal";
import PhotoBlockDashed from "../PhotoBlockDashed";
import SubHeaderWithInput from "../SubHeaderWithInput";
import BlogTags from "./BlogTags";
import { TicketsButton } from "../../../../styles/AdminCareersPage";

import * as Styles from "../../../../styles/AdminBlogPage";
import * as Styled from "../../../../styles/AdminPage";
import { useFormikContext } from "formik";
import { IArticle } from "../../../../types/Admin/Response.types";
import ArticleBlock from "../../Blog/ArticleBlock";
import { IImage } from "../../../../types/Admin/Admin.types";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import InputWithType from "../../../Inputs/InputWithType";
import MetaTagsBlock from "../../MetaTagsBlock";
import AddTag from "./AddTag";

interface IAddAndEdit {
  article: number;
  isNewArticle: boolean;
  possibleTags: string[];
}

const TITLE_MIN = 10;
const TITLE_MAX = 60;
const DESCRIPTION_MIN = 20;
const DESCRIPTION_MAX = 160;

const ArticleAddAndEdit = ({
  article,
  isNewArticle,
  possibleTags,
}: IAddAndEdit) => {
  const [descLength, setDescLength] = useState(0);
  const [titleLength, setTitleLength] = useState(0);

  const { values, handleSubmit, handleChange } = useFormikContext<IArticle>();

  useEffect(() => {
    setDescLength(values.description.length);
    setTitleLength(values.title.length);
  }, [isNewArticle, article, values]);

  const handleDescInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescLength(e.target.value.length);
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleLength(e.target.value.length);
  };

  const deleteAuthor = useDeleteImageFunction(
    values.author,
    "",
    false,
    "author.image"
  );
  const uploadAuthor = useUploadImageFunction(
    values.author,
    "",
    false,
    "author.image"
  );
  const deleteBanner = useDeleteImageFunction(values, "", false);
  const uploadBanner = useUploadImageFunction(values, "", false);

  const deleteAuthorFunc = async () => (await deleteAuthor)();
  const uploadAuthorFunc = (image: IImage) => uploadAuthor(image);
  const deleteBannerFunc = async () => (await deleteBanner)();
  const uploadBannerFunc = (image: IImage) => uploadBanner(image);

  return (
    <>
      <Styled.AdminPaddedBlock>
        <Styled.AdminHeader>Blog</Styled.AdminHeader>
        <Styles.AdminSubTitle>Add new article</Styles.AdminSubTitle>
        <Styles.BigWrapper>
          <Styles.SmallWrapper>
            <PhotoBlockDashedHorizontal
              photo={values.image}
              deleteFlag={true}
              uploadFunction={uploadBannerFunc}
              deleteFunction={deleteBannerFunc}
              horizontalFlex={true}
              maxWidth="745px"
              header="Drop banner here"
            />
            <SubHeaderWithInput
              header="Article Title"
              onInputFunction={handleTitle}
              minRows={2}
              inputValue={values.title}
              name="title"
              onChangeFunction={handleChange}
              isBlog={true}
            />
            <Styles.Text>
              <Styles.Message>
                {(titleLength > TITLE_MAX || titleLength < TITLE_MIN) &&
                  "Title should be between 10 and 60 characters"}
              </Styles.Message>
              <Styles.Counter
                className={
                  titleLength > TITLE_MAX || titleLength < TITLE_MIN
                    ? "error"
                    : undefined
                }
              >
                {titleLength}
              </Styles.Counter>
            </Styles.Text>
            <SubHeaderWithInput
              header="Url"
              inputValue={values.url}
              minRows={2}
              name="url"
              onChangeFunction={handleChange}
              isBlog={true}
            />
            <SubHeaderWithInput
              header="Description"
              onInputFunction={handleDescInput}
              inputValue={values.description}
              name="description"
              onChangeFunction={handleChange}
              isBlog={true}
            />

            <Styles.Text>
              <Styles.Message>
                {(descLength > DESCRIPTION_MAX ||
                  descLength < DESCRIPTION_MIN) &&
                  "Description should be between 20 and 160 characters"}
              </Styles.Message>
              <Styles.Counter
                className={
                  descLength > DESCRIPTION_MAX || descLength < DESCRIPTION_MIN
                    ? "error"
                    : undefined
                }
              >
                {descLength}
              </Styles.Counter>
            </Styles.Text>
            <Styles.ColumnsWrapper>
              <Styles.Column>
                <SubHeaderWithInput
                  header="Author's name"
                  inputValue={values.author.name}
                  name="author.name"
                  onChangeFunction={handleChange}
                  isBlog={true}
                  height="56px"
                />
                <InputWithType
                  name="date"
                  value={values.date}
                  onChange={handleChange}
                  header={"Date"}
                  type={"date"}
                />
                <InputWithType
                  header="Updated On"
                  name="updatedOn"
                  onChange={handleChange}
                  type={"date"}
                  value={values.updatedOn}
                />
                <InputWithType
                  header="Schedule Article"
                  name="scheduleArticle"
                  onChange={handleChange}
                  type="datetime-local"
                  value={values.scheduleArticle}
                />
              </Styles.Column>
              <Styles.Column>
                <SubHeaderWithInput
                  header="Specialization (writer, other...)"
                  inputValue={values.author.specialization}
                  name="author.specialization"
                  onChangeFunction={handleChange}
                  isBlog={true}
                  height="56px"
                />
                <InputWithType
                  name="minutesToRead"
                  value={String(values.minutesToRead)}
                  onChange={handleChange}
                  header={"Time to read"}
                  type={"number"}
                />
              </Styles.Column>
            </Styles.ColumnsWrapper>
          </Styles.SmallWrapper>
          <PhotoBlockDashed
            photo={values.author.image}
            deleteFlag={true}
            uploadFunction={uploadAuthorFunc}
            deleteFunction={deleteAuthorFunc}
            horizontalFlex={true}
            maxWidth="324px"
          />
        </Styles.BigWrapper>
        <ArticleBlock isNewArticle={isNewArticle} article={article} />
        <Styled.TagContainer>
          <Styles.AdminSubTitle className="blog">Tags</Styles.AdminSubTitle>
          <AddTag possibleTags={possibleTags} />
        </Styled.TagContainer>
        <BlogTags
          isNewArticle={isNewArticle}
          article={article}
          possibleTags={possibleTags}
        />
      </Styled.AdminPaddedBlock>
      <MetaTagsBlock theme="dark" />
      <Styled.AdminPaddedBlock>
        <Styles.SubmitButtonWrapper>
          <TicketsButton type={"submit"} onClick={() => handleSubmit()}>
            {`${isNewArticle ? "Save" : "Edit"} Article`}
          </TicketsButton>
        </Styles.SubmitButtonWrapper>
      </Styled.AdminPaddedBlock>
    </>
  );
};

export default ArticleAddAndEdit;
