import React, { FC } from "react";
import { AdminSubTitle } from "../../../../styles/AdminBlogPage";
import BlogItem from "../../../BlogItem/BlogItem";
import ChangeIconImg from "../../../../../public/ChangeIcon.svg";
import { adminGlobalService } from "../../../../services/adminHomePage";

import * as Styles from "../../../../styles/BlogPublishedArticles.styled";
import { useFormikContext } from "formik";
import {
  IArticle,
  ISitemapData,
  ISwapData,
} from "../../../../types/Admin/Response.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../../consts/queryKeys";
import { adminBlogService } from "../../../../services/adminBlogPage";
import close from "../../../../../public/bigClose.svg";
import { AdminPaddedBlock } from "../../../../styles/AdminPage";
import { adminSitemapService } from "../../../../services/adminSitemapPage";
import SortableList, { SortableItem } from "react-easy-sort";
import { IArticleItem, IArticles } from "../../../../types/Admin/Blog.types";
import { formatsDateWithTime } from "../../../../utils/formatsDateWithTime";

const PublishedArticles: FC<IArticles> = ({
  setIsNewArticle,
  setArticle,
  isNewArticle,
  article,
  data,
  sitemap,
  scrollRef,
}) => {
  const { handleSubmit } = useFormikContext<IArticle>();
  const queryClient = useQueryClient();
  const { mutateAsync: deleteBlogArticle } = useMutation(
    [queryKeys.deleteArticle],
    (id: string) => adminBlogService.deleteByUrl(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getBlogArticles]);
      },
    }
  );

  const { mutateAsync: updateArticle } = useMutation(
    [queryKeys.deleteArticle],
    (article: IArticle) => adminBlogService.updateById(article),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getBlogArticles]);
      },
    }
  );

  const { mutateAsync: updateSitemap } = useMutation(
    [queryKeys.updateSitemap],
    (updatedSitemap: ISitemapData) =>
      adminSitemapService.updateSitemapData(updatedSitemap),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getSitemapData]);
      },
    }
  );

  const { mutateAsync: deletePhoto } = useMutation((url: string) =>
    adminGlobalService.deleteImage(url)
  );

  const { mutateAsync: swapElements } = useMutation(
    [queryKeys.swapArticles],
    (dataToUpdate: ISwapData) => adminBlogService.swapTwoElements(dataToUpdate),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getBlogArticles]);
      },
    }
  );

  const deleteArticle = async (i: number) => {
    if (data) {
      if (data[i].url !== "" && sitemap) {
        const updatedSitemap = sitemap;
        const index = updatedSitemap?.includedPages.indexOf(
          `blog/${data[i].url}`
        );
        index > -1 && updatedSitemap?.includedPages.splice(index, 1);
        await updateSitemap(updatedSitemap);
      }
      await deleteBlogArticle(data[i]._id);
      data[i].image && (await deletePhoto(data[i].image!.url));
      data[i].author.image && (await deletePhoto(data[i].author.image!.url));
    }

    setArticle(0);
    setIsNewArticle(true);
    handleSubmit();
  };

  const deactivateArticle = async (i: number, isPublished: boolean) => {
    if (data && isPublished) {
      const disabledArticle = data[i];
      disabledArticle.disabled = true;
      disabledArticle.publishedDate = "";
      disabledArticle.scheduleArticle = "";

      await updateArticle(disabledArticle);
    }
  };

  const publishArticle = async (i: number) => {
    if (data) {
      const publishArticle = data[i];
      publishArticle.publishedDate = formatsDateWithTime();
      publishArticle.scheduleArticle = "";
      publishArticle.draft = false;
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

  const handleDragEnd = async (oldIndex: number, newIndex: number) => {
    const swapped = data;
    swapped && swapped.splice(newIndex, 0, swapped.splice(oldIndex, 1)[0]);

    (await swapElements({ srcInd: oldIndex, desInd: newIndex })) &&
      queryClient.setQueryData([queryKeys.getBlogArticles], swapped);
  };

  const ArticleItem = ({ item, i }: IArticleItem) => {
    const isScheduledDateExpired = item.scheduleArticle
      ? new Date() > new Date(item.scheduleArticle)
      : true;

    return (
      <BlogItem isAdmin item={item}>
        {item.draft && <Styles.DraftMark>DRAFT</Styles.DraftMark>}
        <Styles.ChangeIconWrapper onClick={() => toggleEditPost(i)}>
          <Styles.ChangeIcon
            src={
              isNewArticle
                ? ChangeIconImg.src
                : !isNewArticle && article === i
                ? close.src
                : ""
            }
          />
        </Styles.ChangeIconWrapper>
        <Styles.ButtonWrapper>
          <Styles.DeleteButton onClick={() => deleteArticle(i)}>
            delete article
          </Styles.DeleteButton>
          <Styles.InternalButtonWrapper>
            {isScheduledDateExpired && item.publishedDate && !item.draft && (
              <Styles.TimeStamp>
                <strong>Published </strong>
                {item.publishedDate}
              </Styles.TimeStamp>
            )}
            {!isScheduledDateExpired && item.scheduleArticle && (
              <Styles.TimeStamp>
                <strong>Scheduled </strong>
                {formatsDateWithTime(item.scheduleArticle)}
              </Styles.TimeStamp>
            )}
            <Styles.DeactivateButton
              disabled={!isScheduledDateExpired || item.draft || item.disabled}
              onClick={() => deactivateArticle(i, isScheduledDateExpired)}
            >
              Deactivate
            </Styles.DeactivateButton>
            <Styles.PublishButton
              disabled={!!item.publishedDate}
              onClick={() => publishArticle(i)}
            >
              <p>{item.publishedDate ? "Published" : "Publish now"}</p>
            </Styles.PublishButton>
          </Styles.InternalButtonWrapper>
        </Styles.ButtonWrapper>
      </BlogItem>
    );
  };

  return data && data.length ? (
    <AdminPaddedBlock>
      <Styles.Wrapper ref={scrollRef}>
        <AdminSubTitle>Published articles</AdminSubTitle>
        <SortableList
          onSortEnd={handleDragEnd}
          className="list"
          draggedItemClassName="dragged"
        >
          {data.map((item, index) => (
            <SortableItem key={index}>
              <div>
                <ArticleItem item={item} i={index} />
              </div>
            </SortableItem>
          ))}
        </SortableList>
      </Styles.Wrapper>
    </AdminPaddedBlock>
  ) : (
    <Styles.EmptyArticles>No articles</Styles.EmptyArticles>
  );
};

export default PublishedArticles;
