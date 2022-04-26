import React, { useEffect, useState } from "react";
import * as Styled from "../../styles/AdminPage";

const AdminUploadModal = ({ back }: any) => {
  const [image, setImage] = useState<string | undefined>("");

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  const handleChange = (event: any) => {
    const reader = new FileReader();
    const loadedFile = event.target.files[0];
    reader.onload = () => {
      if (reader.readyState === 2) {
        if (typeof reader.result === "string") {
          setImage(reader.result);
        }
      }
    };
    reader.readAsDataURL(loadedFile);
  };

  return (
    <Styled.AdminUploadModuleBack>
      <Styled.AdminUploadModuleWrapper>
        <Styled.AdminUploadModuleCloseButton onClick={back} children="close" />
        <Styled.AdminUploadInput
          type="file"
          onChange={(e) => handleChange(e)}
        />
        <Styled.AdminUploadModuleImgDiv>
          <img src={image} width="100%" />
        </Styled.AdminUploadModuleImgDiv>
      </Styled.AdminUploadModuleWrapper>
    </Styled.AdminUploadModuleBack>
  );
};

export default AdminUploadModal;
