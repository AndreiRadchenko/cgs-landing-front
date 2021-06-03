import { useState } from "react";
import { createAdminData, updateAdminData } from "services/api/adminApi";
import Images from "../Images/Images";

import { IFeaturedTechnology } from "../types";
import * as Styled from "../Form.styles";

const FeaturedTechologyForm: React.FC<{
  featuredTechnology?: IFeaturedTechnology | undefined;
  close: Function;
}> = ({ featuredTechnology, close }) => {
  const [name, setName] = useState(featuredTechnology?.name || "");
  const [text, setCategory] = useState(featuredTechnology?.text || "");
  const [imageFileId, setImageFileId] = useState(
    featuredTechnology?.imageFile.id || ""
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newFeaturedTechnology = {
      name,
      text,
      imageFileId: imageFileId,
    };

    featuredTechnology
      ? updateAdminData(
          "featuredTechnology",
          featuredTechnology.id,
          newFeaturedTechnology
        ).then(() => close())
      : createAdminData("featuredTechnology", newFeaturedTechnology).then(() =>
          close()
        );
  };

  const getImageId = (id) => {
    setImageFileId(id);
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
          <span> Featured Technology Name:</span>
          <Styled.AdminTextInput
            className="form__title"
            type="text"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
        </Styled.Label>
        <Styled.Label>
          <span> Featured Technology text:</span>
          <Styled.AdminTextArea
            className="form__text"
            value={text}
            onChange={({ target: { value } }) => setCategory(value)}
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
            disabled={!(name && text && imageFileId)}
          >
            {featuredTechnology ? "Save" : "Create"}
          </Styled.Button>
          <Styled.Button type="button" onClick={() => close()}>
            Cancel
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default FeaturedTechologyForm;
