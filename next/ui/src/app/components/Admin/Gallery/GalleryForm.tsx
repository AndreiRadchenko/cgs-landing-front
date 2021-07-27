import React, { useState } from "react";
import { createAdminData, updateAdminData } from "services/api/adminApi";
import Images from "../Images/Images";
import { IGallery, IIconFile } from "../types";
import * as Styled from "../Form.styles";
import { slides } from "app/img";
import { Button } from "app/components/shared/LinkButton/Button.style";
import { v4 } from "uuid";

import TextEditor from "../TextEditor/TextEditor";

const GalleryForm: React.FC<{
  gallery?: IGallery | undefined;
  close: Function;
}> = ({ gallery, close }) => {
  const [title, setTitle] = useState(gallery?.title || "");
  const [text, setText] = useState(gallery?.text || "");
  const [showOnHomePage, setShowOnHomePage] = useState(gallery?.showOnHomePage || false);
  const [editContent, setEditContent] = useState(false);

  const [imageFileIds, setImageFileIds] = useState<string[]>(() =>
    gallery?.imageFiles.map((image) => image.id) ?? []
  );

  const imagesArray: JSX.Element[] = [];

  for (let i = 0; i < 4; i += 1) {
    const image = { id: imageFileIds[i] } as IIconFile;
    const setImageFileId = (id) => {
      setImageFileIds((prevState) => {
        const nextState = [...prevState];
        nextState[i] = id;
        return nextState;
      });
    };
    imagesArray.push(
      <React.Fragment key={v4()}>
        <span>Picture {i + 1}:</span>
        <Styled.PicturesWrapper>
          <Images activeImage={image} getImageId={setImageFileId} />
        </Styled.PicturesWrapper>
      </React.Fragment>
    );
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newGallery = {
      title,
      text,
      showOnHomePage,
      imageFileIds,
    };
    gallery
      ? updateAdminData("gallery", gallery?.id, newGallery).then(() => close())
      : createAdminData("gallery", newGallery).then(() => close());
  };

  const closeWindow = () => close();

  return (
    <Styled.Wrapper>
      {editContent ? (
        <TextEditor content={text} setArticleContent={setText} setIsEditorOpen={setEditContent} />
      ) : (
        <Styled.Form onSubmit={handleSubmit}>
          {gallery ? <h2>Edit Gallery</h2> : <h2>Create new gallery</h2>}
          <Styled.Label>
            <span>Gallery title:</span>
            <Styled.AdminTextInput
              type="text"
              value={title}
              onChange={({ target: { value } }) => setTitle(value)}
              placeholder="Write title here"
            />
          </Styled.Label>
          <Styled.Label>
            <span>Gallery text</span>
            <Styled.ContentContainerWrapper>
              <Styled.ContentWrapper>
                <Styled.Content dangerouslySetInnerHTML={{ __html: text }} />
              </Styled.ContentWrapper>
            </Styled.ContentContainerWrapper>
          </Styled.Label>
          <Styled.Label>
            <span>Content:</span>
            <Button type="button" onClick={() => setEditContent(true)}>
              Edit content
            </Button>
          </Styled.Label>
          <Styled.Label>
            <span>Show on page:</span>
            <Styled.SingleCheckboxContainer>
              <Styled.CheckboxLabel position="static">
                <input
                  type="checkbox"
                  name="TechOption"
                  checked={showOnHomePage}
                  onChange={({ target: { checked } }) => setShowOnHomePage(checked)}
                />
                <Styled.CustomCheckbox selected={showOnHomePage}>
                  <img src={slides.Check} alt="checkbox" />
                </Styled.CustomCheckbox>
              </Styled.CheckboxLabel>
            </Styled.SingleCheckboxContainer>
          </Styled.Label>
          <Styled.Label>{imagesArray}</Styled.Label>
          <Styled.ButtonWrapper>
            <Styled.Button
              empty={true}
              type="submit"
              disabled={!(title && text && imageFileIds.length > 0)}
            >
              {gallery ? "Save" : "Create"}
            </Styled.Button>
            <Styled.Button type="button" onClick={closeWindow}>
              Cancel
            </Styled.Button>
          </Styled.ButtonWrapper>
        </Styled.Form>
      )}
    </Styled.Wrapper>
  );
};

export default GalleryForm;
