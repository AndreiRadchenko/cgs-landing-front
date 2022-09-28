import React, { FC, useState } from "react";
import * as Styled from "../../../../styles/AdminPage";
import { useFormikContext } from "formik";
import { IBlogPageResponse } from "../../../../types/Admin/Response.types";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { queryKeys } from "../../../../consts/queryKeys";
import { adminBlogService } from "../../../../services/adminBlogPage";
import MetaTagsBlock from "../../MetaTagsBlock";
import { IBlogProps } from "../AdminBlogMainContent";
import BlogForm from "./BlogForm";
import PublishedArticles from "./PublishedArticles";

interface IArticles {
  isNewArticle: boolean;
  setIsNewArticle: (val: boolean) => void;
  article: number;
  setArticle: (val: number) => void;
  refetch?: () => Promise<IBlogProps>;
}

const ContentBlock: FC<IArticles> = ({
  isNewArticle,
  setArticle,
  article,
  setIsNewArticle,
}) => {
  const queryClient = useQueryClient();
  const { values, setFieldValue } = useFormikContext<IBlogPageResponse>();
  const views = useQuery(queryKeys.views, () => adminBlogService.getViews());
  const [disabled, setDisabled] = useState<boolean>(false);

  const { mutateAsync: updateBlogPageData } = useMutation(
    queryKeys.updateBlogPage,
    (dataToUpdate: IBlogPageResponse) =>
      adminBlogService.updateBlogPageData(dataToUpdate),
    {
      onSuccess() {
        queryClient.invalidateQueries([queryKeys.getBlogPage]);
      },
    }
  );

  const { data: articles } = useQuery(queryKeys.getBlogArticles, () =>
    adminBlogService.getArticles()
  );

  const updatePageData = () => {
    updateBlogPageData(values);
  };

  return (
    <div>
      {/* <PublishedArticles
        setArticle={setArticle}
        isNewArticle={isNewArticle}
        setIsNewArticle={setIsNewArticle}
        article={article}
      /> */}
      <MetaTagsBlock theme="dark" />
      <Styled.AdminBigButton type={"submit"} onClick={updatePageData}>
        {"Update meta data"}
      </Styled.AdminBigButton>
    </div>
  );
};

export default ContentBlock;
