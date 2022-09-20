import React, { FC } from "react";
import { AdminSubTitle } from "../../../../styles/AdminBlogPage";
import BlogItem from "../../../BlogItem/BlogItem";
import ChangeIconImg from "../../../../../public/ChangeIcon.svg";

import * as Styles from "../../../../styles/BlogPublishedArticles.styled";
import { useFormikContext } from "formik";
import {
  IArticle,
  IBlogPageResponse,
  ISwapData,
  IView,
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
  setIsNewArticle: (val: boolean) => void;
  setArticle: (val: number) => void;
  article: number;
  isNewArticle: boolean;
  data?: IArticle[];
  views?: IView[];
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
  const { values, handleSubmit } = useFormikContext<IArticle[]>();

  const { mutateAsync: deleteBlogArticle } = useMutation(
    queryKeys.deleteArticle,
    (url: string) => adminBlogService.deleteByUrl(url)
  );

  const { mutateAsync: updateArticle } = useMutation(
    queryKeys.deleteArticle,
    (article: IArticle) => adminBlogService.updateById(article)
  );

  const { mutateAsync: updateViews } = useMutation(
    queryKeys.postArticle,
    (dataToUpdate: IView) => adminBlogService.updateViews(dataToUpdate)
  );

  const { mutateAsync: swapElements } = useMutation(
    queryKeys.postArticle,
    (dataToUpdate: ISwapData) => adminBlogService.swapTwoElements(dataToUpdate)
  );

  const deleteArticle = async (i: number) => {
    // if (views) {
    //   const allViews = views.filter(
    //     (view) => view.articleUrl !== values.articles[i].url
    //   );
    //   await updateViews(allViews);
    // }

    await deleteBlogArticle(values[i].url);
    setArticle(0);
    setIsNewArticle(true);
    handleSubmit();
  };

  const deactivateArticle = async (i: number) => {
    values[i].disabled = true;
    await updateArticle(values[i]);
    setArticle(0);
    setIsNewArticle(true);
    handleSubmit();
  };

  const publishArticle = async (i: number) => {
    values[i].disabled = false;
    await updateArticle(values[i]);
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
      // const articleFromData = values.find(
      //   (e: IArticle) => e._id === values[article]._id
      // );
      // articleFromData && (values[article] = articleFromData);
      setArticle(0);
      setIsNewArticle(true);
    };
    isNewArticle ? newArticleCase() : editArticleCase();
    window.scrollTo(0, 0);
  };

  const handleDragEnd = (param: DropResult) => {
    // if (!isNewArticle) return;
    // const srcIndex = param.source.index;
    // const desIndex: number | undefined = param.destination?.index;
    // typeof desIndex === "number" &&
    //   values.splice(desIndex, 0, values.articles.splice(srcIndex, 1)[0]) &&
    //   swapElements({ desIndex, srcIndex });
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

  return values.length ? (
    <Styles.Wrapper>
      <AdminSubTitle>Published articles</AdminSubTitle>
      <DragDropContext onDragEnd={(param) => handleDragEnd(param)}>
        <Droppable droppableId={"droppable-1"}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {values.map((item: IArticle, i) =>
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
