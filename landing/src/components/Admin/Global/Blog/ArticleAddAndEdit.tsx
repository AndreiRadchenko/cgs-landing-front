import React, { useEffect, useState } from "react";
import PhotoBlockDashed from "../PhotoBlockDashed";
import SubHeaderWithInput from "../SubHeaderWithInput";
import BlogTags from "./BlogTags";
import Gist from "react-gist";

import * as Styles from "../../../../styles/AdminBlogPage";
import * as Styled from "../../../../styles/AdminPage";
import { useFormikContext } from "formik";
import { IArticle } from "../../../../types/Admin/Response.types";
import { IImage } from "../../../../types/Admin/Admin.types";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import InputWithType from "../../../Inputs/InputWithType";
import MetaTagsBlock from "../../MetaTagsBlock";
import AddTag from "./AddTag";
import { useScrollTo } from "../../../../hooks/useScrollTo";
import AdminBlockDropDown from "../AdminBlockDropDown";
import AuthorPhotoDashed from "./AuthorPhotoDashed";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import ButtonArrow from "../../../../utils/ButtonArrow";
import TextEditor from "../../../TextEditor/TextEditor";

interface IAddAndEdit {
  article: number;
  isNewArticle: boolean;
  setIsNewArticle: (val: boolean) => void;
  setArticle: (val: number) => void;
  possibleTags: string[];
  scrollHandler: () => void;
}

const TITLE_MIN = 10;
const TITLE_MAX = 60;
const DESCRIPTION_MIN = 20;
const DESCRIPTION_MAX = 160;

const ArticleAddAndEdit = ({
  isNewArticle,
  setIsNewArticle,
  possibleTags,
  setArticle,
  scrollHandler,
}: IAddAndEdit) => {
  const [descLength, setDescLength] = useState(0);
  const [titleLength, setTitleLength] = useState(0);
  const [ref, scrollTo] = useScrollTo<HTMLDivElement>();

  const { values, handleSubmit, handleChange, resetForm } =
    useFormikContext<IArticle>();

  useEffect(() => {
    setDescLength(values.description.length);
    setTitleLength(values.title.length);
  }, [isNewArticle, values]);

  const handleDescInput = (e: InputEvent) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (e.target) setDescLength(e.target.innerText.length);
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

  const reset = () => {
    resetForm();
    scrollTo();
  };

  const cancelArticle = () => {
    setIsNewArticle(true);
    setArticle(0);
    scrollHandler();
  };

  const handleDraftClick = () => {
    if (isNewArticle) {
      values.draft = true;
      handleSubmit();
    }
  };

  return (
    <>
      <Styled.AdminBlocksContent ref={ref}>
        <Styled.AdminHeader>BLOG</Styled.AdminHeader>
        <AdminBlockDropDown title="Add Article" defaultOpen={!isNewArticle}>
          <Styles.AdminBlogGrid>
            <div style={{ width: "235px", height: "249px" }}>
              <Styles.AdminSubTitle>Banner</Styles.AdminSubTitle>
              <PhotoBlockDashed
                photo={values.image}
                deleteFlag={true}
                uploadFunction={uploadBannerFunc}
                deleteFunction={deleteBannerFunc}
                horizontalFlex={true}
                header="Drop new image here"
              />
            </div>
            <Styles.ArticleInputsWrapper style={{ marginLeft: "40px" }}>
              <SubHeaderWithInput
                inputValue={values.author.name}
                onChangeFunction={handleChange}
                name="author.name"
                header="Author's name"
                placeholder="Author's name"
              />
              <SubHeaderWithInput
                inputValue={values.url}
                onChangeFunction={handleChange}
                name="url"
                header="Url"
                placeholder="Url"
              />
              <InputWithType
                type="date"
                value={values.date}
                onChange={handleChange}
                name="date"
                header="Date"
              />
              <InputWithType
                type="date"
                value={values.updatedOn}
                onChange={handleChange}
                name="updatedOn"
                header="Updated On"
              />
              <AuthorPhotoDashed
                photo={values.author.image}
                deleteFlag
                deleteFunction={deleteAuthorFunc}
                uploadFunction={uploadAuthorFunc}
                style={{ marginBottom: "16px" }}
              />
              <InputWithType
                type="datetime-local"
                value={values.scheduleArticle}
                onChange={handleChange}
                name="scheduleArticle"
                header="Scheduled for"
              />
            </Styles.ArticleInputsWrapper>
            <Styles.ArticleInputsWrapper style={{ marginLeft: "24px" }}>
              <SubHeaderWithInput
                inputValue={values.author.specialization}
                onChangeFunction={handleChange}
                name="author.specialization"
                header="Specialization (writer, other...)"
                placeholder="writer, other..."
              />
              <InputWithType
                value={values.minutesToRead.toString()}
                onChange={handleChange}
                name="minutesToRead"
                header="Time to read"
                type="number"
              />
              <Styled.TagContainer>
                <Styles.AdminSubTitle>Tags</Styles.AdminSubTitle>
                <AddTag possibleTags={possibleTags} />
              </Styled.TagContainer>
              <BlogTags possibleTags={possibleTags} />
            </Styles.ArticleInputsWrapper>
          </Styles.AdminBlogGrid>
          <SubHeaderWithInput
            onInputFunction={handleTitle}
            inputValue={values.title}
            onChangeFunction={handleChange}
            name="title"
            header="Title"
            placeholder="title"
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
          <TextEditor
            header="Description"
            name="description"
            props={{ onInput: handleDescInput }}
          />
          <Styles.Text>
            <Styles.Message>
              {(descLength > DESCRIPTION_MAX || descLength < DESCRIPTION_MIN) &&
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
          <TextEditor
            header="Text"
            name="content"
            props={{
              setOptions: {
                font: ["NAMU", "Open Sans"],
                linkRelDefault: {
                  default: undefined,
                  check_new_window: "nofollow noopener",
                },
                buttonList: [
                  [
                    "formatBlock",
                    "font",
                    "fontSize",
                    "fontColor",
                    "align",
                    "paragraphStyle",
                    "blockquote",
                  ],
                  [
                    "bold",
                    "underline",
                    "italic",
                    "strike",
                    "subscript",
                    "superscript",
                  ],
                  ["removeFormat"],
                  ["outdent", "indent"],
                  ["list"],
                  ["codeView"],
                  ["link", "image", "video"],
                ],
              },
            }}
          />
        </AdminBlockDropDown>
      </Styled.AdminBlocksContent>
      <Styled.MetaBlockWraper>
        <MetaTagsBlock
          theme="dark"
          sitemap={(values.url !== "" && `blog/${values.url}`) || undefined}
        />
      </Styled.MetaBlockWraper>
      <Styles.BlogButtonWrapper>
        <Styles.SubmitButtonWrapper>
          <BlackButton
            type="submit"
            size={"1.5em"}
            padding={"1em 3.25em"}
            onClick={() => handleSubmit()}
          >
            {`${isNewArticle ? "Save" : "Edit"} Article`}
            <ArrowContainer>
              <ButtonArrow />
            </ArrowContainer>
          </BlackButton>
          {isNewArticle && (
            <Styles.DraftButton onClick={handleDraftClick}>
              Add to draft
            </Styles.DraftButton>
          )}
        </Styles.SubmitButtonWrapper>
        <Styles.BlogCancelButton
          type={"submit"}
          onClick={isNewArticle ? reset : cancelArticle}
        >
          {isNewArticle ? "Reset" : "Cancel"}
        </Styles.BlogCancelButton>
      </Styles.BlogButtonWrapper>
    </>
  );
};

export default ArticleAddAndEdit;
