import React, { FC } from "react";
import PhotoBlockDashedHorizontal from "../PhotoBlockdashedHorizontal";
import PhotoBlockDashed from "../PhotoBlockDashed";
import SubHeaderWithInput from "../SubHeaderWithInput";
import BlogTags from "./BlogTags";
import { TicketsButton } from "../../../../styles/AdminCareersPage";
import PublishedArticles from "./PublishedArticles";

import * as Styles from "../../../../styles/AdminBlogPage";
import * as Styled from "../../../../styles/AdminPage";
import { useFormikContext } from "formik";
import { IBlogResponse } from "../../../../types/Admin/Response.types";
import ArticleBlock from "../../Blog/ArticleBlock";
import { useMutation } from "react-query";
import { queryKeys } from "../../../../consts/queryKeys";
import { adminBlogService } from "../../../../services/adminBlogPage";
import { IImage } from "../../../../types/Admin/Admin.types";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import InputWithType from "../../../Inputs/InputWithType";
import MetaTagsBlock from "../../MetaTagsBlock";

interface IArticles {
  isNewArticle: boolean;
  setIsNewArticle: React.Dispatch<React.SetStateAction<boolean>>;
  article: number;
  setArticle: React.Dispatch<React.SetStateAction<number>>;
  data: IBlogResponse;
}

const ContentBlock: FC<IArticles> = ({
  isNewArticle,
  setArticle,
  article,
  setIsNewArticle,
  data,
}) => {
  const { values, handleSubmit, handleChange } =
    useFormikContext<IBlogResponse>();

  const { mutateAsync } = useMutation(
    queryKeys.deleteArticle,
    (dataToUpdate: IBlogResponse) =>
      adminBlogService.updateBlogPage(dataToUpdate)
  );

  const updateArticle = async () => {
    await mutateAsync(values);
    setArticle(0);
    setIsNewArticle(true);
    handleSubmit();
  };

  const updateMetaTags = async () => {
    await mutateAsync(values);
    handleSubmit();
  };

  const createArticle = async () => {
    const articleToAdd = values.newArticle;
    values.articles.push(articleToAdd);
    values.newArticle = {
      url: "",
      content: [],
      title: "",
      image: { url: "" },
      author: { name: "", image: { url: "" }, specialization: "" },
      description: "",
      tags: [""],
      date: "",
      minutesToRead: 0,
      meta: { metaTitle: "", metaDescription: "", customHead: "" },
    };
    await mutateAsync(values);
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
              header="Title"
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
              height="75px"
            />
            <SubHeaderWithInput
              header="Url"
              inputValue={
                isNewArticle
                  ? values.newArticle.url
                  : values.articles[article].url
              }
              name={
                isNewArticle ? "newArticle.url" : `articles[${article}].url`
              }
              id="title"
              onChangeFunction={handleChange}
              isBlog={true}
              height="75px"
            />
            <SubHeaderWithInput
              header="Description"
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
              height="75px"
            />
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
        <Styles.AdminSubTitle>Tags</Styles.AdminSubTitle>
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
            {isNewArticle ? "Post" : "Edit Article"}
          </TicketsButton>
        </Styles.SubmitButtonWrapper>
        <PublishedArticles
          data={data}
          isNewArticle={isNewArticle}
          article={article}
          setArticle={setArticle}
          setIsNewArticle={setIsNewArticle}
        />

        <Styled.AdminPaddedBlock>
          <Styled.AdminBigButton type={"submit"} onClick={updateArticle}>
            {"Update order"}
          </Styled.AdminBigButton>
        </Styled.AdminPaddedBlock>
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
