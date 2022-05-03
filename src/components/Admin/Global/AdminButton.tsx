import React from "react";
import * as Styled from "../../../styles/AdminPage";
import buttonBack from "../../../../public/back-button.png";
import Image from "next/image";

interface IAdminButtonProps {
  text: string;
  onClick?: () => void;
}

const AdminButton = ({ text = "read more", onClick }: IAdminButtonProps) => {
  const onClickFunction = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onClick!();
  };
  return (
    <Styled.AdminButton onClick={onClickFunction}>
      <Image src={buttonBack} />
      <Styled.AdminButtonText>{text}</Styled.AdminButtonText>
    </Styled.AdminButton>
  );
};

export default AdminButton;
