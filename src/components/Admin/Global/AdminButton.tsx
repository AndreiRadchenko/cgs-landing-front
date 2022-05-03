import React from "react";
import * as Styled from "../../../styles/AdminPage";
import buttonBack from "../../../../public/back-button.png";
import Image from "next/image";

const AdminButton = ({text = "read more"}) => {
  return (
    <Styled.AdminButton onClick={(e) => e.preventDefault()}>
      <Image src={buttonBack} />
      <Styled.AdminButtonText>{text}</Styled.AdminButtonText>
    </Styled.AdminButton>
  );
};

export default AdminButton;
