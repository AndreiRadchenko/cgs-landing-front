import Image from "next/image";
import React, { useState } from "react";
import { adminGlobalService } from "../../../services/adminHomePage";
import * as Styled from "../../../styles/AdminPage";
import closeModal from "../../../../public/closeMOdal.svg";

interface IUploadProps {
  back: () => void;
  func?: (response?: unknown) => void;
}

const AdminUploadModal = ({ back, func = () => {} }: IUploadProps) => {
  const [image, setImage] = useState<string | undefined>("");
  const [theme, setTheme] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const loadedFile = event.target.files![0];
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

  const handleClickUpload = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
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
        <Styled.AdminUploadModuleCloseButton onClick={back}>
          <Image src={closeModal} />
        </Styled.AdminUploadModuleCloseButton>
        <Styled.AdminUploadInput
          type="file"
          onChange={handleChange}
          ref={hiddenFileInput}
        />
        <Styled.AdminUploadModuleImgDiv>
          {image ? (
            <img src={image} width="100%" />
          ) : (
            <Styled.AdminSubTitle>
              Drag and drop files here (not now)
            </Styled.AdminSubTitle>
          )}
        </Styled.AdminUploadModuleImgDiv>
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
      </Styled.AdminUploadModuleWrapper>
    </Styled.AdminUploadModuleBack>
  );
};

export default AdminUploadModal;
