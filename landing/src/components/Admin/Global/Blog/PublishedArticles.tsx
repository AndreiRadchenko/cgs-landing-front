import React, { FC, useRef, useState } from "react";
import { AdminSubTitle } from "../../../../styles/AdminBlogPage";
import BlogItem from "../../../BlogItem/BlogItem";
import ChangeIconImg from "../../../../../public/ChangeIcon.svg";

import * as Styles from "../../../../styles/BlogPublishedArticles.styled";
import { useFormikContext } from "formik";
import {
  IArticle,
  IBlogResponse,
} from "../../../../types/Admin/Response.types";

interface IArticles {
  setIsNewArticle: React.Dispatch<React.SetStateAction<boolean>>;
  setArticle: React.Dispatch<React.SetStateAction<number>>;
}

const PublishedArticles: FC<IArticles> = ({ setIsNewArticle, setArticle }) => {
  const [dragging, setDragging] = useState(false);
  const { values } = useFormikContext<IBlogResponse>();
  const [isActiveEdit, setIsActiveEdit] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const dragNode = useRef<EventTarget | null>();
  const dragItem = useRef<number | null>();

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, i: number) => {
    document.body.style.cursor = "grab";
    dragItem.current = i;
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setDragging(true);
  };

  const handleDragEnd = () => {
    setDragging(false);
    dragNode.current?.removeEventListener("dragend", handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
    document.body.style.cursor = "default";
  };

  const handleDragEnter = async (
    e: React.DragEvent<HTMLDivElement>,
    i: number
  ) => {
    const currentItem = dragItem.current as number;
    if (e.target !== dragNode.current) {
      values.articles.splice(i, 0, values.articles.splice(currentItem, 1)[0]);
    }
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
      {values.articles.map((item: IArticle, i) => (
        <div
          key={i}
          draggable
          onDragEnd={handleDragEnd}
          onDragStart={(e) => handleDragStart(e, i)}
          onDragEnter={dragging ? (e) => handleDragEnter(e, i) : () => null}
        >
          <BlogItem image={item.banner.url} isAdmin={true} {...item}>
            <Styles.ChangeIcon
              src={ChangeIconImg.src}
              onClick={() => toggleEditPost(item, i)}
            />
            <Styles.DeleteButton>delete articles</Styles.DeleteButton>
          </BlogItem>
        </div>
      ))}
    </Styles.Wrapper>
  );
};

export default PublishedArticles;
