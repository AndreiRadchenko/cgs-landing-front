import { useEffect, useState } from "react";
import {
  createAdminData,
  deleteAdminData,
  getAdminData,
} from "services/api/adminApi";
import { ITag } from "../types";

const BlogTags: React.FC<{ currentTags: ITag[]; getTags: Function }> = ({
  currentTags,
  getTags,
}) => {
  const [tags, setTags] = useState<ITag[]>([]);
  const [tagIds, setTagIds] = useState(currentTags?.map((el) => el.id) || []);
  const [newTag, setNewTag] = useState("");

  useEffect(() => {
    getAllTags();
  }, []);

  useEffect(() => {
    getTags(tagIds);
  }, [tagIds]);

  const getAllTags = async () => {
    const tags = await getAdminData("blogTag");
    setTags(tags);
  };

  const addTag = async () => {
    createAdminData("blogTag", { name: newTag }).then(() => {
      getAllTags();
      setNewTag("");
    });
  };

  const deleteTag = (id) => {
    deleteAdminData("blogTag", id).then(() => {
      getAllTags();
    });
  };

  const handleTagChange = (event, id) => {
    if (event.target.checked) {
      setTagIds([...tagIds, id]);
    }

    if (!event.target.checked) {
      setTagIds(tagIds.filter((tech) => tech !== id));
    }
  };

  return (
    <>
      {tags.map((tag) => (
        <>
          <label>
            {tag.name}
            <input
              type="checkbox"
              name="tagOption"
              checked={tagIds.some((el) => el === tag.id)}
              onChange={(event) => handleTagChange(event, tag.id)}
            />
          </label>
          <button type="button" onClick={() => deleteTag(tag.id)}>
            Delete Tag
          </button>
        </>
      ))}
      <input
        placeholder="Tag Name"
        type="text"
        onChange={({ target: { value } }) => setNewTag(value)}
      />
      <button onClick={addTag} type="button">
        Add new Tag
      </button>
    </>
  );
};

export default BlogTags;
