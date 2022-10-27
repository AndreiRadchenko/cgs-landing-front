import React, { FC, RefObject } from "react";
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
  IView,
} from "../../../../types/Admin/Response.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../../consts/queryKeys";
import { adminBlogService } from "../../../../services/adminBlogPage";
import close from "../../../../../public/bigClose.svg";
import { AdminPaddedBlock } from "../../../../styles/AdminPage";
import { adminSitemapService } from "../../../../services/adminSitemapPage";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { IDragProps } from "../../LogosBlock";

interface IArticles {
  setIsNewArticle: (val: boolean) => void;
  setArticle: (val: number) => void;
  article: number;
  isNewArticle: boolean;
  data?: IArticle[];
  views?: IView[];
  disabled?: boolean;
  sitemap?: ISitemapData | void;
  scrollRef: RefObject<HTMLDivElement>;
}

interface IArticleItem {
  item: IArticle;
  i: number;
}

interface IDragArticleContainerProps {
  items: IArticle[];
}

interface IDragItemProps {
  item: IArticle;
  index: number;
}

const PublishedArticles: FC<IArticles> = ({
  setIsNewArticle,
  setArticle,
  isNewArticle,
  article,
  data,
  views,
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

  const { mutateAsync: deleteView } = useMutation(
    [queryKeys.deleteArticle],
    (id: string) => adminBlogService.deleteViewsById(id)
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
    (dataToUpdate: ISwapData) => adminBlogService.swapTwoElements(dataToUpdate)
  );

  const deleteArticle = async (i: number) => {
    if (views && data) {
      const viewToDelete = views.filter(
        (view) => view.articleUrl === data[i].url
      );
      if (viewToDelete && Array.isArray(viewToDelete)) {
        viewToDelete.map(
          async (view) => view._id && (await deleteView(view._id))
        );
      }
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

  const handleDragEnd = async ({ oldIndex, newIndex }: IDragProps) => {
    const srcInd = oldIndex;
    const desInd: number | undefined = newIndex;
    const swapped = data;
    swapped &&
      typeof desInd === "number" &&
      swapped.splice(desInd, 0, swapped.splice(srcInd, 1)[0]);
    typeof desInd === "number" &&
      (await swapElements({ srcInd, desInd })) &&
      queryClient.setQueryData([queryKeys.getBlogArticles], swapped);
  };

  const SortableListItem = SortableElement<IDragItemProps>(
    ({ item, index }: IDragItemProps) => {
      return (
        <div>
          <ArticleItem item={item} i={index} />
        </div>
      );
    }
  );

  const SortableList = SortableContainer<IDragArticleContainerProps>(
    ({ items }: IDragArticleContainerProps) => {
      return (
        <div>
          {items.map((item, index) => {
            return <SortableListItem item={item} key={index} index={index} />;
          })}
        </div>
      );
    }
  );

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
      <Styles.Wrapper ref={scrollRef}>
        <AdminSubTitle>Published articles</AdminSubTitle>
        <SortableList items={data} onSortEnd={handleDragEnd} />
      </Styles.Wrapper>
    </AdminPaddedBlock>
  ) : (
    <Styles.EmptyArticles>No articles</Styles.EmptyArticles>
  );
};

export default PublishedArticles;
