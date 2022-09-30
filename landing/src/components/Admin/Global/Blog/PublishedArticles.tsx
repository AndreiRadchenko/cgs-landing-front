import React, { FC } from "react";
import { AdminSubTitle } from "../../../../styles/AdminBlogPage";
import BlogItem from "../../../BlogItem/BlogItem";
import ChangeIconImg from "../../../../../public/ChangeIcon.svg";
import { adminGlobalService } from "../../../../services/adminHomePage";

import * as Styles from "../../../../styles/BlogPublishedArticles.styled";
import { useFormikContext } from "formik";
import {
  IArticle,
  ISwapData,
  IView,
} from "../../../../types/Admin/Response.types";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useMutation, useQueryClient } from "react-query";
import { queryKeys } from "../../../../consts/queryKeys";
import { adminBlogService } from "../../../../services/adminBlogPage";
import close from "../../../../../public/bigClose.svg";
import { AdminPaddedBlock } from "../../../../styles/AdminPage";

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
  const { values, handleSubmit } = useFormikContext<IArticle>();
  const queryClient = useQueryClient();

  const { mutateAsync: deleteBlogArticle } = useMutation(
    queryKeys.deleteArticle,
    (id: string) => adminBlogService.deleteByUrl(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getBlogArticles]);
      },
    }
  );

  const { mutateAsync: deleteView } = useMutation(
    queryKeys.deleteArticle,
    (id: string) => adminBlogService.deleteViewsById(id)
  );

  const { mutateAsync: updateArticle } = useMutation(
    queryKeys.deleteArticle,
    (article: IArticle) => adminBlogService.updateById(article),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getBlogArticles]);
      },
    }
  );

  const { mutateAsync: deletePhoto } = useMutation((url: string) =>
    adminGlobalService.deleteImage(url)
  );

  const { mutateAsync: updateViews } = useMutation(
    queryKeys.postArticle,
    (dataToUpdate: IView) => adminBlogService.updateViews(dataToUpdate)
  );

  const { mutateAsync: swapElements } = useMutation(
    queryKeys.swapArticles,
    (dataToUpdate: ISwapData) => adminBlogService.swapTwoElements(dataToUpdate)
  );

  const deleteArticle = async (i: number) => {
    if (views) {
      const viewToDelete = views.find((view) => view.articleUrl === values.url);
      if (viewToDelete && viewToDelete._id) {
        await deleteView(viewToDelete._id);
      }
    }
    if (data) {
      await deleteBlogArticle(data[i]._id);
      data[i].image && (await deletePhoto(data[i].image!.url));
      data[i].author.image && (await deletePhoto(data[i].author.image!.url));
    }

    setArticle(0);
    setIsNewArticle(true);
    handleSubmit();
  };

  const deactivateArticle = async (i: number) => {
    if (data) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const disabledArticle = data[i];
      disabledArticle.disabled = true;
      await updateArticle(disabledArticle);
    }
  };

  const publishArticle = async (i: number) => {
    if (data) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const publishArticle = data[i];
      publishArticle.disabled = false;
      await updateArticle(publishArticle);
    }
  };

  const toggleEditPost = (i: number) => {
    if (isNewArticle) {
      setIsNewArticle(false);
      setArticle(i);
      window.scrollTo(0, 0);
    } else {
      setIsNewArticle(true);
      setArticle(0);
    }
  };

  const handleDragEnd = async (param: DropResult) => {
    const srcInd = param.source.index;
    const desInd: number | undefined = param.destination?.index;
    const swapped = data;
    swapped &&
      typeof desInd === "number" &&
      swapped.splice(desInd, 0, swapped.splice(srcInd, 1)[0]);
    typeof desInd === "number" &&
      (await swapElements({ srcInd, desInd })) &&
      queryClient.setQueryData(queryKeys.getBlogArticles, swapped);
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

  return data && data.length ? (
    <AdminPaddedBlock>
      <Styles.Wrapper>
        <AdminSubTitle>Published articles</AdminSubTitle>
        <DragDropContext onDragEnd={(param) => handleDragEnd(param)}>
          <Droppable droppableId={"droppable-1"}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {data.map((item: IArticle, i) =>
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
    </AdminPaddedBlock>
  ) : (
    <Styles.EmptyArticles>No articles</Styles.EmptyArticles>
  );
};

export default PublishedArticles;
