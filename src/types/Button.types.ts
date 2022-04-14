import React from "react";

export interface IBaseButtonProps {
  children: React.ReactNode;
  type?: string;
  src?: any;
  onClick?: () => void;
  height?: string;
  width?: string;
  disabled?: boolean;
  letterSpacing?: string;
  isLoading?: boolean;
  topSpacing?: string;
}

export interface IStyledButtonProps {
  type: string;
  height?: string;
  width?: string;
  marginTop?: string;
  letterSpacing: string;
}

export interface IButtonTextProps {
  fontSize?: string;
  children: React.ReactNode;
}

export type LetsCodeFormPropTypes = {
  setButtonIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
};
