import React from "react";
import * as Styled from "../../../styles/AdminPage";

interface IAdminButtonProps {
  text?: string;
  onClick?: () => void;
}

const AdminBlackButton = ({
  text = "read more",
  onClick,
}: IAdminButtonProps) => {
  return (
    <Styled.AdminBlackButton onClick={onClick}>
      <Styled.AdminBlackButtonText>{text}</Styled.AdminBlackButtonText>
    </Styled.AdminBlackButton>
  );
};

export default AdminBlackButton;
