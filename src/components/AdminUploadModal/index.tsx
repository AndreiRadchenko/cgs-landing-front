import React, { useEffect, useState } from "react";
import * as Styled from "../../styles/AdminPage";

const AdminUploadModal = ({ back }: any) => {
  const [image, setImage] = useState<string | undefined>("");
  const [theme, setTheme] = useState("");
  const [file, setFile] = useState("");

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

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
      setFile(loadedFile.name);
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

  return (
    <Styled.AdminUploadModuleBack>
      <Styled.AdminUploadModuleWrapper>
        <Styled.AdminUploadModuleCloseButton onClick={back} children="close" />
        <Styled.AdminUploadInput
          type="file"
          onChange={(e) => handleChange(e)}
          ref={hiddenFileInput}
        />
        <div>
          <Styled.AdminUploadModalButton
            theme="filled"
            onClick={(e) => handleClickUpload(e)}
          >
            Upload
          </Styled.AdminUploadModalButton>
          <Styled.AdminUploadModalButton theme={theme}>
            Submit
          </Styled.AdminUploadModalButton>
        </div>
        <Styled.AdminUploadModuleImgDiv>
          <img src={image} width="100%" />
          <Styled.AdminUploadInfo>
            {file}
          </Styled.AdminUploadInfo>
        </Styled.AdminUploadModuleImgDiv>
      </Styled.AdminUploadModuleWrapper>
    </Styled.AdminUploadModuleBack>
  );
};

export default AdminUploadModal;
