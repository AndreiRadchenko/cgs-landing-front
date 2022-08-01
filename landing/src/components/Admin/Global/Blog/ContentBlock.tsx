import React, { FC, useEffect, useState } from "react";
import PhotoBlockDashedHorizontal from "../PhotoBlockdashedHorizontal";
import PhotoBlockDashed from "../PhotoBlockDashed";
import SubHeaderWithInput from "../SubHeaderWithInput";
import BlogTags from "./BlogTags";
import { TicketsButton } from "../../../../styles/AdminCareersPage";
import PublishedArticles from "./PublishedArticles";

import * as Styles from "../../../../styles/AdminBlogPage";
import * as Styled from "../../../../styles/AdminPage";
import { useFormikContext } from "formik";
import {
  IArticle,
  IBlogResponse,
  IView,
  IViews,
} from "../../../../types/Admin/Response.types";
import ArticleBlock from "../../Blog/ArticleBlock";
import { useMutation, useQuery } from "react-query";
import { queryKeys } from "../../../../consts/queryKeys";
import { adminBlogService } from "../../../../services/adminBlogPage";
import { IImage } from "../../../../types/Admin/Admin.types";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import InputWithType from "../../../Inputs/InputWithType";
import MetaTagsBlock from "../../MetaTagsBlock";
import AddTag from "./AddTag";
import { IBlogProps } from "../AdminBlogMainContent";

interface IArticles {
  isNewArticle: boolean;
  setIsNewArticle: React.Dispatch<React.SetStateAction<boolean>>;
  article: number;
  setArticle: React.Dispatch<React.SetStateAction<number>>;
  data: IBlogResponse;
  refetch: () => Promise<IBlogProps>;
}

const TITLE_MIN = 10;
const TITLE_MAX = 60;
const DESCRIPTION_MIN = 20;
const DESCRIPTION_MAX = 160;

const META_TITLE_MAX = 60;
const META_DESCRIPTION_MAX = 160;

const ContentBlock: FC<IArticles> = ({
  isNewArticle,
  setArticle,
  article,
  setIsNewArticle,
  data,
}) => {
  const [descLength, setDescLength] = useState(0);
  const [titleLength, setTitleLength] = useState(0);
  const { values, handleSubmit, handleChange } =
    useFormikContext<IBlogResponse>();
  const views = useQuery(queryKeys.views, () => adminBlogService.getViews());
  const [disabled, setDisabled] = useState<boolean>(false);
  const { mutateAsync } = useMutation(
    queryKeys.updateBlogPage,
    (dataToUpdate: IBlogResponse) =>
      adminBlogService.updateBlogPage(dataToUpdate)
  );

  const { mutateAsync: postArticle } = useMutation(
    queryKeys.postArticle,
    (dataToUpdate: IArticle) => adminBlogService.postArticle(dataToUpdate)
  );

  const { mutateAsync: updateViews } = useMutation(
    queryKeys.postArticle,
    (dataToUpdate: IViews) => adminBlogService.updateViews(dataToUpdate)
  );

  useEffect(() => {
    setDisabled(
      isNewArticle
        ? values.newArticle.disabled
        : values.articles[article].disabled
    );
  }, [isNewArticle, values.newArticle.disabled, values.articles, article]);

  useEffect(() => {
    setDescLength(
      isNewArticle
        ? values.newArticle.description.length
        : values.articles[article].description.length
    );
    setTitleLength(
      isNewArticle
        ? values.newArticle.title.length
        : values.articles[article].title.length
    );
  }, [
    isNewArticle,
    article,
    values.articles,
    values.newArticle.description.length,
    values.newArticle.title.length,
  ]);

  const updateArticle = async () => {
    const isChangedUrl =
      data.articles[article].url !== values.articles[article].url;
    if (isChangedUrl && views.data) {
      const updatedViews = views.data[0].allViews.map((view) =>
        view.articleUrl === data.articles[article].url
          ? { ...view, articleUrl: values.articles[article].url }
          : view
      );
      await updateViews({ allViews: updatedViews });
    }
    values.newArticle.tags = [];
    await mutateAsync(values);
    setArticle(0);
    setIsNewArticle(true);
    setDisabled(false);
    values.articles[article].meta.metaTitle === ""
      ? ((values.articles[article].meta.metaTitle =
          values.articles[article].title.length > META_TITLE_MAX
            ? values.articles[article].title.substring(0, META_TITLE_MAX)
            : values.articles[article].title),
        values.articles[article].title)
      : values.articles[article].meta.metaTitle;
    values.articles[article].meta.metaDescription === ""
      ? ((values.articles[article].meta.metaDescription =
          values.articles[article].description.length > META_DESCRIPTION_MAX
            ? values.articles[article].description.substring(
                0,
                META_DESCRIPTION_MAX
              )
            : values.articles[article].description),
        values.articles[article].description)
      : values.articles[article].meta.metaDescription;
    handleSubmit();
  };
  const updateMetaTags = async () => {
    await mutateAsync(values);
    handleSubmit();
  };

  const handleDescInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescLength(e.target.value.length);
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleLength(e.target.value.length);
  };

  const createArticle = async () => {
    if (views.data) {
      const updatedViews: IView[] = [
        ...views.data[0].allViews,
        {
          articleUrl: values.newArticle.url,
          views: 231,
        },
      ];
      await updateViews({ allViews: updatedViews });
    }
    values.newArticle.disabled = disabled;
    values.newArticle.tags = values.newArticle.tags.filter((tag) => tag !== "");
    values.newArticle.meta.metaTitle === ""
      ? (values.newArticle.meta.metaTitle =
          values.newArticle.title.length > META_TITLE_MAX
            ? values.newArticle.title.substring(0, META_TITLE_MAX)
            : values.newArticle.title)
      : values.newArticle.meta.metaTitle;
    values.newArticle.meta.metaDescription === ""
      ? (values.newArticle.meta.metaDescription =
          values.newArticle.description.length > META_DESCRIPTION_MAX
            ? values.newArticle.description.substring(0, META_DESCRIPTION_MAX)
            : values.newArticle.description)
      : values.newArticle.meta.metaDescription;
    const articleToAdd = values.newArticle;

    values.articles.push(articleToAdd);

    values.newArticle = {
      url: "",
      content: [],
      title: "",
      image: { url: "" },
      author: { name: "", image: { url: "" }, specialization: "" },
      description: "",
      tags: [],
      possibleTags: values.newArticle.possibleTags,
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

  const deleteNewAuthor = useDeleteImageFunction(values.newArticle.author, "");
  const uploadNewAuthor = useUploadImageFunction(values.newArticle.author, "");
  const deleteNewBanner = useDeleteImageFunction(values.newArticle, "");
  const uploadNewBanner = useUploadImageFunction(values.newArticle, "");
  const deleteEditAuthor = useDeleteImageFunction(
    values.articles[article]?.author,
    ""
  );
  const uploadEditAuthor = useUploadImageFunction(
    values.articles[article]?.author,
    ""
  );

  const deleteEditBanner = useDeleteImageFunction(values.articles[article], "");
  const uploadEditBanner = useUploadImageFunction(values.articles[article], "");
  const deleteNewAuthorFunc = async () => (await deleteNewAuthor)();
  const uploadNewAuthorFunc = (image: IImage) => uploadNewAuthor(image);
  const deleteNewBannerFunc = async () => (await deleteNewBanner)();
  const uploadNewBannerFunc = (image: IImage) => uploadNewBanner(image);
  const deleteEditAuthorFunc = async () => (await deleteEditAuthor)();
  const uploadEditAuthorFunc = (image: IImage) => uploadEditAuthor(image);
  const deleteEditBannerFunc = async () => (await deleteEditBanner)();
  const uploadEditBannerFunc = (image: IImage) => uploadEditBanner(image);

  return (
    <div>
      <Styled.AdminPaddedBlock>
        <Styled.AdminHeader>Blog</Styled.AdminHeader>
        <Styles.AdminSubTitle>Add new article</Styles.AdminSubTitle>
        <Styles.BigWrapper>
          <Styles.SmallWrapper>
            <PhotoBlockDashedHorizontal
              photo={
                isNewArticle
                  ? values.newArticle.image?.url.length
                    ? values.newArticle.image
                    : null
                  : values.articles[article].image?.url.length
                  ? values.articles[article].image
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
                isNewArticle
                  ? values.newArticle.title
                  : values.articles[article].title
              }
              name={
                isNewArticle ? "newArticle.title" : `articles[${article}].title`
              }
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
              inputValue={
                isNewArticle
                  ? values.newArticle.url
                  : values.articles[article].url
              }
              minRows={2}
              name={
                isNewArticle ? "newArticle.url" : `articles[${article}].url`
              }
              id="title"
              onChangeFunction={handleChange}
              isBlog={true}
            />
            <SubHeaderWithInput
              header="Description"
              onInputFunction={handleDescInput}
              inputValue={
                isNewArticle
                  ? values.newArticle.description
                  : values.articles[article].description
              }
              name={
                isNewArticle
                  ? "newArticle.description"
                  : `articles[${article}].description`
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
                      ? values.newArticle.author.name
                      : values.articles[article].author.name
                  }
                  name={
                    isNewArticle
                      ? "newArticle.author.name"
                      : `articles[${article}].author.name`
                  }
                  onChangeFunction={handleChange}
                  isBlog={true}
                  height="56px"
                />
                <InputWithType
                  name={
                    isNewArticle
                      ? "newArticle.date"
                      : `articles[${article}].date`
                  }
                  value={
                    isNewArticle
                      ? values.newArticle.date
                      : values.articles[article].date
                  }
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
                      ? values.newArticle.updatedOn
                      : values.articles[article].updatedOn
                  }
                />
              </Styles.Column>
              <Styles.Column>
                <SubHeaderWithInput
                  header="Specialization (writer, other...)"
                  inputValue={
                    isNewArticle
                      ? values.newArticle.author.specialization
                      : values.articles[article].author.specialization
                  }
                  name={
                    isNewArticle
                      ? "newArticle.author.specialization"
                      : `articles[${article}].author.specialization`
                  }
                  onChangeFunction={handleChange}
                  isBlog={true}
                  height="56px"
                />
                <InputWithType
                  name={
                    isNewArticle
                      ? "newArticle.minutesToRead"
                      : `articles[${article}].minutesToRead`
                  }
                  value={
                    isNewArticle
                      ? String(values.newArticle.minutesToRead)
                      : String(values.articles[article].minutesToRead)
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
                ? values.newArticle.author.image?.url.length
                  ? values.newArticle.author.image
                  : null
                : values.articles[article].author.image?.url.length
                ? values.articles[article].author.image
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

        <ArticleBlock isNewArticle={isNewArticle} article={article} />
        <Styled.TagContainer>
          <Styles.AdminSubTitle className="blog">Tags</Styles.AdminSubTitle>
          <AddTag />
        </Styled.TagContainer>
        <BlogTags isNewArticle={isNewArticle} article={article} />
      </Styled.AdminPaddedBlock>
      <MetaTagsBlock
        theme="dark"
        nestedMeta={isNewArticle ? values.newArticle : values.articles[article]}
        nameBefore={isNewArticle ? `newArticle` : `articles[${article}]`}
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
          views={views.data ? views.data[0] : undefined}
          data={data}
          isNewArticle={isNewArticle}
          article={article}
          setArticle={setArticle}
          setIsNewArticle={setIsNewArticle}
          disabled={disabled}
        />
        <Styled.AdminBigButton type={"submit"} onClick={updateArticle}>
          {"Update order"}
        </Styled.AdminBigButton>
      </Styled.AdminPaddedBlock>
      <MetaTagsBlock theme="dark" />
      <Styled.AdminPaddedBlock>
        <Styled.AdminBigButton type="submit" onClick={updateMetaTags}>
          Update meta tags
        </Styled.AdminBigButton>
      </Styled.AdminPaddedBlock>
    </div>
  );
};

export default ContentBlock;
