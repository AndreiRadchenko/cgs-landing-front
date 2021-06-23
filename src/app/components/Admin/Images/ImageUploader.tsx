import { useState } from "react";
import { uploadImage } from "services/api/adminApi";
import { Button } from "../Form.styles";
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
    const file = e.target.files[0];
    setFile(file);
  };

  return (
    <Styled.Wrapper>
      {!file && (
        <Styled.InputWrapper>
          <input
            className="fileInput"
            id="input__file"
            type="file"
            onChange={(e) => handleImageChange(e)}
          />
          <label htmlFor="input__file">Choose the file</label>
        </Styled.InputWrapper>
      )}
      <Styled.ButtonWrapper>
        <Button
          big={false}
          className="submitButton"
          type="button"
          onClick={(e) => handleSubmit(e)}
        >
          Upload new
        </Button>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
};

export default ImageUploader;
