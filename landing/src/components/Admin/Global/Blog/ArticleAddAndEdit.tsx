import React, { useEffect, useState } from "react";
import PhotoBlockDashedHorizontal from "../PhotoBlockdashedHorizontal";
import PhotoBlockDashed from "../PhotoBlockDashed";
import SubHeaderWithInput from "../SubHeaderWithInput";
import BlogTags from "./BlogTags";
import { TicketsButton } from "../../../../styles/AdminCareersPage";

import * as Styles from "../../../../styles/AdminBlogPage";
import * as Styled from "../../../../styles/AdminPage";
import { useFormikContext } from "formik";
import { IArticle, IView } from "../../../../types/Admin/Response.types";
import ArticleBlock from "../../Blog/ArticleBlock";
import { useMutation, useQueryClient } from "react-query";
import { queryKeys } from "../../../../consts/queryKeys";
import { adminBlogService } from "../../../../services/adminBlogPage";
import { IImage } from "../../../../types/Admin/Admin.types";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import InputWithType from "../../../Inputs/InputWithType";
import MetaTagsBlock from "../../MetaTagsBlock";
import AddTag from "./AddTag";

interface IAddAndEdit {
  article: number;
  views: IView[];
  isNewArticle: boolean;
  setIsNewArticle: (val: boolean) => void;
  setArticle: (val: number) => void;
  possibleTags: string[];
}

const TITLE_MIN = 10;
const TITLE_MAX = 60;
const DESCRIPTION_MIN = 20;
const DESCRIPTION_MAX = 160;

const META_TITLE_MAX = 60;
const META_DESCRIPTION_MAX = 160;

const ArticleAddAndEdit = ({
  article,
  isNewArticle,
  setIsNewArticle,
  setArticle,
  views,
  possibleTags,
}: IAddAndEdit) => {
  const queryClient = useQueryClient();
  const [descLength, setDescLength] = useState(0);
  const [titleLength, setTitleLength] = useState(0);

  const { values, handleSubmit, handleChange } = useFormikContext<IArticle>();

  const { mutateAsync: postArticle } = useMutation(
    queryKeys.postArticle,
    (dataToUpdate: IArticle) => adminBlogService.postArticle(dataToUpdate),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getBlogArticles]);
      },
    }
  );

  const { mutateAsync: editArticle } = useMutation(
    queryKeys.updateBlogArticle,
    (dataToUpdate: IArticle) => adminBlogService.updateById(dataToUpdate)
  );

  const { mutateAsync: updateViews } = useMutation(
    queryKeys.postArticle,
    (dataToUpdate: IView) => adminBlogService.updateViews(dataToUpdate)
  );
  // useEffect(() => {
  //   setDisabled(isNewArticle ? newArticle.disabled : values[article].disabled);
  // }, [isNewArticle, newArticle.disabled, article, setDisabled, values]);

  useEffect(() => {
    setDescLength(values.description.length);
    setTitleLength(values.title.length);
  }, [isNewArticle, article, values]);

  const updateArticle = async () => {
    if (views) {
      const updatedViews = views.find(
        (view) => view.articleUrl === values.url && { articleUrl: values.url }
      );
      updatedViews && (await updateViews(updatedViews));
    }
    // newArticle.tags = [];

    // await editArticle(values[article]);

    setArticle(0);
    setIsNewArticle(true);
    // setDisabled(false);
    values.meta.metaTitle === ""
      ? ((values.meta.metaTitle =
          values.title.length > META_TITLE_MAX
            ? values.title.substring(0, META_TITLE_MAX)
            : values.title),
        values.title)
      : values.meta.metaTitle;
    values.meta.metaDescription === ""
      ? ((values.meta.metaDescription =
          values.description.length > META_DESCRIPTION_MAX
            ? values.description.substring(0, META_DESCRIPTION_MAX)
            : values.description),
        values.description)
      : values.meta.metaDescription;
    handleSubmit();
  };

  const handleDescInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescLength(e.target.value.length);
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleLength(e.target.value.length);
  };

  const createArticle = async () => {
    if (views) {
      await updateViews({
        articleUrl: values.url,
        views: 231,
      });
    }
    // values.disabled = disabled;
    values.tags = values.tags.filter((tag) => tag !== "");
    values.meta.metaTitle === ""
      ? (values.meta.metaTitle =
          values.title.length > META_TITLE_MAX
            ? values.title.substring(0, META_TITLE_MAX)
            : values.title)
      : values.meta.metaTitle;
    values.meta.metaDescription === ""
      ? (values.meta.metaDescription =
          values.description.length > META_DESCRIPTION_MAX
            ? values.description.substring(0, META_DESCRIPTION_MAX)
            : values.description)
      : values.meta.metaDescription;
    const articleToAdd = values;

    // values.push(articleToAdd);

    // newArticle = {
    //   _id: "",
    //   url: "",
    //   content: [],
    //   title: "",
    //   image: { url: "" },
    //   author: { name: "", image: { url: "" }, specialization: "" },
    //   description: "",
    //   tags: [],
    //   possibleTags: newArticle.possibleTags,
    //   disabled: false,
    //   date: "",
    //   updatedOn: "",
    //   minutesToRead: 0,
    //   meta: { metaTitle: "", metaDescription: "", customHead: "" },
    // };

    await postArticle(articleToAdd);
    values.author.image = null;
    values.image = null;
    // setDisabled(false);
    setArticle(0);
    setIsNewArticle(true);
    handleSubmit();
  };

  const deleteAuthor = useDeleteImageFunction(values.author, "", false);
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

  console.log(values.tags);

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
          <TicketsButton
            type={"submit"}
            onClick={isNewArticle ? createArticle : updateArticle}
          >
            {`${isNewArticle ? "Save" : "Edit"} Article`}
          </TicketsButton>
        </Styles.SubmitButtonWrapper>
      </Styled.AdminPaddedBlock>
    </>
  );
};

export default ArticleAddAndEdit;
