import React, { FC, useState } from "react";
import { AdminSubTitle } from "../../../../styles/AdminBlogPage";
import BlogItem from "../../../BlogItem/BlogItem";
import ChangeIconImg from "../../../../../public/ChangeIcon.svg";

import * as Styles from "../../../../styles/BlogPublishedArticles.styled";
import { useFormikContext } from "formik";
import {
  IArticle,
  IBlogResponse,
} from "../../../../types/Admin/Response.types";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useMutation } from "react-query";
import { queryKeys } from "../../../../consts/queryKeys";
import { adminBlogService } from "../../../../services/adminBlogPage";
import close from "../../../../../public/bigClose.svg";
import edit from "../../../../../public/editIcon.svg";
import Image from "next/image";

interface IArticles {
  setIsNewArticle: React.Dispatch<React.SetStateAction<boolean>>;
  setArticle: React.Dispatch<React.SetStateAction<number>>;
  article: number;
  isNewArticle: boolean;
}

const PublishedArticles: FC<IArticles> = ({
  setIsNewArticle,
  setArticle,
  isNewArticle,
  article,
}) => {
  const { values, handleSubmit } = useFormikContext<IBlogResponse>();
  const [isActiveEdit, setIsActiveEdit] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const { mutateAsync } = useMutation(
    queryKeys.deleteArticle,
    (dataToUpdate: IBlogResponse) =>
      adminBlogService.updateBlogPage(dataToUpdate)
  );

  const deleteArticle = (i: number) => {
    values.articles.splice(i, 1);
    mutateAsync(values);
    setArticle(0);
    handleSubmit();
  };

  const toggleEditPost = (item: IArticle, i: number) => {
    if (!isActiveEdit && !currentIndex) {
      setIsActiveEdit(true);
      setCurrentIndex(i);
      setIsNewArticle(false);
      setArticle(i);
    } else if (isActiveEdit && currentIndex !== i) {
      setCurrentIndex(i);
      setArticle(i);
    } else {
      setCurrentIndex(null);
      setIsActiveEdit(false);
      setArticle(0);
      setIsNewArticle(true);
    }
  };

  return (
    <Styles.Wrapper>
      <AdminSubTitle>Published articles</AdminSubTitle>
      <DragDropContext
        onDragEnd={(param) => {
          const srcIndex = param.source.index;
          const desIndex: number | undefined = param.destination?.index;
          if (typeof desIndex === "number") {
            values.articles.splice(
              desIndex,
              0,
              values.articles.splice(srcIndex, 1)[0]
            );
          }
        }}
      >
        <Droppable droppableId={"droppable-1"}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {values.articles.map((item: IArticle, i) => (
                <Draggable draggableId={"draggable-" + i} index={i} key={`${i}${item.title}`}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
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
                              : article === i
                              ? close.src
                              : ChangeIconImg.src
                          }
                          onClick={() => toggleEditPost(item, i)}
                        />
                        <Styles.DeleteButton onClick={() => deleteArticle(i)}>
                          delete articles
                        </Styles.DeleteButton>
                      </BlogItem>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Styles.Wrapper>
  );
};

export default PublishedArticles;
