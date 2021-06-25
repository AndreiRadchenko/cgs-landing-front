import { useState } from "react";
import { createAdminData, updateAdminData } from "services/api/adminApi";
import Images from "../Images/Images";

import { IFeaturedTechnology } from "../types";
import * as Styled from "../Form.styles";

const FeaturedTechnologyForm: React.FC<{
  featuredTechnology?: IFeaturedTechnology | undefined;
  close: Function;
}> = ({ featuredTechnology, close }) => {
  const [name, setName] = useState(featuredTechnology?.name || "");
  const [label, setLabel] = useState(featuredTechnology?.label || "");
  const [text, setCategory] = useState(featuredTechnology?.text || "");
  const [imageFileId, setImageFileId] = useState(
    featuredTechnology?.imageFile?.id || ""
  );

  const getImageId = (id) => {
    setImageFileId(id);
  };
  const closeWindow = () => close();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newFeaturedTechnology = {
      name,
      text,
      imageFileId: imageFileId,
      label: label,
    };

    if (featuredTechnology) {
      updateAdminData(
        "featuredTechnology",
        featuredTechnology.id,
        newFeaturedTechnology
      ).then(closeWindow);
    } else if (!featuredTechnology) {
      createAdminData("featuredTechnology", newFeaturedTechnology).then(
        closeWindow
      );
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={handleSubmit}>
        {featuredTechnology ? (
          <h2>Edit featured technology</h2>
        ) : (
          <h2>Create new featured technology</h2>
        )}
        <Styled.Label>
          <span> Name:</span>
          <Styled.AdminTextInput
            type="text"
            value={name}
            placeholder="Write name here"
            onChange={({ target: { value } }) => setName(value)}
          />
        </Styled.Label>
        <Styled.Label>
          <span> Text:</span>
          <Styled.AdminTextAreaWrapper>
            <Styled.AdminTextArea
              value={text}
              placeholder="Write some text here"
              onChange={({ target: { value } }) => setCategory(value)}
            />
          </Styled.AdminTextAreaWrapper>
        </Styled.Label>
        <Styled.Label>
          <span> Label:</span>
          <Styled.AdminTextInput
            type="text"
            value={label}
            placeholder="Write Label here"
            onChange={({ target: { value } }) => setLabel(value)}
          />
        </Styled.Label>
        <Styled.PicturesWrapper>
          <span>Pictures:</span>
          <Images
            activeImage={featuredTechnology?.imageFile}
            getImageId={getImageId}
          />
        </Styled.PicturesWrapper>

        <Styled.ButtonWrapper>
          <Styled.Button
            type="submit"
            empty={true}
            disabled={!(name && text && imageFileId)}
          >
            {featuredTechnology ? "Save" : "Create"}
          </Styled.Button>
          <Styled.Button type="button" onClick={closeWindow}>
            Cancel
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default FeaturedTechnologyForm;
