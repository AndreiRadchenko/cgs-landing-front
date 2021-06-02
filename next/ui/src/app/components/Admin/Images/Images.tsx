import { useEffect, useState } from "react";
import { getAdminData } from "services/api/adminApi";
import { IIconFile } from "../types";
import ImageUploader from "../Images/ImageUploader";
import * as Styled from "./Images.style";

const Images: React.FC<{
  activeImage?: IIconFile | undefined;
  getImageId: Function;
}> = ({ activeImage, getImageId }) => {
  const [images, setImages] = useState<IIconFile[]>([]);
  const [imageID, setImageID] = useState(activeImage?.id || "");
  const [isUploaded, setIsUploaded] = useState(false);

  useEffect(() => {
    getImages();
  }, [isUploaded]);

  const getImages = async () => {
    const images = await getAdminData("file");
    setImages(images);
  };

  const handleImageChange = (id: string) => {
    setImageID(id);
    getImageId(id);
  };

  return (
    <Styled.Wrapper>
      <Styled.ImagesWrapper>
        {images.map((image) => (
          <label>
            <input
              type="radio"
              name="imageOption"
              checked={imageID === image.id}
              onChange={() => handleImageChange(image.id)}
            />
            <img src={image.s3FileUrl}></img>
          </label>
        ))}
      </Styled.ImagesWrapper>
      <ImageUploader setIsUploaded={setIsUploaded}></ImageUploader>
    </Styled.Wrapper>
  );
};

export default Images;
