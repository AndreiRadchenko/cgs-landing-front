import React, { FC, useState } from "react";
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
import { adminCareersService } from "../../../../services/adminCareersPage";
import { adminBlogService } from "../../../../services/adminBlogPage";

interface IArticles {
  isNewArticle: boolean;
  setIsNewArticle: React.Dispatch<React.SetStateAction<boolean>>;
  article: number;
  setArticle: React.Dispatch<React.SetStateAction<number>>;
}

const ContentBlock: FC<IArticles> = ({
  isNewArticle,
  setArticle,
  article,
  setIsNewArticle,
}) => {
  const { values, handleSubmit, handleChange } =
    useFormikContext<IBlogResponse>();
  const uploadFunc = (image: any) => console.log("ф");
  const deleteFunc = async () => console.log("");

  const { mutateAsync } = useMutation(
    queryKeys.deleteArticle,
    (dataToUpdate: IBlogResponse) =>
      adminBlogService.updateBlogPage(dataToUpdate)
  );

  const deleteArticle = () => {
    const id = values.articles[article]._id;
    const dataToUpdate = {
      articles: [...values.articles.filter((article) => article._id !== id)],
    } as IBlogResponse;
    mutateAsync(dataToUpdate);
    values.articles.splice(article, 1);
    setArticle(0);
    handleSubmit();
  };

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
              <SubHeaderWithInput
                header="Date"
                inputValue={
                  isNewArticle
                    ? values.newArticle.date
                    : values.articles[article].date
                }
                name={
                  isNewArticle ? "newArticle.date" : `articles[${article}].date`
                }
                onChangeFunction={handleChange}
                isBlog={true}
                height="56px"
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
              <SubHeaderWithInput
                header="Time to read"
                inputValue={
                  isNewArticle
                    ? String(values.newArticle.minutesToRead)
                    : String(values.articles[article].minutesToRead)
                }
                name={
                  isNewArticle
                    ? "newArticle.minutesToRead"
                    : `articles[${article}].minutesToRead`
                }
                onChangeFunction={handleChange}
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
      <ArticleBlock
        isNewArticle={isNewArticle}
        setIsNewArticle={setIsNewArticle}
        setArticle={setArticle}
        article={article}
      />
      <Styles.AdminSubTitle>Tags</Styles.AdminSubTitle>
      <BlogTags />
      <Styles.SubmitButtonWrapper>
        <TicketsButton>{isNewArticle ? "Post" : "Edit Article"}</TicketsButton>
      </Styles.SubmitButtonWrapper>
      <PublishedArticles
        setArticle={setArticle}
        setIsNewArticle={setIsNewArticle}
      />
    </Styled.AdminPaddedBlock>
  );
};

export default ContentBlock;
