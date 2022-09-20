import React, { useEffect, useState } from "react";
import PhotoBlockDashedHorizontal from "../PhotoBlockdashedHorizontal";
import PhotoBlockDashed from "../PhotoBlockDashed";
import SubHeaderWithInput from "../SubHeaderWithInput";
import BlogTags from "./BlogTags";
import { TicketsButton } from "../../../../styles/AdminCareersPage";

import * as Styles from "../../../../styles/AdminBlogPage";
import * as Styled from "../../../../styles/AdminPage";
import { useFormikContext } from "formik";
import {
  IArticle,
  INewArticle,
  IView,
} from "../../../../types/Admin/Response.types";
import ArticleBlock from "../../Blog/ArticleBlock";
import { useMutation } from "react-query";
import { queryKeys } from "../../../../consts/queryKeys";
import { adminBlogService } from "../../../../services/adminBlogPage";
import { IImage } from "../../../../types/Admin/Admin.types";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import InputWithType from "../../../Inputs/InputWithType";
import MetaTagsBlock from "../../MetaTagsBlock";
import AddTag from "./AddTag";
import PublishedArticles from "./PublishedArticles";

interface IAddAndEdit {
  article: number;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
  isNewArticle: boolean;
  setIsNewArticle: (val: boolean) => void;
  newArticle: INewArticle;
  disabled: boolean;
  setDisabled: (val: boolean) => void;
  views: IView[];
  setArticle: (val: number) => void;
}

const TITLE_MIN = 10;
const TITLE_MAX = 60;
const DESCRIPTION_MIN = 20;
const DESCRIPTION_MAX = 160;

const META_TITLE_MAX = 60;
const META_DESCRIPTION_MAX = 160;

const AddAndEdit = ({
  article,
  isNewArticle,
  setIsNewArticle,
  setFieldValue,
  newArticle,
  disabled,
  setDisabled,
  views,
  setArticle,
}: IAddAndEdit) => {
  const [descLength, setDescLength] = useState(0);
  const [titleLength, setTitleLength] = useState(0);
  const { values, handleSubmit, handleChange } = useFormikContext<IArticle[]>();

  const { mutateAsync: postArticle } = useMutation(
    queryKeys.postArticle,
    (dataToUpdate: IArticle) => adminBlogService.postArticle(dataToUpdate)
  );

  const { mutateAsync: editArticle } = useMutation(
    queryKeys.updateBlogArticle,
    (dataToUpdate: IArticle) => adminBlogService.updateById(dataToUpdate)
  );

  const { mutateAsync: updateViews } = useMutation(
    queryKeys.postArticle,
    (dataToUpdate: IView) => adminBlogService.updateViews(dataToUpdate)
  );
  useEffect(() => {
    setDisabled(isNewArticle ? newArticle.disabled : values[article].disabled);
  }, [isNewArticle, newArticle.disabled, article, setDisabled, values]);

  useEffect(() => {
    setDescLength(
      isNewArticle
        ? newArticle.description.length
        : values[article].description.length
    );
    setTitleLength(
      isNewArticle ? newArticle.title.length : values[article].title.length
    );
  }, [
    isNewArticle,
    article,
    newArticle.title.length,
    newArticle.description.length,
    values,
  ]);

  const updateArticle = async () => {
    // if (views) {
    //   const updatedViews = views.map((view) =>
    //     view.articleUrl === values[article].url
    //       ? { ...view, articleUrl: values[article].url }
    //       : view
    //   );
    //   await updateViews({ allViews: updatedViews });
    // }
    newArticle.tags = [];

    await editArticle(values[article]);

    setArticle(0);
    setIsNewArticle(true);
    setDisabled(false);
    values[article].meta.metaTitle === ""
      ? ((values[article].meta.metaTitle =
          values[article].title.length > META_TITLE_MAX
            ? values[article].title.substring(0, META_TITLE_MAX)
            : values[article].title),
        values[article].title)
      : values[article].meta.metaTitle;
    values[article].meta.metaDescription === ""
      ? ((values[article].meta.metaDescription =
          values[article].description.length > META_DESCRIPTION_MAX
            ? values[article].description.substring(0, META_DESCRIPTION_MAX)
            : values[article].description),
        values[article].description)
      : values[article].meta.metaDescription;
    handleSubmit();
  };

  const handleDescInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescLength(e.target.value.length);
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleLength(e.target.value.length);
  };

  const createArticle = async () => {
    // if (views.data) {
    //   const updatedViews: IView[] = [
    //     ...views.data[0].allViews,
    //     {
    //       articleUrl: values.newArticle.url,
    //       views: 231,
    //     },
    //   ];
    //   await updateViews({ allViews: updatedViews });
    // }
    newArticle.disabled = disabled;
    newArticle.tags = newArticle.tags.filter((tag) => tag !== "");
    newArticle.meta.metaTitle === ""
      ? (newArticle.meta.metaTitle =
          newArticle.title.length > META_TITLE_MAX
            ? newArticle.title.substring(0, META_TITLE_MAX)
            : newArticle.title)
      : newArticle.meta.metaTitle;
    newArticle.meta.metaDescription === ""
      ? (newArticle.meta.metaDescription =
          newArticle.description.length > META_DESCRIPTION_MAX
            ? newArticle.description.substring(0, META_DESCRIPTION_MAX)
            : newArticle.description)
      : newArticle.meta.metaDescription;
    const articleToAdd = newArticle;

    values.push(articleToAdd);

    newArticle = {
      _id: "",
      url: "",
      content: [],
      title: "",
      image: { url: "" },
      author: { name: "", image: { url: "" }, specialization: "" },
      description: "",
      tags: [],
      possibleTags: newArticle.possibleTags,
      disabled: false,
      date: "",
      updatedOn: "",
      minutesToRead: 0,
      meta: { metaTitle: "", metaDescription: "", customHead: "" },
    };

    await postArticle(articleToAdd);
    setDisabled(false);
    setArticle(0);
    setIsNewArticle(true);
    handleSubmit();
  };

  const deleteNewAuthor = useDeleteImageFunction(newArticle.author, "");
  const uploadNewAuthor = useUploadImageFunction(newArticle.author, "");
  const deleteNewBanner = useDeleteImageFunction(newArticle, "");
  const uploadNewBanner = useUploadImageFunction(newArticle, "");
  const deleteEditAuthor = useDeleteImageFunction(values[article]?.author, "");
  const uploadEditAuthor = useUploadImageFunction(values[article]?.author, "");

  const deleteEditBanner = useDeleteImageFunction(values[article], "");
  const uploadEditBanner = useUploadImageFunction(values[article], "");
  const deleteNewAuthorFunc = async () => (await deleteNewAuthor)();
  const uploadNewAuthorFunc = (image: IImage) => uploadNewAuthor(image);
  const deleteNewBannerFunc = async () => (await deleteNewBanner)();
  const uploadNewBannerFunc = (image: IImage) => uploadNewBanner(image);
  const deleteEditAuthorFunc = async () => (await deleteEditAuthor)();
  const uploadEditAuthorFunc = (image: IImage) => uploadEditAuthor(image);
  const deleteEditBannerFunc = async () => (await deleteEditBanner)();
  const uploadEditBannerFunc = (image: IImage) => uploadEditBanner(image);
  return (
    <>
      <Styled.AdminPaddedBlock>
        <Styled.AdminHeader>Blog</Styled.AdminHeader>
        <Styles.AdminSubTitle>Add new article</Styles.AdminSubTitle>

        <Styles.BigWrapper>
          <Styles.SmallWrapper>
            <PhotoBlockDashedHorizontal
              photo={
                isNewArticle
                  ? newArticle.image?.url.length
                    ? newArticle.image
                    : null
                  : values[article].image?.url.length
                  ? values[article].image
                  : null
              }
              deleteFlag={true}
              uploadFunction={
                isNewArticle ? uploadNewBannerFunc : uploadEditBannerFunc
              }
              deleteFunction={
                isNewArticle ? deleteNewBannerFunc : deleteEditBannerFunc
              }
              horizontalFlex={true}
              maxWidth="745px"
              header="Drop banner here"
            />
            <SubHeaderWithInput
              header="Article Title"
              onInputFunction={handleTitle}
              minRows={2}
              inputValue={
                isNewArticle ? newArticle.title : values[article].title
              }
              name={isNewArticle ? "newArticle.title" : `[${article}].title`}
              id="title"
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
              inputValue={isNewArticle ? newArticle.url : values[article].url}
              minRows={2}
              name={isNewArticle ? "newArticle.url" : `[${article}].url`}
              id="title"
              onChangeFunction={handleChange}
              isBlog={true}
            />
            <SubHeaderWithInput
              header="Description"
              onInputFunction={handleDescInput}
              inputValue={
                isNewArticle
                  ? newArticle.description
                  : values[article].description
              }
              name={
                isNewArticle
                  ? "newArticle.description"
                  : `[${article}].description`
              }
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
                  inputValue={
                    isNewArticle
                      ? newArticle.author.name
                      : values[article].author.name
                  }
                  name={
                    isNewArticle
                      ? "newArticle.author.name"
                      : `[${article}].author.name`
                  }
                  onChangeFunction={handleChange}
                  isBlog={true}
                  height="56px"
                />
                <InputWithType
                  name={isNewArticle ? "newArticle.date" : `[${article}].date`}
                  value={isNewArticle ? newArticle.date : values[article].date}
                  onChange={handleChange}
                  header={"Date"}
                  type={"date"}
                />
                <InputWithType
                  header="Updated On"
                  name={
                    isNewArticle
                      ? "newArticle.updatedOn"
                      : `articles[${article}].updatedOn`
                  }
                  onChange={handleChange}
                  type={"date"}
                  value={
                    isNewArticle
                      ? newArticle.updatedOn
                      : values[article].updatedOn
                  }
                />
              </Styles.Column>
              <Styles.Column>
                <SubHeaderWithInput
                  header="Specialization (writer, other...)"
                  inputValue={
                    isNewArticle
                      ? newArticle.author.specialization
                      : values[article].author.specialization
                  }
                  name={
                    isNewArticle
                      ? "newArticle.author.specialization"
                      : `[${article}].author.specialization`
                  }
                  onChangeFunction={handleChange}
                  isBlog={true}
                  height="56px"
                />
                <InputWithType
                  name={
                    isNewArticle
                      ? "newArticle.minutesToRead"
                      : `[${article}].minutesToRead`
                  }
                  value={
                    isNewArticle
                      ? String(newArticle.minutesToRead)
                      : String(values[article].minutesToRead)
                  }
                  onChange={handleChange}
                  header={"Time to read"}
                  type={"number"}
                />
              </Styles.Column>
            </Styles.ColumnsWrapper>
          </Styles.SmallWrapper>
          <PhotoBlockDashed
            photo={
              isNewArticle
                ? newArticle.author.image?.url.length
                  ? newArticle.author.image
                  : null
                : values[article].author.image?.url.length
                ? values[article].author.image
                : null
            }
            deleteFlag={true}
            uploadFunction={
              isNewArticle ? uploadNewAuthorFunc : uploadEditAuthorFunc
            }
            deleteFunction={
              isNewArticle ? deleteNewAuthorFunc : deleteEditAuthorFunc
            }
            horizontalFlex={true}
            maxWidth="324px"
          />
        </Styles.BigWrapper>

        <ArticleBlock
          isNewArticle={isNewArticle}
          article={article}
          newArticle={newArticle}
        />
        <Styled.TagContainer>
          <Styles.AdminSubTitle className="blog">Tags</Styles.AdminSubTitle>
          <AddTag />
        </Styled.TagContainer>
        <BlogTags
          isNewArticle={isNewArticle}
          article={article}
          newArticle={newArticle}
        />
      </Styled.AdminPaddedBlock>
      <MetaTagsBlock
        theme="dark"
        nestedMeta={isNewArticle ? newArticle : values[article]}
        nameBefore={isNewArticle ? `newArticle` : `[${article}]`}
      />
      <Styled.AdminPaddedBlock>
        <Styles.SubmitButtonWrapper>
          <TicketsButton
            type={"submit"}
            onClick={isNewArticle ? createArticle : updateArticle}
          >
            {`${isNewArticle ? "Save" : "Edit"} Article`}
          </TicketsButton>
        </Styles.SubmitButtonWrapper>

        <PublishedArticles
          views={views ? views : undefined}
          data={values}
          isNewArticle={isNewArticle}
          article={article}
          setArticle={setArticle}
          setIsNewArticle={setIsNewArticle}
          disabled={disabled}
        />
      </Styled.AdminPaddedBlock>
    </>
  );
};

export default AddAndEdit;
