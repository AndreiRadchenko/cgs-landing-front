import { useState } from "react";
import { uploadImage } from "services/api/adminApi";
import * as Styled from "./ImagesUploader.style";

const ImageUploader: React.FC<{ setIsUploaded: Function }> = ({
  setIsUploaded,
}) => {
  const [file, setFile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImage(file).then(() => setIsUploaded(true));
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    setFile(file);
  };

  return (
    <Styled.Wrapper>
      <input
        className="fileInput"
        type="file"
        onChange={(e) => handleImageChange(e)}
      />
      <button
        className="submitButton"
        type="button"
        onClick={(e) => handleSubmit(e)}
      >
        Upload Image
      </button>
    </Styled.Wrapper>
  );
};

export default ImageUploader;
