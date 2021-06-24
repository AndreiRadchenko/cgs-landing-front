import { useEffect, useState } from "react";
import { deleteAdminData, getAdminData } from "services/api/adminApi";
import { IIconFile } from "../types";
import ImageUploader from "../Images/ImageUploader";
import { Wrapper, Title } from "../SectionLayout/sectionLayout.style";
import * as Styled from "./ImagesPage.style";
import { slides } from "app/img";
import { getSpinner } from 'helpers/spinner';

const ImagesPage: React.FC<{}> = () => {
  const [images, setImages] = useState<IIconFile[]>([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isUpdated) {
      getImages();
    }

    setIsUpdated(false);
  }, [isUpdated]);

  const getImages = async () => {
    setIsLoading(true);

    const images = await getAdminData("file");

    setImages(images);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  const deleteImage = (id: string) => {
    deleteAdminData("file", id).then(() => setIsUpdated(true));
  };

  const renderList = () => (
    <Styled.List>
      {images.map((image) => (
        <li key={image.id}>
          <img src={image?.s3FileUrl} width="120px"></img>
          <Styled.DeleteButton
            type="button"
            onClick={() => {
              deleteImage(image?.id);
            }}
          >
            <img src={slides?.deleteIcon} alt="delete button" />
          </Styled.DeleteButton>
        </li>
      ))}
    </Styled.List>
  );

  return (
    <>
      <Wrapper>
        <Title>Images</Title>
        <ImageUploader setIsUploaded={setIsUpdated} />
        {isLoading ? getSpinner() : renderList()}
      </Wrapper>
    </>
  );
};

export default ImagesPage;
