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
  topSpacing?: string;
  letterSpacing: string;
}
