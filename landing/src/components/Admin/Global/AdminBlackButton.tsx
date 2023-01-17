import React from "react";
import * as Styled from "../../../styles/AdminPage";

interface IAdminButtonProps {
  size?: string;
  text?: string;
  onClick?: () => void;
}

const AdminBlackButton = ({
  text = "read more",
  size = "",
  onClick,
}: IAdminButtonProps) => {
  return (
    <Styled.AdminBlackButton onClick={onClick} size={size}>
      <Styled.AdminBlackButtonText>{text}</Styled.AdminBlackButtonText>
    </Styled.AdminBlackButton>
  );
};

export default AdminBlackButton;
