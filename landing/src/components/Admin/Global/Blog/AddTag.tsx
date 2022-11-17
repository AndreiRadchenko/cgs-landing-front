import React, { useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../../consts/queryKeys";
import { adminBlogService } from "../../../../services/adminBlogPage";
import { AdminInput } from "../../../../styles/AdminPage";
import * as Styled from "../../../../styles/BlogTags.styled";
import { IBlogPageResponse } from "../../../../types/Admin/Response.types";

interface IAddTag {
  possibleTags: string[];
}

const AddTag = ({ possibleTags }: IAddTag) => {
  const [inputVal, setInputVal] = useState<string>("");
  const ref = useRef<HTMLTextAreaElement>(null);
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<IBlogPageResponse | undefined>([
    queryKeys.getBlogPage,
  ]);

  const { mutateAsync: updateBlogPageData } = useMutation(
    [queryKeys.updateBlogPage],
    (dataToUpdate: IBlogPageResponse) =>
      adminBlogService.updateBlogPageData(dataToUpdate),
    {
      onSuccess() {
        queryClient.invalidateQueries([queryKeys.getBlogPage]);
      },
    }
  );

  const handleClick = () => {
    if (
      ref.current &&
      inputVal.length > 0 &&
      !possibleTags.includes(inputVal)
    ) {
      const newTags = possibleTags;
      newTags.push(inputVal);
      setInputVal("");
      ref.current.value = "";
      data && updateBlogPageData({ possibleTags: newTags, meta: data.meta });
    }
  };

  const handleChange = () => {
    if (ref.current) {
      setInputVal(ref.current.value);
    }
  };
  return (
    <Styled.TagInputWrapper>
      <AdminInput
        onChange={handleChange}
        ref={ref}
        style={{ marginBottom: "0px" }}
        placeholder="Add new tag"
      />
      <Styled.TagInputSubmit onClick={handleClick}>+</Styled.TagInputSubmit>
    </Styled.TagInputWrapper>
  );
};

export default AddTag;
