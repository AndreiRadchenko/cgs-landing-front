import { useEffect, useState } from "react";
import { deleteAdminData, getAdminData } from "services/api/adminApi";
import { IIconFile } from "../types";
import ImageUploader from "../Images/ImageUploader";

const ImagesPage: React.FC<{}> = () => {
  const [images, setImages] = useState<IIconFile[]>([]);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    if (isUpdated) {
      getImages();
    }
    setIsUpdated(false);
  }, [isUpdated]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const images = await getAdminData("file");
    setImages(images);
  };

  const deleteImage = (id: string) => {
    deleteAdminData("file", id).then(() => setIsUpdated(true));
  };

  return (
    <>
      <ul>
        {images.map((image) => (
          <li>
            <img src={image.s3FileUrl} width="80px"></img>
            <button type="button" onClick={() => deleteImage(image.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <ImageUploader setIsUploaded={setIsUpdated}></ImageUploader>
    </>
  );
};

export default ImagesPage;
