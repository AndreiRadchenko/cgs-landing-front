import React, { useEffect, useState } from "react";
import PhotoBlockDashed from "../PhotoBlockDashed";
import SubHeaderWithInput from "../SubHeaderWithInput";
import BlogTags from "./BlogTags";

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
const TextEditor = dynamic(() => import("../../../TextEditor/TextEditor"), {
  ssr: false,
});
import { articleIntroPlugin } from "./customArticleIntroPlugin";
import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "../../../../consts/queryKeys";
import { adminGlobalService } from "../../../../services/adminHomePage";
import dynamic from "next/dynamic";
import { SunEditorReactProps } from "suneditor-react/dist/types/SunEditorReactProps";
import { Plugin } from "suneditor/src/plugins/Plugin";
import { IArticleAddAndEdit } from "../../../../types/Admin/Blog.types";

const ArticleAddAndEdit = ({
  isNewArticle,
  setIsNewArticle,
  possibleTags,
  setArticle,
  scrollHandler,
}: IArticleAddAndEdit) => {
  const [descLength, setDescLength] = useState(0);
  const [titleLength, setTitleLength] = useState(0);
  const [resetTrigger, setResetTrigger] = useState(false);
  const [shouldValidate, setShouldValidate] = useState(false);
  const [ref, scrollTo] = useScrollTo<HTMLDivElement>();
  const { mutateAsync } = useMutation([queryKeys.uploadImage], (data: any) =>
    adminGlobalService.uploadImage(data)
  );

  const [plugins, setPlugins] = useState<
    Array<Plugin> | Record<string, Plugin>
  >();
  useEffect(() => {
    let isMounted = true;
    import("suneditor/src/plugins").then((plugs) => {
      if (isMounted) {
        setPlugins(plugs as any);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleImageUploadBefore = (files: File[], uploadHandler: any) => {
    const formData = new FormData();
    formData.append("image", files[0], files[0].name);
    mutateAsync(formData).then((img) => {
      const response = {
        result: [
          {
            url: img?.url,
            name: "Imagename",
            size: "4096",
          },
        ],
      };

      uploadHandler(response);
    });
  };

  const textEditorProps: SunEditorReactProps | undefined = plugins && {
    height: "990px",
    onImageUploadBefore: handleImageUploadBefore,
    setOptions: {
      font: ["NAMU", "Open Sans"],
      linkRelDefault: {
        default: undefined,
        check_new_window: "nofollow noopener",
      },
      plugins: { articleIntroPlugin, ...plugins },
      buttonList: [
        ["undo", "redo"],
        [
          "formatBlock",
          "font",
          "fontSize",
          "fontColor",
          "hiliteColor",
          "align",
          "paragraphStyle",
          "blockquote",
          "lineHeight",
          "table",
        ],
        ["bold", "underline", "italic", "strike", "subscript", "superscript"],
        ["removeFormat"],
        ["outdent", "indent"],
        ["list"],
        ["link", "image", "video"],
        ["articleIntro"],
        ["codeView"],
      ],
    },
  };

  const {
    values,
    handleSubmit,
    handleChange,
    resetForm,
    setFieldValue,
    errors,
  } = useFormikContext<IArticle>();

  useEffect(() => {
    setDescLength(values.description.length);
    setTitleLength(values.title.length);
  }, [isNewArticle, values]);

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
    setResetTrigger((prev) => !prev);
    resetForm();
    scrollTo();
  };

  const cancelArticle = () => {
    setIsNewArticle(true);
    setArticle(0);
    scrollHandler();
  };

  const handleDraftClick = () => {
    setFieldValue("draft", true);
    setFieldValue("disabled", true);
    setShouldValidate(true);
    handleSubmit();
  };

  return (
    <>
      <Styled.AdminBlocksContent ref={ref}>
        <Styled.AdminHeader>BLOG</Styled.AdminHeader>
        <AdminBlockDropDown
          title="Add Article"
          defaultOpen={!isNewArticle}
          onClickLogic={() => reset()}
        >
          <Styles.AdminBlogGrid>
            <div style={{ width: "100%", maxHeight: "249px" }}>
              <Styles.AdminSubTitle>Banner</Styles.AdminSubTitle>
              <PhotoBlockDashed
                photo={values.image}
                deleteFlag={true}
                uploadFunction={uploadBannerFunc}
                deleteFunction={deleteBannerFunc}
                header="Drop new image here"
              />
              {errors.image && shouldValidate && (
                <Styled.AdminBlogErrorMessage>
                  {errors.image && "Can not be empty"}
                </Styled.AdminBlogErrorMessage>
              )}
            </div>
            <Styles.ArticleInputsWrapper style={{ marginLeft: "40px" }}>
              <SubHeaderWithInput
                isAdminBlog={true}
                inputValue={values.author.name}
                onChangeFunction={handleChange}
                name="author.name"
                header="Author's name"
                placeholder="Author's name"
              />
              {errors.author?.name && shouldValidate && (
                <Styled.AdminBlogErrorMessage>
                  {errors.author.name}
                </Styled.AdminBlogErrorMessage>
              )}
              <SubHeaderWithInput
                isAdminBlog={true}
                inputValue={values.url}
                onChangeFunction={handleChange}
                name="url"
                header="Url"
                placeholder="Url"
              />
              {errors.url && shouldValidate && (
                <Styled.AdminBlogErrorMessage>
                  {errors.url}
                </Styled.AdminBlogErrorMessage>
              )}
              <Styled.ExtraMargin>
                <InputWithType
                  type="date"
                  value={values.date}
                  onChange={handleChange}
                  name="date"
                  header="Date"
                />
                {errors.date && shouldValidate && (
                  <Styled.AdminBlogErrorMessage>
                    {errors.date}
                  </Styled.AdminBlogErrorMessage>
                )}
              </Styled.ExtraMargin>
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
                isAdminBlog={true}
                inputValue={values.author.specialization}
                onChangeFunction={handleChange}
                name="author.specialization"
                header="Specialization (writer, other...)"
                placeholder="writer, other..."
              />
              {errors.author?.specialization && shouldValidate && (
                <Styled.AdminBlogErrorMessage>
                  {errors.author.specialization}
                </Styled.AdminBlogErrorMessage>
              )}
              <Styled.ExtraMargin>
                <InputWithType
                  value={values.minutesToRead.toString()}
                  onChange={handleChange}
                  name="minutesToRead"
                  header="Time to read"
                  type="number"
                />
                {errors.minutesToRead && shouldValidate && (
                  <Styled.AdminBlogErrorMessage>
                    {errors.minutesToRead}
                  </Styled.AdminBlogErrorMessage>
                )}
              </Styled.ExtraMargin>
              <Styled.TagContainer>
                <Styles.AdminSubTitle>Tags</Styles.AdminSubTitle>
                <AddTag possibleTags={possibleTags} />
              </Styled.TagContainer>
              <BlogTags
                resetTrigger={resetTrigger}
                possibleTags={possibleTags}
              />
              {errors.tags && shouldValidate && (
                <Styled.AdminBlogErrorMessage>
                  {errors.tags}
                </Styled.AdminBlogErrorMessage>
              )}
            </Styles.ArticleInputsWrapper>
          </Styles.AdminBlogGrid>
          <SubHeaderWithInput
            isAdminBlog={true}
            onInputFunction={handleTitle}
            inputValue={values.title}
            onChangeFunction={handleChange}
            name="title"
            header="Title"
            placeholder="title"
          />
          {errors.title && shouldValidate && (
            <Styled.AdminBlogErrorMessage>
              {errors.title}
            </Styled.AdminBlogErrorMessage>
          )}
          <Styled.ExtraMargin>
            <TextEditor header="Description" name="description" />
            {errors.description && shouldValidate && (
              <Styled.AdminBlogErrorMessage>
                {errors.description}
              </Styled.AdminBlogErrorMessage>
            )}
          </Styled.ExtraMargin>
          {textEditorProps && (
            <Styled.ExtraMargin>
              <TextEditor
                header="Text"
                name="content"
                props={textEditorProps}
              />
            </Styled.ExtraMargin>
          )}
          <Styles.BlogButtonWrapper>
            <Styles.SubmitButtonWrapper>
              <BlackButton
                size={"1.5em"}
                padding={"1em 3.25em"}
                onClick={() => {
                  setShouldValidate(true);
                  handleSubmit();
                }}
              >
                {`${isNewArticle ? "Save" : "Edit"} Article`}
                <ArrowContainer>
                  <ButtonArrow />
                </ArrowContainer>
              </BlackButton>
              {isNewArticle && (
                <Styles.DraftButton type={"button"} onClick={handleDraftClick}>
                  Add to draft
                </Styles.DraftButton>
              )}
            </Styles.SubmitButtonWrapper>
            <Styles.BlogCancelButton
              type={"button"}
              onClick={isNewArticle ? reset : cancelArticle}
            >
              {isNewArticle ? "Reset" : "Cancel"}
            </Styles.BlogCancelButton>
          </Styles.BlogButtonWrapper>
        </AdminBlockDropDown>
      </Styled.AdminBlocksContent>
      <Styled.MetaBlockWraper>
        <MetaTagsBlock
          theme="dark"
          sitemap={(values.url !== "" && `blog/${values.url}`) || undefined}
        />
      </Styled.MetaBlockWraper>
    </>
  );
};

export default ArticleAddAndEdit;
