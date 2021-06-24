import { useState } from "react";
import { uploadImage } from "services/api/adminApi";
import { Button } from "../Form.styles";
import * as Styled from "./ImagesUploader.style";

const ImageUploader: React.FC<{ setIsUploaded: Function }> = ({
  setIsUploaded,
}) => {
  const [file, setFile] = useState<any>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    uploadImage(file).then(() => {
      setIsUploaded(true);
    });

    setFile(null);
  };

  const handleImageChange = (event: any) => {
    event.preventDefault();

    const [file] = event.target.files;

    setFile(file);
  };

  return (
    <Styled.Wrapper>
      <Styled.InputWrapper>
        <input
          className="fileInput"
          id="input__file"
          type="file"
          onChange={handleImageChange}
        />
        <label htmlFor="input__file">
          Choose the file
        </label>
      </Styled.InputWrapper>
      <Styled.ButtonWrapper>
        <Button
          big={false}
          className="submitButton"
          type="button"
          onClick={handleSubmit}
          disabled={!file}
        >
          Upload new
        </Button>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
};

export default ImageUploader;
