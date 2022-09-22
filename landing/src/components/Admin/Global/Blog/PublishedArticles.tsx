import React, { FC } from "react";
import { AdminSubTitle } from "../../../../styles/AdminBlogPage";
import BlogItem from "../../../BlogItem/BlogItem";
import ChangeIconImg from "../../../../../public/ChangeIcon.svg";

import * as Styles from "../../../../styles/BlogPublishedArticles.styled";
import { useFormikContext } from "formik";
import {
  IArticle,
  IArticleWithInd,
  IBlogResponse,
  ISwapData,
  IViews,
} from "../../../../types/Admin/Response.types";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useMutation } from "react-query";
import { queryKeys } from "../../../../consts/queryKeys";
import { adminBlogService } from "../../../../services/adminBlogPage";
import close from "../../../../../public/bigClose.svg";

interface IArticles {
  setIsNewArticle: React.Dispatch<React.SetStateAction<boolean>>;
  setArticle: React.Dispatch<React.SetStateAction<number>>;
  article: number;
  isNewArticle: boolean;
  data: IBlogResponse;
  views?: IViews;
  disabled?: boolean;
}

interface IArticleItem {
  item: IArticle;
  i: number;
}

const PublishedArticles: FC<IArticles> = ({
  setIsNewArticle,
  setArticle,
  isNewArticle,
  article,
  data,
  views,
}) => {
  const { values, handleSubmit } = useFormikContext<IBlogResponse>();

  const { mutateAsync: mutateArticle } = useMutation(
    queryKeys.updateBlogArticle,
    (dataToUpdate: IArticleWithInd) =>
      adminBlogService.updateByInd(dataToUpdate)
  );

  const { mutateAsync: deleteArticleByInd } = useMutation(
    queryKeys.updateBlogArticle,
    (ind: number) => adminBlogService.deleteByInd(ind)
  );

  const { mutateAsync: updateViews } = useMutation(
    queryKeys.views,
    (dataToUpdate: IViews) => adminBlogService.updateViews(dataToUpdate)
  );

  const { mutateAsync: swapElements } = useMutation(
    queryKeys.swapArticles,
    (dataToUpdate: ISwapData) => adminBlogService.swapTwoElements(dataToUpdate)
  );

  const deleteArticle = async (i: number) => {
    if (views) {
      const allViews = views.allViews.filter(
        (view) => view.articleUrl !== values.articles[i].url
      );
      await updateViews({ allViews: allViews });
    }
    await deleteArticleByInd(i);
    values.articles.splice(i, 1);
    setArticle(0);
    setIsNewArticle(true);
    handleSubmit();
  };

  const deactivateArticle = async (i: number) => {
    values.articles[i].disabled = true;
    await mutateArticle({ article: values.articles[i], ind: i });
    setArticle(0);
    setIsNewArticle(true);
    handleSubmit();
  };

  const publishArticle = async (i: number) => {
    values.articles[i].disabled = false;
    await mutateArticle({ article: values.articles[i], ind: i });
    setArticle(0);
    setIsNewArticle(true);
    handleSubmit();
  };

  const toggleEditPost = (i: number) => {
    const newArticleCase = () => {
      setIsNewArticle(false);
      setArticle(i);
    };
    const editArticleCase = () => {
      const articleFromData = data.articles.find(
        (e: IArticle) => e._id === values.articles[article]._id
      );
      articleFromData && (values.articles[article] = articleFromData);
      setArticle(0);
      setIsNewArticle(true);
    };
    isNewArticle ? newArticleCase() : editArticleCase();
    window.scrollTo(0, 0);
  };

  const handleDragEnd = (param: DropResult) => {
    if (!isNewArticle) return;
    const srcIndex = param.source.index;
    const desIndex: number | undefined = param.destination?.index;
    typeof desIndex === "number" &&
      values.articles.splice(
        desIndex,
        0,
        values.articles.splice(srcIndex, 1)[0]
      ) &&
      swapElements({ desIndex, srcIndex });
  };

  const ArticleItem = ({ item, i }: IArticleItem) => {
    return (
      <BlogItem
        isAdmin={true}
        image={item.image?.url}
        description={item.description}
        title={item.title}
      >
        <Styles.ChangeIcon
          src={
            isNewArticle
              ? ChangeIconImg.src
              : !isNewArticle && article === i
              ? close.src
              : ""
          }
          onClick={() => toggleEditPost(i)}
        />
        <Styles.DeleteButton onClick={() => deleteArticle(i)}>
          delete article
        </Styles.DeleteButton>
        <Styles.DeactivateButton
          disabled={item.disabled}
          onClick={item.disabled ? undefined : () => deactivateArticle(i)}
        >
          Deactivate
        </Styles.DeactivateButton>
        <Styles.PublishButton onClick={() => publishArticle(i)}>
          Publish
        </Styles.PublishButton>
      </BlogItem>
    );
  };

  return values.articles.length ? (
    <Styles.Wrapper>
      <AdminSubTitle>Published articles</AdminSubTitle>
      <DragDropContext onDragEnd={(param) => handleDragEnd(param)}>
        <Droppable droppableId={"droppable-1"}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {values.articles.map((item: IArticle, i) =>
                isNewArticle ? (
                  <Draggable draggableId={"draggable-" + i} index={i} key={i}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ArticleItem item={item} i={i} />
                      </div>
                    )}
                  </Draggable>
                ) : (
                  <ArticleItem item={item} i={i} key={i} />
                )
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Styles.Wrapper>
  ) : (
    <Styles.EmptyArticles>No articles</Styles.EmptyArticles>
  );
};

export default PublishedArticles;
