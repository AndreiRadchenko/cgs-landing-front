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
  const onClickFunction = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onClick!();
  };

  return (
    <Styled.AdminBlackButton onClick={onClickFunction}>
      <Styled.AdminBlackButtonText>{text}</Styled.AdminBlackButtonText>
    </Styled.AdminBlackButton>
  );
};

export default AdminBlackButton;
