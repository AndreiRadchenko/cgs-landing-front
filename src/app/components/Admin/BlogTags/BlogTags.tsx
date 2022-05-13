import { useState, useEffect } from "react";

import {
  getAdminData,
  createAdminData,
  deleteAdminData,
} from "../../../../services/api/adminApi";

import { ITag } from "../types";

import { Option } from "./Option";

import * as Styled from "./BlogTags.styles";

interface OptionType {
  label: string;
  value: string;
}

const makeTagOption = (tag: ITag): OptionType => ({
  label: tag.name,
  value: tag.id,
});

export interface BlogTagsProps {
  tagIds: string[];
  setTagIds: Function;
}

export const BlogTags: React.FC<BlogTagsProps> = ({ tagIds, setTagIds }) => {
  const [tags, setTags] = useState<ITag[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [tagName, setTagName] = useState("");
  const [tagOptions, setTagOptions] = useState<OptionType[]>([]);
  const [selectedTagOptions, setSelectedTagOptions] = useState<OptionType[]>([]);

  useEffect(() => {
    const fetchAllTags = async () => {
      setIsLoading(true);
  
      const newTags = await getAdminData("blogTag");
      
      setTags(newTags);
  
      setIsLoading(false);
    };

    fetchAllTags();
  }, []);

  useEffect(() => {
    setTagOptions(tags.map(makeTagOption));
  }, [tags]);

  useEffect(() => {
    if (tags.length === 0) {
      return;
    }

    const newSelectedTagOptions: OptionType[] = [];

    for (const tagId of tagIds) {
      const tag = tags.find(({ id }) => id === tagId);

      if (!tag) {
        continue;
      }

      newSelectedTagOptions.push(makeTagOption(tag));
    }

    setSelectedTagOptions(newSelectedTagOptions);
  }, [tags, tagIds]);

  const createTag = async () => {
    setIsLoading(true);

    const payload: Omit<ITag, "id"> = {
      name: tagName,
    };

    const newTag = await createAdminData("blogTag", payload);

    setTags([...tags, newTag]);
    setTagIds([...tagIds, newTag.id]);

    setIsLoading(false);
  };

  const deleteTag = async (id: any) => {
    setIsLoading(true);

    await deleteAdminData("blogTag", id);

    setTags(tags.filter((tag) => tag.id !== id));
    setTagIds(tagIds.filter((tagId) => tagId !== id));

    setIsLoading(false);
  };

  return (
    <Styled.Select
      components={{
        Option: (props: any) => (
          <Option deleteTag={deleteTag} {...props} />
        ),
      }}
      isMulti={true}
      isClearable={true}
      isDisabled={isLoading}
      closeMenuOnSelect={false}
      options={tagOptions}
      value={selectedTagOptions}
      inputValue={tagName}
      onChange={(options: any) => {
        setTagIds(options.map((option) => option.value));
      }}
      onInputChange={setTagName}
      onCreateOption={createTag}
    />
  );
};