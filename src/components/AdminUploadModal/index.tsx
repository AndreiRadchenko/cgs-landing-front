import React, { useEffect, useState } from "react";
import { adminGlobalService } from "../../services/adminHomePage";
import * as Styled from "../../styles/AdminPage";

interface IUploadProps {
  back: () => void;
  func?: any;
}

const AdminUploadModal = ({ back, func = () => {} }: IUploadProps) => {
  const [image, setImage] = useState<string | undefined>("");
  const [theme, setTheme] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  const handleChange = (event: any) => {
    const reader = new FileReader();
    const loadedFile = event.target.files[0];
    reader.onload = () => {
      if (reader.readyState === 2) {
        if (typeof reader.result === "string") {
          setImage(reader.result);
          setTheme("filled");
        }
      }
    };
    try {
      reader.readAsDataURL(loadedFile);
      setFile(loadedFile);
    } catch (e) {
      setImage("");
      setTheme("");
    }
  };

  const handleClickUpload = (event: any) => {
    event.preventDefault();
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", file!, file!.name);
      const response = await adminGlobalService.uploadImage(formData);
      func(response);
      back();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Styled.AdminUploadModuleBack>
      <Styled.AdminUploadModuleWrapper>
        <Styled.AdminUploadModuleCloseButton onClick={back} children="close" />
        <Styled.AdminUploadInput
          type="file"
          onChange={handleChange}
          ref={hiddenFileInput}
        />
        <div>
          <Styled.AdminUploadModalButton
            theme="filled"
            onClick={handleClickUpload}
          >
            Upload
          </Styled.AdminUploadModalButton>
          <Styled.AdminUploadModalButton theme={theme} onClick={handleSubmit}>
            Submit
          </Styled.AdminUploadModalButton>
        </div>
        <Styled.AdminUploadModuleImgDiv>
          <img src={image} width="100%" />
          <Styled.AdminUploadInfo>{file?.name || null}</Styled.AdminUploadInfo>
        </Styled.AdminUploadModuleImgDiv>
      </Styled.AdminUploadModuleWrapper>
    </Styled.AdminUploadModuleBack>
  );
};

export default AdminUploadModal;
