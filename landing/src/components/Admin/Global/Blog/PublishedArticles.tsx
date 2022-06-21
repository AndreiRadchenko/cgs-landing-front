import React, { FC } from "react";
import { AdminSubTitle } from "../../../../styles/AdminBlogPage";
import BlogItem from "../../../BlogItem/BlogItem";
import ChangeIconImg from "../../../../../public/ChangeIcon.svg";

import * as Styles from "../../../../styles/BlogPublishedArticles.styled";
import { useFormikContext } from "formik";
import {
  IArticle,
  IBlogResponse,
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
}

const PublishedArticles: FC<IArticles> = ({
  setIsNewArticle,
  setArticle,
  isNewArticle,
  article,
  data,
}) => {
  const { values, handleSubmit } = useFormikContext<IBlogResponse>();
  // const [editIndex, setEditIndex] = useState<number | null>(null);

  const { mutateAsync } = useMutation(
    queryKeys.deleteArticle,
    (dataToUpdate: IBlogResponse) =>
      adminBlogService.updateBlogPage(dataToUpdate)
  );

  const deleteArticle = async (i: number) => {
    values.articles.splice(i, 1);
    await mutateAsync(values);
    setArticle(0);
    setIsNewArticle(true);
    handleSubmit();
  };

  console.log("values", values.articles[article].title);
  console.log("data", data.articles[article].title);

  const toggleEditPost = (item: IArticle, i: number) => {
    if (isNewArticle) {
      setIsNewArticle(false);
      setArticle(i);
    } else if (!isNewArticle && article !== i) {
      values.articles[article] = data.articles[article];
      setArticle(i);
    } else {
      values.articles[article] = data.articles[article];
      setArticle(0);
      setIsNewArticle(true);
    }
  };

  const handleDragEnd = (param: DropResult) => {
    const srcIndex = param.source.index;
    const desIndex: number | undefined = param.destination?.index;
    if (typeof desIndex === "number") {
      if (srcIndex < article && desIndex >= article) {
        setArticle(article - 1);
      } else if (srcIndex > article && desIndex <= article) {
        setArticle(article + 1);
      } else if (srcIndex === article) {
        setArticle(desIndex);
      }
      values.articles.splice(
        desIndex,
        0,
        values.articles.splice(srcIndex, 1)[0]
      );
    }
  };

  return (
    <Styles.Wrapper>
      <AdminSubTitle>Published articles</AdminSubTitle>
      <DragDropContext onDragEnd={(param) => handleDragEnd(param)}>
        <Droppable droppableId={"droppable-1"}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {values.articles.map((item: IArticle, i) => (
                <Draggable
                  draggableId={"draggable-" + i}
                  index={i}
                  key={`${i}${item.title}`}
                >
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
                            !isNewArticle && article === i
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
