import React from "react";
import * as Styled from "../../../styles/AdminPage";
import buttonBack from "../../../../public/back-button.png";
import Image from "next/image";

const AdminButton = () => {
  return (
    <Styled.AdminButton onClick={(e) => e.preventDefault()}>
      <Image src={buttonBack} />
      <Styled.AdminButtonText>read more</Styled.AdminButtonText>
    </Styled.AdminButton>
  );
};

export default AdminButton;
